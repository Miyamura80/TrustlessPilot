var express = require('express');
var router = express.Router();
const { postToIPFS } = require('../components/ipfs/postToIPFS')
const { createReview } = require('../components/contract/createReview')

router.post('/', async function(req, res, next) {
  const { title, score, content, author, reviewedProductId, chainId, contractAddress, tokenId } = req.body;
  const postRes = await postToIPFS({
    title: title,
    score: score,
    content: content
  });
  console.log(postRes)
  const metadataUri = ""; // get from postRes
  await createReview(chainId, contractAddress, tokenId, metadataUri, author)
  res.status(200).json({ message: "Review created!"});
});

module.exports = router;
