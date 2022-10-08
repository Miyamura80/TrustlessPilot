var express = require('express');
var router = express.Router();
const {postMetadata} = require('./../components/subgraph/ipfs/postMetadata')

const productId = null;

router.get('/', function(req, res, next) {
  productId = require(req.params.productId);

  res.send('respond with a resource');
});

router.post('/create_review', function(req, res, next) {
  const [title, score, body, author, reviewedProductId, chainId, contractAddress, tokenId] = require(req.body.review);
  const metadata = null;
  const postRes = await postMetadata(metadata);
});

module.exports = router;
