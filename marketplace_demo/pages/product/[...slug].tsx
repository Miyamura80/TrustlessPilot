import { Page } from '../../components/Page';
import { useProductContext } from '../_app';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';
import ReviewContainer from '../../components/review/ReviewContainer';
import { useState, useEffect } from "react";


export default function ProductPage() {
  const [nft, setNft] = useState({
    contractAddr: "0x727fea0982f8f95902bfe40c53484d0dd1bbd623",
    chainId: 2, price:80, tokenId:1, seller:"Eito", owner:"Konrad",
    image: "https://pyxis.nymag.com/v1/imgs/4d9/076/3a3370deb182b80681bc8fbb59c1dbdfc8.rsquare.w600.jpg",
    name: "Keychron K2 (K2-C1H) Aluminum Gateron",
    description: "K2 is a super tactile wireless or wired keyboard giving you all the keys and function you need while keeping it compact, with the largest battery seen in a mechanical keyboard"
  })

  useEffect(() => {
   fetch(`http://localhost:8000/get-reviews/2/0x727fEa0982F8f95902bfE40C53484d0DD1BbD623/3`)
    .then( (response) => response.json())
    .then( (data) => {
        console.log('product data request', data)
    })
    .catch((error) => console.log(error));
  }, []);

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
              <Image
                className="rounded-3xl mx-12 max-w-[30vw]"
                src={nft.image}
                alt="NFT file"
                width={500}
                height={500}
              />
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
                  <Link href={'/user'} passHref>
                    <div className='block mt-4 md:inline-block md:mt-0 group transition-all duration-100 ease-in-out hover:cursor-pointer text-gray-600 dark:text-gray-300'>
                      <span className='bg-left-bottom bg-gradient-to-r from-blue-500 via-blue-700 to-green-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                        {nft.seller}
                      </span>
                    </div>
                  </Link>
                </div>

                <div className='my-4'>
                  <p className='font-semibold text-black dark:text-white'>Owner:</p>
                  <Link href={'/user'} passHref>
                    <div className='block mt-4 md:inline-block md:mt-0 group transition-all duration-100 ease-in-out hover:cursor-pointer text-gray-600 dark:text-gray-300'>
                      <span className='bg-left-bottom bg-gradient-to-r from-blue-500 via-blue-700 to-green-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                        {nft.owner}
                      </span>
                    </div>
                  </Link>
                </div>

                <div className='my-4'>
                  <p className='font-semibold text-black dark:text-white'>Token ID:</p>
                  <p className='text-gray-600 dark:text-gray-300'>{nft.tokenId}</p>
                </div>
          </div>
          {/*<ReviewContainer />*/}
        </div>
      </motion.div>
    </Page>
  );
}
