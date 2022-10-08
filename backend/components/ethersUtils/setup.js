const { ethers } = require('ethers');
const { CONTRACT_NETWORK } = require('../constants');

function getProvider(network) {
  const ankrUrl = "https://rpc.ankr.com/" + network;
  return new ethers.providers.JsonRpcProvider(ankrUrl);
}

function getSigner(network) {
  const provider = getProvider(CONTRACT_NETWORK);
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider);
  return signer;
}

module.exports.getProvider = getProvider;
module.exports.getSigner = getSigner;
