var express = require("express");
var router = express.Router();
const { hashToCache } = require("../utils/writebackCache");
const { createReview } = require("../components/contract/createReview");

router.post("/", async function (req, res, next) {
  const { title, score, content, author, chainId, contractAddress, tokenId } =
    req.body;
  /**
   * @TODO save to cache- set key as hash of title,score,content
   * //save key to metadatakey
   */
  const metadataKey = hashToCache({
    title,
    score,
    content,
  });

  await createReview(chainId, contractAddress, tokenId, metadataKey, author);
  res.status(200).json({ message: "Review created!" });
});

module.exports = router;
