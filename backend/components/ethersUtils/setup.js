const { ethers } = require('ethers');

function getProvider(network) {
  const ankrUrl = "https://rpc.ankr.com/" + network;
  return new ethers.providers.JsonRpcProvider(ankrUrl);
}

module.exports.getProvider = getProvider;
