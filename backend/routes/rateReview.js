var express = require('express');
var router = express.Router();
const { rateReview } = require('../components/contract/rateReview')

router.post('/', async function(req, res, next) {
  const { reviewId, score, rater } = req.body;
  await rateReview(reviewId, score, rater)
  res.status(200).json{ message: "Review rated!"};
});

module.exports = router;
