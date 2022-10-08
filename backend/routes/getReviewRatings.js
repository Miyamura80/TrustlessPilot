var express = require('express');
var router = express.Router();
const { queryReviewRatings } = require('../components/subgraph/queries');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/:reviewId', function(req, res, next) {
  const { reviewId } = req.params;
  const reviewRatings = await queryReviewRatings(reviewId);
  res.status(200).json(reviewRatings);
});

module.exports = router;
