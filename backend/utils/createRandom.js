const { faker } = require("@faker-js/faker");
const accounts = require("./accounts");
const { hashToCache } = require("./writebackCache");

class Review {
  title = faker.commerce.productName();
  score = faker.finance.amount(0, 5, 0);
  content = faker.commerce.productDescription();
  author;
  chainId;
  contractAddress;
  tokenId;
  constructor(author) {
    this.author = author;
  }
}

async function createFakeReviews() {
  const reviewPromises = accounts.map(async (account) => {
    const { address } = account;
    const review = new Review(address);
    const { title, score, content, chainId, contractAddress, tokenId, author } =
      review;
    const metadataKey = hashToCache({
      title,
      score,
      content,
    });
    await createReview(chainId, contractAddress, tokenId, metadataKey, author);
  });

  return Promise.all(reviewPromises);
}

/**
 * onGetReview- return spread of reviews
 * return each amount of each score
 */

/**
 *
 *
 */
