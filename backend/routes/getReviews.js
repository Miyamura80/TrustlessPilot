const express = require("express");
const router = express.Router();

const { queryReviews } = require("../components/subgraph/queries");
const updateReviews = require("../utils/updateReviews");

router.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

router.get(
  "/:chainId/:contractAddress/:tokenId",
  async function (req, res, next) {
    const { chainId, contractAddress, tokenId } = req.params;
    const reviews = await queryReviews(chainId, contractAddress, tokenId);

    const updatedReviews = await updateReviews(reviews);

    res.status(200).json(updatedReviews);
  }
);

module.exports = router;
