const { ethers } = require('ethers');
const { getProvider } = require('../ethersUtils/setup');

function getContract() {
  const provider = getProvider('polygon');
  const abi = ["function isVerified(uint256) public view returns (bool)"]
  return new ethers.Contract("0x8f9b3A2Eb1dfa6D90dEE7C6373f9C0088FeEebAB", abi, provider);
}

module.exports.getContract = getContract;
