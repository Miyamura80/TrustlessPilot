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
        address author;
    }

    struct ReviewRating {
        uint256 reviewId;
        int256 score;
        address rater;
    }

    mapping(uint256 => Review) public reviews;
    mapping(uint256 => ReviewRating) public reviewRatings;

    uint256 public reviewId;
    uint256 public reviewRatingId;

    event ReviewSubmitted(
        uint256 indexed chainID,
        address indexed contractAddress,
        uint256 indexed tokenId,
        string metadataUri,
        uint256 id,
        address author
    );
    event ReviewRatingSubmitted(
        uint256 indexed reviewId,
        int256 score,
        address rater
    );

    function createReview(
        uint256 _chainID,
        address _contractAddress,
        uint256 _tokenId,
        string memory _metadataUri,
        address _author
    ) public {
        reviewId++;
        Review memory review = Review(
            _chainID,
            _contractAddress,
            _tokenId,
            _metadataUri,
            reviewId,
            _author
        );
        reviews[reviewId] = review;
        emit ReviewSubmitted(
            _chainID,
            _contractAddress,
            _tokenId,
            _metadataUri,
            reviewId,
            _author
        );
    }

    function createReviewRating(
        uint256 _reviewId,
        int256 _score,
        address _rater
    ) public {
        reviewRatingId++;
        ReviewRating memory reviewRating = ReviewRating(
            _reviewId,
            _score,
            _rater
        );
        reviewRatings[reviewRatingId] = reviewRating;
        emit ReviewRatingSubmitted(_reviewId, _score, _rater);
    }
}
