import { ethers } from "hardhat";

async function main() {
  const Reviews = await ethers.getContractFactory("Reviews");
  const reviews = await Reviews.deploy();

  await reviews.deployed();

  console.log(`Deployed to ${reviews.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
