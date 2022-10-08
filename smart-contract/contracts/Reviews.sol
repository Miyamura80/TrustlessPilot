// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Reviews {
    struct Review {
        uint256 chainID;
        address contractAddress;
        uint256 tokenId;
        string metadataUri;
        uint256 id;
    }

    struct ReviewRating {
        uint256 reviewId;
        int256 score;
        address rater;
    }

    mapping(uint256 => Review) public reviews;
    mapping(uint256 => ReviewRating) public reviewRatings;

    uint256 public reviewId;
    uint256 public rewviewRatingId;

    event ReviewSubmitted(
        uint256 indexed chainID,
        address indexed contractAddress,
        uint256 indexed tokenId,
        string metadataUri,
        uint256 id
    );
    event RewviewRatingSubmitted(
        uint256 indexed reviewId,
        int256 score,
        address rater
    );

    function createReview(
        uint256 _chainID,
        address _contractAddress,
        uint256 _tokenId,
        string memory _metadataUri
    ) public {
        reviewId++;
        Review memory review = Review(
            _chainID,
            _contractAddress,
            _tokenId,
            _metadataUri,
            reviewId
        );
        reviews[reviewId] = review;
        emit ReviewSubmitted(
            _chainID,
            _contractAddress,
            _tokenId,
            _metadataUri,
            reviewId
        );
    }

    function createReviewRating(
        uint256 _reviewId,
        int256 _score,
        address _rater
    ) public {
        rewviewRatingId++;
        ReviewRating memory reviewRating = ReviewRating(
            _reviewId,
            _score,
            _rater
        );
        reviewRatings[rewviewRatingId] = reviewRating;
        emit RewviewRatingSubmitted(_reviewId, _score, _rater);
    }
}
