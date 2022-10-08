import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://api.thegraph.com/subgraphs/name/kopy-kat/w3rate',
  cache: new InMemoryCache(),
});

module.exports.client = client;
