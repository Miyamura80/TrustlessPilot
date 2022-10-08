//import * as IPFS from 'ipfs-core';
const IPFS = require('ipfs-core');

const getIPFSData = async(cid) => {
const node = await IPFS.create();

//retrieving a file from IPFS can be done by using a cat call
const chunks = [];
for await (const chunk of node.cat(cid)) {
  chunks.push(chunk);
}

console.log("Retrieved file contents:", chunks.toString());
}

module.exports = getIPFSData;