var express = require('express');
var router = express.Router();
const { postMetadata } = require('../components/subgraph/ipfs/postMetadata')
const { createReview } = require('../components/contract/createReview')

router.post('/', function(req, res, next) {
  const { title, score, content, author, reviewedProductId, chainId, contractAddress, tokenId } = req.body;
  const postRes = await postMetadata({
    title: title,
    score: score,
    content: content
  });
  const metadataUri = "";
  await createReview(chainId, contractAddress, tokenId, metadataUri, author)
  res.status(200).json{ message: "Review created!"};
});

module.exports = router;
