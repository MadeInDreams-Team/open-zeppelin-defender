// test/MDEX.test.js
// Load dependencies
require('dotenv').config()
const { expect } = require('chai');

// TRUFFLE
 //const MDEX = artifacts.require('MDEX');
 
// // Start test block
// contract('MDEX (proxy)', function (accounts) {
//   beforeEach(async function () {
//     owner = accounts[0];
//     // Deploy a new Box contract for each test
//     this.mdex = await deployProxy(MDEX, [owner]);
//   });
 
//   // Test case
//   it('store and retrieve tradding fees', async function () {
//     // Store a value
//     await this.mdex.store(2);
 
//     // Test if the returned value is the same one
//     // Note that we need to use strings to compare the 256 bit integers
//     expect((await this.mdex.retrieve()).toString()).to.equal('2');
//   });
// });


// HARDHAT


 
let MDEX;
let mdex;
 
// Start test block
describe('MDEV (proxy)', function () {
  beforeEach(async function () {
    MDEX = await ethers.getContractFactory("MDEV");
    mdex = await upgrades.deployProxy(MDEX,[process.env.MYADDRESS]);
  });
 
  // Test case
  it('retrieve returns a value previously initialized', async function () {
    await mdex.store(42)
   
    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await mdex.retrieve()).toString()).to.equal('42');
  });
});