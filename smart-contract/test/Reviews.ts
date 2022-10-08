import { time, loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("Reviews", function () {
  async function deployReviews() {
    const [owner, addr1] = await ethers.getSigners();

    const Reviews = await ethers.getContractFactory("Reviews");
    const reviews = await Reviews.deploy();

    const chainID = 1;
    const contractAddress = "0x199d5ed7f45f4ee35960cf22eade2076e95b253f";
    const tokenId = "1";
    const metadataUri = "google.com"

    const reviewId = 1;
    const score = 5;
    const rater = "0x199d5ed7f45f4ee35960cf22eade2076e95b253f";

    return { reviews, owner, addr1, chainID, contractAddress, tokenId, metadataUri,
            reviewId, score, rater };
  }

  describe("Test contract", function () {

    it("Should create a Review", async function () {
      const { reviews, chainID, contractAddress, tokenId, metadataUri } = await loadFixture(deployReviews);
      await reviews.createReview(chainID, contractAddress, tokenId, metadataUri);
      const reviewId = await reviews.reviewId();
      const review = await reviews.reviews(reviewId);
      expect(review.chainID).to.equal(chainID);
    });

    it("Should create a Review Rating", async function () {
      const { reviews, reviewId, score, rater } = await loadFixture(deployReviews);
      await reviews.createReviewRating(reviewId, score, rater);
      const rewviewRatingId = await reviews.rewviewRatingId();
      const reviewRating = await reviews.reviewRatings(rewviewRatingId);
      expect(reviewRating.reviewId).to.equal(reviewId);
    });

  });

});
