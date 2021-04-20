# open-zeppelin-defender

Making use of open zeppelin defender

This is the ideal setup to 

- Write Upgradeable and Secure Smart Contract
- Deploy and verify smart contract


- Vou can watch the video here


- The medium article here
## Installation
To install this package run

```npm install @madeindreams/open-zeppelin-defender```

You will need to rename the .envexample to .env and edit it with the following
```
MNEMONIC = " 12 words seedpharse"   (required)
ETHERSCAN = "etherscan api key"     (optional - verification only)
INFURA_ID = "infura ID"             (required)
ALCHEMY_KEY = "Alchemy ID"          (optional - mainnet fork)
MYADDRESS = "your wallet address"   (required)
```

Once you are done save the .env file.

⚠️ Always ensure that the .env file is listed in the .gitignore file. The content is secret and you don't want to publish it.

To Compile the smart contract use the command

```npm run compile```

to deploy your contract

```npm run deploy```

To run the test

```npm run test```

If you wish to use a multisignature vault to own your contract. You must uncomment the lines 33 to 37 in the hardhat.config.js file that transfer the contract ownership to the vault.

## Resource

 - https://defender.openzeppelin.com/
 - https://hardhat.org/
 - https://rinkeby.gnosis-safe.io/app/#/welcome
 - https://faucet.rinkeby.io/
 

 🤘