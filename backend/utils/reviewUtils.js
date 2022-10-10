const { queryReviewRatings } = require('../components/subgraph/queries');

async function getReviewScore(review) {
    const { reviewId } = review;
    const ratingsArr = await queryReviewRatings(reviewId);
    const ratingSum = ratingsArr.reduce(
      (sum, ratingObj) => (sum += ratingObj.score),
      0
    );
    return ratingsArr.length == 0 ? 0 : ratingSum / ratingsArr.length;
}

const myReviews = [{
  id: '0xf510a8d67f12cf22a1a2012aaed76767cdfa2e8fd1d7cc008d3fbb79f2bbcd50-197',
  blockNumber: '28523326',
  timestamp: '1665295036',
  count: '1',
  chainID: '2',
  contractAddress: '0x727fea0982f8f95902bfe40c53484d0dd1bbd623',
  tokenId: '3',
  metadataUri: '2ef156f62e1d19d19a49970a8d7cf9c193a41277e353c07985ad3c4315c44519',
  author: '0x0000000ab702853d1163d38d047fa351fa78e9d3',
  imageUrl: "https://github.com/Miyamura80/W3Rate/blob/main/marketplace_demo/public/profile1.png?raw=true",
  name: "0x0000000ab702853d1163d38d047fa351fa78e9d3",
  reputation: 45,
  upvotes: 221,
  reviewId: '2',
  __typename: 'ReviewSubmittedEntity',
  rating: 4,
  metadata: {
    title: 'Fantastic Keyboard!',
    score: 20,
    content: 'I adore this keyboard, perfect for degens.',
  }
  },
  {
  id: '0xf510a8d67f12cf22a1a2012aaed76767cdfa2e8fd1d7cc008d3fbb79f2bbcd50-197',
  blockNumber: '28523326',
  timestamp: '1665295036',
  count: '1',
  chainID: '2',
  contractAddress: '0x727fea0982f8f95902bfe40c53484d0dd1bbd623',
  tokenId: '3',
  metadataUri: '2ef156f62e1d19d19a49970a8d7cf9c193a41277e353c07985ad3c4315c44519',
  author: '0x0000000ab702853d1163d38d047fa351fa78e9d3',
  imageUrl: 'https://github.com/Miyamura80/W3Rate/blob/main/marketplace_demo/public/profile2.jpg?raw=true',
  name: "kopykat.lens",
  reputation: 31,
  upvotes: 379,
  reviewId: '2',
  __typename: 'ReviewSubmittedEntity',
  rating: 3,
  metadata: {
    title: 'Okay keyboard for price',
    score: 20,
    content: 'Good performance ratio for the reasonable price!',
  }
  }
]

const profileReviews = [{
  id: '0xf510a8d67f12cf22a1a2012aaed76767cdfa2e8fd1d7cc008d3fbb79f2bbcd50-197',
  blockNumber: '28523326',
  timestamp: '1665295036',
  count: '1',
  chainID: '2',
  contractAddress: '0x727fea0982f8f95902bfe40c53484d0dd1bbd623',
  tokenId: '3',
  metadataUri: '2ef156f62e1d19d19a49970a8d7cf9c193a41277e353c07985ad3c4315c44519',
  author: '0x0000000ab702853d1163d38d047fa351fa78e9d3',
  imageUrl: "https://github.com/Miyamura80/W3Rate/blob/main/marketplace_demo/public/profile2.jpg?raw=true",
  name: "kopykat.lens",
  reputation: 31,
  upvotes: 608,
  reviewId: '2',
  __typename: 'ReviewSubmittedEntity',
  rating: 4,
  metadata: {
    title: 'Great keyboard but a little oudated',
    score: 20,
    content: 'I had this keyboard for a few years and have been really happy with it but it is getting a bit old now and there are no new models.',
  }
  },
  {
    id: '0xf510a8d67f12cf22a1a2012aaed76767cdfa2e8fd1d7cc008d3fbb79f2bbcd50-197',
    blockNumber: '28523326',
    timestamp: '1665295036',
    count: '1',
    chainID: '2',
    contractAddress: '0x727fea0982f8f95902bfe40c53484d0dd1bbd623',
    tokenId: '3',
    metadataUri: '2ef156f62e1d19d19a49970a8d7cf9c193a41277e353c07985ad3c4315c44519',
    author: '0x0000000ab702853d1163d38d047fa351fa78e9d3',
    imageUrl: "https://github.com/Miyamura80/W3Rate/blob/main/marketplace_demo/public/profile2.jpg?raw=true",
    name: "kopykat.lens",
    reputation: 31,
    upvotes: 221,
    reviewId: '2',
    __typename: 'ReviewSubmittedEntity',
    rating: 5,
    metadata: {
      title: 'Really big fan of this keyboard for travelling',
      score: 20,
      content: 'I can definitely recommend using this as a travel keyboard as it is really lightweight and the battery can last for weeks.',
    }
    },
  {
  id: '0xf510a8d67f12cf22a1a2012aaed76767cdfa2e8fd1d7cc008d3fbb79f2bbcd50-187',
  blockNumber: '28523326',
  timestamp: '1665295036',
  count: '1',
  chainID: '2',
  contractAddress: '0x727fea0982f8f95902bfe40c53484d0dd1bbd623',
  tokenId: '3',
  metadataUri: '2ef156f62e1d19d19a49970a8d7cf9c193a41277e353c07985ad3c4315c44519',
  author: '0x0000000ab702853d1163d38d047fa351fa78e9d3',
  imageUrl: 'https://github.com/Miyamura80/W3Rate/blob/main/marketplace_demo/public/profile2.jpg?raw=true',
  name: "kopykat.lens",
  reputation: 31,
  upvotes: 162,
  reviewId: '2',
  __typename: 'ReviewSubmittedEntity',
  rating: 2,
  metadata: {
    title: 'Okay keyboard for price',
    score: 20,
    content: 'Good performance ratio for the reasonable price!',
  }
  }
]

const otherReviews = [{
  id: '0xf510a8d67f12cf22a1a2012aaed76767cdfa2e8fd1d7cc008d3fbb79f2bbcd50-197',
  blockNumber: '28523326',
  timestamp: '1665295036',
  count: '1',
  chainID: '2',
  contractAddress: '0x727fea0982f8f95902bfe40c53484d0dd1bbd623',
  tokenId: '3',
  metadataUri: '2ef156f62e1d19d19a49970a8d7cf9c193a41277e353c07985ad3c4315c44519',
  author: '0x0000000ab702853d1163d38d047fa351fa78e9d3',
  imageUrl: "https://github.com/Miyamura80/W3Rate/blob/main/marketplace_demo/public/profile1.png?raw=true",
  name: "0x0000000ab702853d1163d38d047fa351fa78e9d3",
  reputation: 45,
  upvotes: 278,
  reviewId: '2',
  __typename: 'ReviewSubmittedEntity',
  rating: 4,
  metadata: {
    title: 'Fantastic Keyboard!',
    score: 20,
    content: 'I adore this keyboard, perfect for degens.',
  }
  },
  {
    id: '0xf510a8d67f12cf22a1a2012aaed76767cdfa2e8fd1d7cc008d3fbb79f2bbcd50-197',
    blockNumber: '28523326',
    timestamp: '1665295036',
    count: '1',
    chainID: '2',
    contractAddress: '0x727fea0982f8f95902bfe40c53484d0dd1bbd623',
    tokenId: '3',
    metadataUri: '2ef156f62e1d19d19a49970a8d7cf9c193a41277e353c07985ad3c4315c44519',
    author: '0x0000000ab702853d1163d38d047fa351fa78e9d3',
    imageUrl: "https://ik.imagekit.io/lensterimg/tr:n-avatar,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/bafkreidxilha4jw7w3r2ksgzdy4vlshiefi6e3zaymd7z65223iscibfwu",
    name: "stani.lens",
    reputation: 982,
    upvotes: 892,
    reviewId: '2',
    __typename: 'ReviewSubmittedEntity',
    rating: 5,
    metadata: {
      title: 'I love this keyboard',
      score: 20,
      content: 'Just posted to lenster for the first time with this keyboard.',
    }
    },
  {
  id: '0xf510a8d67f12cf22a1a2012aaed76767cdfa2e8fd1d7cc008d3fbb79f2bbcd50-187',
  blockNumber: '28523326',
  timestamp: '1665295036',
  count: '1',
  chainID: '2',
  contractAddress: '0x727fea0982f8f95902bfe40c53484d0dd1bbd623',
  tokenId: '3',
  metadataUri: '2ef156f62e1d19d19a49970a8d7cf9c193a41277e353c07985ad3c4315c44519',
  author: '0x0000000ab702853d1163d38d047fa351fa78e9d3',
  imageUrl: 'https://ik.imagekit.io/lensterimg/tr:n-avatar,tr:di-placeholder.webp/https://lens.infura-ipfs.io/ipfs/bafkreigjqdyocpvvzll67qoxhtyrookt37rx76mzn22cn6ahlw46rga3ie',
  name: "yoginth.lens",
  reputation: 203,
  upvotes: 356,
  reviewId: '2',
  __typename: 'ReviewSubmittedEntity',
  rating: 4,
  metadata: {
    title: 'My favorite hackathon keyboard',
    score: 20,
    content: 'My hands never get tired of this keyboard, even after 24h of hacking',
  }
  }
]


module.exports.getReviewScore = getReviewScore
module.exports.myReviews = myReviews
module.exports.profileReviews = profileReviews
module.exports.otherReviews = otherReviews
