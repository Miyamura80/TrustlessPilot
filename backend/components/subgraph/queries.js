const { client } = require('./setup');
const { gql } = require('@apollo/client');

function queryReviews(chainId, contractAddress, tokenId) {
  return `
    {
      signetChangedEntities(orderBy: timestamp, orderDirection: asc, where: {owner: "${address}"}) {
        id
        blockNumber
        timestamp
        previous
        signet
        owner
      }
    }
  `
}

function queryReviewRatings(reviewId) {
  const getQuery = `
    {
      signetChangedEntities(orderBy: timestamp, orderDirection: asc, where: {owner: "${address}"}) {
        id
        blockNumber
        timestamp
        previous
        signet
        owner
      }
    }
  `
  return new Promise((resolve, reject) => {
  client
    .query({
      query: gql(queryReviewRatings(chainId, contractAddress, tokenId)),
    })
    .then((data) => {
      return(data);
    })
    .catch((err) => {
      console.log('Error fetching data: ', err)
      return;
    })
  })
}

module.exports.queryReviews = queryReviews;
module.exports.queryReviewRatings = queryReviewRatings;
