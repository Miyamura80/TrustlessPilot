const { client } = require('./setup');
const gql = require('graphql-tag');

function queryProfile(address) {
  function getQuery(address) {
    return `
    {
      profiles(request: { ownedBy: ["${address}"], limit: 10 }) {
        items {
          id
          name
          bio
          attributes {
            displayType
            traitType
            key
            value
          }
          followNftAddress
          metadata
          isDefault
          picture {
            ... on NftImage {
              contractAddress
              tokenId
              uri
              verified
            }
            ... on MediaSet {
              original {
                url
                mimeType
              }
            }
            __typename
          }
          handle
          coverPicture {
            ... on NftImage {
              contractAddress
              tokenId
              uri
              verified
            }
            ... on MediaSet {
              original {
                url
                mimeType
              }
            }
            __typename
          }
          ownedBy
          dispatcher {
            address
            canUseRelay
          }
          stats {
            totalFollowers
            totalFollowing
            totalPosts
            totalComments
            totalMirrors
            totalPublications
            totalCollects
          }
          followModule {
            ... on FeeFollowModuleSettings {
              type
              amount {
                asset {
                  symbol
                  name
                  decimals
                  address
                }
                value
              }
              recipient
            }
            ... on ProfileFollowModuleSettings {
             type
            }
            ... on RevertFollowModuleSettings {
             type
            }
          }
        }
        pageInfo {
          prev
          next
          totalCount
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
      return(reviews['data']['profiles']['items'][0]);
    })
    .catch((err) => {
      console.log('Error fetching data: ', err)
      return;
    })
}

module.exports.queryProfile = queryProfile;
