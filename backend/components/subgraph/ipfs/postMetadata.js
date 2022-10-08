

const projectId = process.env.INFURA_PROJECT_ID
const projectSecret = process.env.INFURA_SECRET_API_KEY

const postMetadata = (metadata) => {
    const res = requests.post('https://ipfs.infura.io:5001/api/v0/add', files=files)
}