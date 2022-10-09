const { createClient } = require('urql');

const APIURL = 'https://api.lens.dev/';

const urqlClient = new createClient({
  url: APIURL,
})

module.exports.client = urqlClient;
