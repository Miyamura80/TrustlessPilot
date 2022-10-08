const { getContract, calcGas } = require('./setup');
const { signer } = require('../ethersUtils/setup');

async function rateReview(reviewId, score, rater) {
  const contract = getContract();
  const signer = getSigner();
  const gasEstimated = await contract.estimateGas.reviews.createReviewRating(reviewId, score, rater);
  const gas = await calcGas(gasEstimated);
  try {
    return await contract.connect(signer).reviews.createReviewRating(reviewId, score, rater, {
        gasLimit: gas.gasLimit,
  			maxFeePerGas: gas.maxFeePerGas,
  			maxPriorityFeePerGas: gas.maxPriorityFeePerGas
    });
  } catch (error) {
    return 'error';
  }
}
