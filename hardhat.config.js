require('dotenv').config()
require("@nomiclabs/hardhat-etherscan");
require("@nomiclabs/hardhat-ethers")
require("hardhat-deploy-ethers");
require('@openzeppelin/hardhat-upgrades');
//const MDEX = require('./artifacts/contracts/MDEX.sol/MDEX.json')
/**
 * @type import('hardhat/config').HardhatUserConfig
 */


 // task action function receives the Hardhat Runtime Environment as second argument
 task(
   "blockNumber",
   "Prints the current block number",
   async (_, { ethers }) => {
     await ethers.provider.getBlockNumber().then((blockNumber) => {
       console.log("Current block number: " + blockNumber);
     });
   }
 );



 task(
  "deploy",
  "Deploy your contract",
  async (_, { ethers,upgrades }) => {

    //let factory = new ethers.ContractFactory(MDEX.abi, MDEX.bytecode)
    const MDEV = await ethers.getContractFactory("MDEV");
    const mdev = await upgrades.deployProxy(MDEV,['0xE02c4dE60234DA63e759eeE3F1AF219075e55E3E']);
    await mdev.deployed();
    console.log('YOUR CONTRACT ADDRESS :',mdev.address)

    //const gnosisSafe = '0x9FD08Cac2F176C0898ba4D73b02B757c6B2D7150';
    //console.log("Transferring ownership of ProxyAdmin...");
    // The owner of the ProxyAdmin can upgrade our contracts
    //await upgrades.admin.transferProxyAdminOwnership(gnosisSafe);
    //console.log("Transferred ownership of ProxyAdmin to:", gnosisSafe);
    
  }
);
 




 module.exports = {
  defaultNetwork: "rinkeby",
  networks: {
    hardhat: {
      forking: {
        url: "https://eth-mainnet.alchemyapi.io/v2/"+process.env.ALCHEMY_KEY,
        blockNumber: 12270871
      }
    },
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/"+process.env.INFURA_ID,
      accounts: {mnemonic: process.env.MNEMONIX}
    },
    local: {
      url: "https://127.0.0.1:8545/",
      accounts: {mnemonic: process.env.MNEMONIC}
    }
  },
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: process.env.ETHERSCAN
  },
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 20000
  }
}
//npx hardhat verify --network rinkeby 0x887C4272CC7aF72C37738777B77879577B31D7BA "0xE02c4dE60234DA63e759eeE3F1AF219075e55E3E"