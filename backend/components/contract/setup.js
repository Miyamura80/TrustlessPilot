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

function parse(data) {
    return ethers.utils.parseUnits(Math.ceil(data) + '', 'gwei');
}

async function calcGas(gasEstimated) {
    let gas = {
        gasLimit: gasEstimated, //.mul(110).div(100)
        maxFeePerGas: ethers.BigNumber.from(40000000000),
        maxPriorityFeePerGas: ethers.BigNumber.from(40000000000)
    };
    const data = await fetch('https://gasstation-mumbai.matic.today/v2').then(async (res) => {
      return await res.json()
    }).catch((error) => {
      console.log(error)
    });
    gas.maxFeePerGas = parse(data['fast']['maxFee']);
    gas.maxPriorityFeePerGas = parse(data['fast']['maxPriorityFee']);
    return gas;
};

module.exports.getContract = getContract;
module.exports.calcGas = calcGas;
