
const { queryReviewsByAuthor } = require("../components/subgraph/queries");
const updateReviews = require("../utils/updateReviews");
const { getReviewScore } = require("../utils/reviewUtils");


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
    reviewId: '2',
    __typename: 'ReviewSubmittedEntity',
    rating: 3,
    metadata: {
      title: 'Placeholder title 1',
      score: 20,
      content: 'I adore this keyboard, perfect for degens',
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
    reviewId: '2',
    __typename: 'ReviewSubmittedEntity',
    rating: 0,
    metadata: {
      title: 'Placeholder title 2',
      score: 20,
      content: 'I adore this keyboard, perfect for degens',
    }
    }
]
class User {

    constructor(lensProfile) {
        this.profile = lensProfile
    }

    // calculate reputation, personal opinion, friendship

    userReviews = null;
    reputation = null;

    async getUserReviews() {
        this.userReviews = myReviews;
        // if (!this.userReviews) this.userReviews = await this.queryUserReviews()
         return this.userReviews
    }

    async queryUserReviews() {
        const wallet = this.profile.address
        console.log('in class ' + wallet)
        if (!wallet) return [];
        const userReviews = await queryReviewsByAuthor(wallet);
        const updatedReviews = await updateReviews(userReviews);
        console.log(updatedReviews);
        return updatedReviews;
    }

    async getReputation() {
        if (!this.reputation) this.reputation = await this.calculateReputation()
        return this.reputation
    }

    // for each review calculate its score, then sum over all scores
    async calculateReputation() {
        const reviews = await this.getUserReviews()
        var reputation = 0
        for (var review of reviews) {
            reputation += await getReviewScore(review)
            // could fine-tune reputation algorithm
        }
        return reputation
    }

    calculateOpinion() {}
  }

module.exports.User = User