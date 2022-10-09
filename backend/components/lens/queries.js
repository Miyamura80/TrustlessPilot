const { client } = require('./setup');
const gql = require('graphql-tag');

function queryProfile(address) {
  function getQuery(address) {
    return `
    {
      accounts(where: {address: "${address}"}) {
        address
        profiles {
          handle
          totalFollowers
          totalFollowings
          imageURI
        }
      }
    }
    `
  }

  return client
    .query({
      query: gql(getQuery(address)),
    })
    .then((reviews) => {
      return(reviews['data']['accounts'][0]);
    })
    .catch((err) => {
      console.log('Error fetching data: ', err)
      return;
    })
}

module.exports.queryProfile = queryProfile;
