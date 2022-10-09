
const { queryReviewsByAuthor } = require("../components/subgraph/queries");
const updateReviews = require("../utils/updateReviews");
const { getReviewScore } = require("../utils/reviewUtils");

class User {

    constructor(lensProfile) {
        this.profile = lensProfile
    }

    // calculate reputation, personal opinion, friendship

    userReviews = null;
    reputation = null;

    async getUserReviews() {
        if (!this.userReviews) this.userReviews = await this.queryUserReviews()
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