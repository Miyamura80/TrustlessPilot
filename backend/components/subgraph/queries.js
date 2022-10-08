const { client } = require('./setup');
const gql = require('graphql-tag');

function queryReviews(chainId, contractAddress, tokenId) {
  function getQuery(chainId, contractAddress, tokenId) {
    return `
    {
      reviewSubmittedEntities(where: {chainID: ${chainId}, contractAddress: "${contractAddress}", tokenId: ${tokenId}}) {
        id
        blockNumber
        timestamp
        count
        chainID
        contractAddress
        tokenId
        metadataUri
        author
        reviewId
      }
    }
    `
  }

  return client
    .query({
      query: gql(getQuery(chainId, contractAddress, tokenId)),
    })
    .then((reviews) => {
      return(reviews['data']['reviewSubmittedEntities']);
    })
    .catch((err) => {
      console.log('Error fetching data: ', err)
      return;
    })
}

function queryReviewRatings(reviewId) {
  function getQuery(reviewId) {
    return `
      {
        rewviewRatingSubmittedEntities(where: {reviewId: ${reviewId}}) {
          id
          blockNumber
          timestamp
          count
          reviewId
          score
          rater
        }
      }
    `
  }
  return client
    .query({
      query: gql(getQuery(reviewId)),
    })
    .then((reviewRatings) => {
      return(reviewRatings['data']['rewviewRatingSubmittedEntities']);
    })
    .catch((err) => {
      console.log('Error fetching data: ', err)
      return;
    })
}

module.exports.queryReviews = queryReviews;
module.exports.queryReviewRatings = queryReviewRatings;
