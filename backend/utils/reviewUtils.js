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

module.exports.getReviewScore = getReviewScore
module.exports.myReviews = myReviews
