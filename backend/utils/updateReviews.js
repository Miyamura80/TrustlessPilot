const { getReviewScore } = require("./reviewUtils");
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
  review.rating = await getReviewScore(review)
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
