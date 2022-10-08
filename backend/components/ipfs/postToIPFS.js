const ipfsClient = require('ipfs-http-client');

function postToIPFS(dataJson, path = '') {
    const res = requests.post('https://ipfs.infura.io:5001/api/v0/add', files=files)
    const projectId = process.env.INFURA_PROJECT_ID
    const projectSecret = process.env.INFURA_SECRET_API_KEY

    const auth =
        'Basic ' + Buffer.from(projectId + ':' + projectSecret).toString('base64');

    const client = ipfsClient.create({
        host: 'ipfs.infura.io',
        port: 5001,
        protocol: 'https',
        headers: {
            authorization: auth,
        },
    });

    const fileToAdd = {
        path: path,
        content: dataJson,
        mode: string,
    }

    client.add(fileToAdd, []).then((res) => {
        console.log(res);
        // res -> name, hash, size
        // probably need to save hash
    });

    // previous implementation

    // const options = {
    //     host: 'ipfs.infura.io',
    //     port: 5001,
    //     path: 'https://ipfs.infura.io:5001/api/v0/add?pin=false',
    //     method: 'POST',
    //     auth: INFURA_PROJECT_ID + ':' + INFURA_SECRET_API_KEY,
    //     file: metadata,
    // };

    // let req = https.request(options, (res) => {
    //     let body = '';
    //     res.on('data', function (chunk) {
    //         body += chunk;
    //     });
    //     res.on('end', function () {
    //         console.log(body);
    //     });
    // });
    // req.end();
}

module.exports.postToIPFS = postToIPFS;
