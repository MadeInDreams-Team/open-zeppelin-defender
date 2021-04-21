// test/MDEX.test.js
// Load dependencies
require('dotenv').config()
const { expect } = require('chai');




 
let MDEX;
let mdex;
 
// Start test block
describe('MDEV (proxy)', function () {
  beforeEach(async function () {
    MDEX = await ethers.getContractFactory("MDEV");
    mdex = await upgrades.deployProxy(MDEX,['0xE02c4dE60234DA63e759eeE3F1AF219075e55E3E']);
  });
 
  // Test case
  it('retrieve returns a value previously initialized', async function () {
    await mdex.store(42)
   
    // Test if the returned value is the same one
    // Note that we need to use strings to compare the 256 bit integers
    expect((await mdex.retrieve()).toString()).to.equal('42');
  });
});