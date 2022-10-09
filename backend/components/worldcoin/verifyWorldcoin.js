const { getContract } = require('./setup');

async function verifyWorldcoin(lensProfileId) {
  const contract = getContract();
  return await contract.isVerified(lensProfileId)
}

module.exports.verifyWorldcoin = verifyWorldcoin;
