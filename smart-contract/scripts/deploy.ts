import { ethers } from "hardhat";

async function main() {

  const Reviews = await ethers.getContractFactory("Reviews");
  const review = await Reviews.deploy();

  await review.deployed();

  console.log(`Review deployed to ${review.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
