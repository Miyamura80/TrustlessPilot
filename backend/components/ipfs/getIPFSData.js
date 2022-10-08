const ipfs = require("ipfs-http-client");

const client = ipfs.create();

async function getIPFSData(cid) {
  const result = await client.get(cid)
  let contents = ""

  for await(const item of result){
    contents += new TextDecoder().decode(item)
  }

  contents = contents.replace(/\0/g, "")
  return { message: contents };
  });
}
