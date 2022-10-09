const { queryReviewRatings } = require("../components/subgraph/queries");
const { readFromCache } = require("./writeBackCache");
/**
 * @param {*} arrOfReviews array of reviewsObjects returned from querying reviews
 * @dev avgScore and metadata field added to each reviewObject
 */
async function updateReviews(arrOfReviews) {
  const updatedReviews = await Promise.all(arrOfReviews.map(addFields));
  return updatedReviews;
}

/**
 *
 * @param {*} review object containing review Id and metadataUri
 * @returns an updated review with rating, metadata, and weight fields
 */

async function addFields(review) {
  const { metadataUri, reviewId } = review;
  const ratingsArr = await queryReviewRatings(reviewId);
  let weight = new Weight();
  let ratingSum = 0;
  ratingsArr.forEach((ratingObj) => {
    const { score } = ratingObj;
    ratingSum += score;
    weight = updateWeight(score, weight);
  });
  review.rating = ratingsArr.length < 1 ? 0 : ratingSum / ratingsArr.length;
  review.metadata = readFromCache(metadataUri);
  review.weight = weight;
  return review;
}
/**
 *
 * @param {*} score score on ratingObject
 * @param {*} weight class instance with weight fields
 * @returns updated weight class instance
 */
function updateWeight(score, weight) {
  score === 5
    ? weight.five++
    : score === 4
    ? weight.four++
    : score === 3
    ? weight.three++
    : score === 2
    ? weight.two++
    : score === 1
    ? weight.one++
    : weight.zero++;
  return weight;
}

class Weight {
  five = 0;
  four = 0;
  three = 0;
  two = 0;
  one = 0;
  zero = 0;
}

module.exports = updateReviews;
