const { ApolloClient, InMemoryCache, ApolloProvider, gql } = require('@apollo/client');
const fetch = require("cross-fetch");

const client = new ApolloClient({
  link: new HttpLink({ uri: 'https://api.thegraph.com/subgraphs/name/kopy-kat/w3rate', fetch }),
  cache: new InMemoryCache(),
});

module.exports.client = client;
