// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Reviews {

    struct Review {
      uint chainID;
      address contractAddress;
      uint tokenId;
      string metadataUri;
      uint id;
    }

    struct ReviewRating {
      uint reviewId;
      int score;
      address rater;
    }

    mapping public (uint -> Review) reviews;
    mapping public (uint -> ReviewRating) rewviewRatings;

    uint reviewId;
    uint rewviewRatingId;

    event ReviewSubmitted(uint indexed chainID, address indexed contractAddress, uint indexed tokenId, string metadataUri, uint id);
    event RewviewRatingSubmitted(uint indexed reviewId, int score, address rater);

    function createReview(uint _chainID, address _contractAddress, uint _tokenId, string _metadataUri) public {
      reviewId++
      Review memory review = Review(_chainID, _contractAddress, _tokenId, _metadataUri, reviewId);
      reviews[reviewId] = review;
      emit ReviewSubmitted(_chainID, _contractAddress, _tokenId, _metadataUri, reviewId);
    }

    function createReviewRating(uint _reviewId, int _score, address _rater) public {
      rewviewRatingId++
      ReviewRating memory reviewRating = ReviewRating(_reviewId, _score, _rater;
      rewviewRatings[reviewId] = reviewRating;
      emit RewviewRatingSubmitted(_reviewId, _score, _rater);
    }

}
