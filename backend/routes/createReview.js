var express = require('express');
var router = express.Router();
const { postToIPFS } = require('../components/ipfs/postToIPFS')
const { createReview } = require('../components/contract/createReview')

router.post('/', async function(req, res, next) {
  const { title, score, content, author, reviewedProductId, chainId, contractAddress, tokenId } = req.body;

  var metadataUri = null;
  const postRes = postToIPFS.resolve({
    title: title,
    score: score,
    content: content
  }).then( (res) => {
    metadataUri = res.Hash;
    // console.log(res);
    // res -> name, hash, size
  }).then( () => {
    console.log(metadataUri)
    createReview(chainId, contractAddress, tokenId, metadataUri, author);
  })
  .catch((err) => console.error(err));

  res.status(200).json({ message: "Review created!"});
});

module.exports = router;
