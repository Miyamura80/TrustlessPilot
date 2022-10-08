const { ethers } = require('ethers');
const { getProvider } = require('../ethersUtils/setup');
const { CONTRACT_ADDRESS, CONTRACT_NETWORK } = require('../constants');

function getContract() {
  const provider = getProvider(CONTRACT_NETWORK);
  const abi = ["function createReview(uint _chainID, address _contractAddress, uint _tokenId, string memory _metadataUri, address _author) public",
               "function createReviewRating(uint _reviewId, int _score, address _rater) public"
              ]
  return new ethers.Contract(CONTRACT_ADDRESS, abi, provider);
}

module.exports.getContract = getContract;
