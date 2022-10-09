

async function getReviewScore(review) {
    const { reviewId } = review;
    const ratingsArr = await queryReviewRatings(reviewId);
    const ratingSum = ratingsArr.reduce(
      (sum, ratingObj) => (sum += ratingObj.score),
      0
    );
    return ratingsArr.length == 0 ? 0 : ratingSum / ratingsArr.length;
}

module.exports.getReviewScore = getReviewScore