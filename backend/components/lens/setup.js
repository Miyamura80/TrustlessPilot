const gql = require('graphql-tag');
const ApolloClient = require('apollo-boost').ApolloClient;
const fetch = require('cross-fetch/polyfill').fetch;
const createHttpLink = require('apollo-link-http').createHttpLink;
const InMemoryCache = require('apollo-cache-inmemory').InMemoryCache;

const client = new ApolloClient({
  link: createHttpLink({ uri: 'https://api.thegraph.com/subgraphs/name/rtomas/lens-subgraph', fetch }),
  cache: new InMemoryCache(),
});

module.exports.client = client;
