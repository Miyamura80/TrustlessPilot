import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { motion } from "framer-motion";

export default function MyAssets() {
  const [nfts, setNfts] = useState<any[]>([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  const router = useRouter();

  useEffect(() => {
    loadNFTs();
  }, [nfts]);

  async function loadNFTs() {
    /*
     *  map over items returned from smart contract and format
     *  them as well as fetch their token metadata
     */
    const items = [{price:80,tokenId:392871,seller:"Eito",owner:"Konrad", image: "IMAGE PLACEHOLDER", name: "monke", description: "shit desc"}]
    setNfts(items);
    setLoadingState("loaded");
  }

  async function listNFTForSale(nft: any) {
    if (nft !== undefined) {
      const marketplaceContract = getContract(
        web3reactContext.library,
        web3reactContext.account
      );

      const priceFormatted = ethers.utils.parseUnits(nft.price, "ether");

      let listingPrice = await marketplaceContract.getListingPrice();
      listingPrice = listingPrice.toString();
      let transaction = await marketplaceContract.resellToken(
        nft.tokenId,
        priceFormatted,
        { value: listingPrice }
      );
      await transaction.wait();

      router.push("/MarketplacePage");
    } else return;
  }

  return loadingState === "not-loaded" ? (
    <div
      className="flex justify-center items-center"
      style={{ height: "90vh" }}
    >
      <button
        disabled
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 inline-flex items-center"
      >
        <svg
          role="status"
          className="inline w-4 h-4 mr-3 text-white animate-spin"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="#E5E7EB"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentColor"
          />
        </svg>
        Loading...
      </button>
    </div>
  ) : !nfts.length ? (
    <h1
      className="py-10 px-20 text-3xl flex justify-center items-center"
      style={{ height: "90vh" }}
    >
      No NFTs owned
    </h1>
  ) : (
    <motion.div
      variants={{
        hidden: { opacity: 0, x: -200, y: 0 },
        enter: { opacity: 1, x: 0, y: 0 },
        exit: { opacity: 0, x: 0, y: -100 },
      }} // Pass the variant object into Framer Motion
      initial="hidden" // Set the initial state to variants.hidden
      animate="enter" // Animated state to variants.enter
      exit="exit" // Exit state (used later) to variants.exit
      transition={{ type: "linear", duration: 1 }} // Set the transition to linear
    >
      <div className="flex justify-center p-4">
        <div className="grid grid-cols-1 laptop:grid-cols-2 desktop:grid-cols-4 gap-4 pt-4">
          {nfts.map((nft: any, i) => (
            <div key={i} className="border shadow rounded-xl overflow-hidden">
              <Image
                className="rounded"
                src={nft.image}
                alt="NFT file"
                width={350}
                height={257}
                quality={100}
              />
              <div className="p-4 bg-black">
                <div className="flex gap-2 text-2xl font-bold text-white">
                  Price - {nft.price}{" "}
                  <Image
                    src="/Polygon-Matic-Logo.png"
                    alt="Polygon Matic Logo"
                    width={25}
                    height={25}
                  />
                  MATIC
                </div>
                <button
                  className="mt-4 w-full bg-pink-500 text-white font-bold py-2 px-12 rounded"
                  onClick={() => listNFTForSale(nft)}
                >
                  List for sale
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
