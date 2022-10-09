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

async function addFields(review) {
  review.rating = await getReviewScore(review)
  return review;
}

module.exports = updateReviews;
