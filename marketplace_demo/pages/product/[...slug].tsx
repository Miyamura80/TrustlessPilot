import { Page } from '../../components/Page';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';
import ReviewContainer from '../../components/review/ReviewContainer';
import { useState, useEffect } from "react";
import { formatAddress } from '../../utils/formatting';
import { WorldcoinWidget } from '../../components/profile';
const { myReviews } = require("../../../backend/utils/reviewUtils");
import { useRouter } from 'next/router'
import { getKeyboard } from '../../utils/keyboards';

const defaultNft = {
  contractAddr: "0x727fea0982f8f95902bfe40c53484d0dd1bbd623", chainId: 2,
  price:90, tokenId:2, seller:{ address: "0x526E0cFF86ab0f0b92ABa83e53d5B05bA2Bea956", lens: null }, owner:{ address: "0xF7C012789aac54B5E33EA5b88064ca1F1172De05", lens: "kopykat.lens"},
  image: "https://cdn.shopify.com/s/files/1/1520/4366/products/slim-x2-bluetooth-backlit-keyboard-keyboards-satechi-499759_1024x.jpg?v=1621015338",
  name: "Satechi Slim X2 Bluetooth Keyboard",
  description: "Designed for Mac & iOS devices, the X2 Keyboard features a QWERTY layout with numeric keypad, multi-deviceBT, and shortcut keys optimized for Apple devices with ...",
}

export default function ProductPage() {

  const [isVerified, setIsVerified] = useState(false);
  const router = useRouter();
  const [nftData, setNftData] = useState(null)
  const [nft, setNft] = useState(null)

  const [isReady, setIsReady] = useState(router.isReady)
  const [isLoading, setIsLoading] = useState(true)
  const [hasMounted, setHasMounted] = useState(false)
  const [data, setData] = useState(null);

  useEffect(() => {
   if (!nftData) return;
   fetch(`http://localhost:8000/get-reviews/${nftData.chainId}/${nftData.contractAddr}/${nftData.tokenId}`)
    .then( (response) => response.json())
    .then((data) => {
        setData(data);
        console.log(getKeyboard(nftData.tokenId))
        setNft(getKeyboard(nftData.tokenId)[0])
        setIsLoading(false)
    })
    .catch((error) => console.log(error));
  }, [nftData]);

  useEffect(() => {
    setIsReady(router.isReady)
    if (router.query.slug) {
       console.log("router ", router.query)
       setNftData({
        chainId: router.query.slug[0],
        contractAddr: router.query.slug[1],
        tokenId: router.query.slug[2]
        })
    }
  }, [router])

  useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }

  if (isLoading || !isReady) return (<div className="min-h-[15rem] flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
  <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
    <div className="flex justify-center">
      <div className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full" role="status" aria-label="loading">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  </div>
</div>);

  console.log("data ", data);
  // const reviews = data.userReviews;    // legit version
  const reviews = myReviews;


  return (
    <Page>
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 0, y: 200 },
          enter: { opacity: 1, x: 0, y: 0 },
          exit: { opacity: 0, x: 0, y: 0 },
        }} // Pass the variant object into Framer Motion
        initial="hidden" // Set the initial state to variants.hidden
        animate="enter" // Animated state to variants.enter
        exit="exit" // Exit state (used later) to variants.exit
        transition={{ type: "linear", duration: 1 }} // Set the transition to linear
      >
        <div className="flex flex-row items-center justify-center rounded-3xl mt-12">
              <div>
                <Image
                  className="rounded-3xl mx-12 max-w-[30vw]"
                  src={nft.image}
                  alt="NFT file"
                  width={500}
                  height={500}
                />
              </div>
              <div className="p-8 mx-12 max-w-[30vw]">
                <p
                  className="text-3xl font-semibold text-black dark:text-white my-4"
                >
                  {nft.name}
                </p>
                <div className="my-4">
                  <p className="text-gray-600 dark:text-gray-300">{nft.description}</p>
                </div>
                <div className="text-2xl font-bold text-black dark:text-white flex flex-row items-center my-4">
                  {nft.price}{" "}
                  <div className="mx-2">
                    <Image
                      src="/Polygon-Matic-Logo.png"
                      alt="Polygon Matic Logo"
                      width={20}
                      height={20}
                    />
                  </div>
                  MATIC
                </div>

                <div className='my-4'>
                  <p className='font-semibold text-black dark:text-white'>Seller:</p>
                  <Link href={'/user?ad=' + nft.seller.address} passHref>
                    <div className='block mt-4 md:inline-block md:mt-0 group transition-all duration-100 ease-in-out hover:cursor-pointer text-gray-600 dark:text-gray-300'>
                      <span className='bg-left-bottom bg-gradient-to-r from-blue-500 via-blue-700 to-green-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                        {nft.seller.lens ? nft.seller.lens : formatAddress(nft.seller.address)}
                      </span>
                    </div>
                  </Link>
                </div>

                <div className='my-4'>
                  <p className='font-semibold text-black dark:text-white'>Owner:</p>
                  <Link href={'/user?ad=' + nft.owner['address']} passHref>
                    <div className='block mt-4 md:inline-block md:mt-0 group transition-all duration-100 ease-in-out hover:cursor-pointer text-gray-600 dark:text-gray-300'>
                      <span className='bg-left-bottom bg-gradient-to-r from-blue-500 via-blue-700 to-green-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                        {nft.owner.lens ? nft.owner.lens : formatAddress(nft.owner.address)}
                      </span>
                    </div>
                  </Link>
                </div>

              </div>
        </div>
        <h3 className="text-3xl font-semibold text-center mt-20">
          Reviews
        </h3>
        <div className="flex justify-center my-12">
          <ReviewContainer reviews={reviews} showReviewDialog={true} showRatingBreakdown={true} />
        </div>
      </motion.div>
    </Page>
  );
}
