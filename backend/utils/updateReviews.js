const { queryReviewRatings } = require("../components/subgraph/queries");
const { readFromCache } = require("./writeBackCache");
/**
 * @param {*} arrOfReviews array of reviewsObjects returned from querying Reviews
 * @dev avgScore and metadata field added to each reviewObject
 */
const updateReviews = (arrOfReviews) => {
  const updatedReviews = arrOfReviews.map(addFields);
  return updateReviews;
};

function addFields(review) {
  const { metadataUri, reviewId } = review;
  const ratingsArr = queryReviewRatings(reviewId);
  const ratingSum = ratingsArr.reduce(
    (sum, ratingObj) => (sum += ratingObj.score),
    0
  );
  review.avgScore = ratingSum / ratingsArr.length;
  review.metadata = readFromCache(metadataUri);
  return review;
}

module.exports = updateReviews;
