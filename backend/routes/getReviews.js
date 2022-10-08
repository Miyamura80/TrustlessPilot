var express = require('express');
var router = express.Router();
const { gql } = require('@apollo/client');
const { client } = require('../components/subgraph/setup');
const { queryReviews } = require('../components/subgraph/queries');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.post('/', function(req, res, next) {
  const { reviewId } = req.body['data'];
  return new Promise((resolve, reject) => {
  client
    .query({
      query: gql(queryReviews(reviewId)),
    })
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log('Error fetching data: ', err)
      res.status(500).json({message: 'Error'});
    })
  })
});

module.exports = router;
