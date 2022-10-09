import { Page } from '../../components/Page';
import { useProductContext } from '../_app';
import { motion } from "framer-motion";
import Image from "next/image";
import Link from 'next/link';
import ReviewContainer from '../../components/review/ReviewContainer';
import { useState, useEffect } from "react";
import { formatAddress } from '../../utils/formatting';


export default function ProductPage() {
  const [nft, setNft] = useState({
    contractAddr: "0x727fea0982f8f95902bfe40c53484d0dd1bbd623", chainId: 2,
    price:90, tokenId:2, seller:{ address: "0x526E0cFF86ab0f0b92ABa83e53d5B05bA2Bea956", ens: null }, owner:{ address: "0xF7C012789aac54B5E33EA5b88064ca1F1172De05", ens: "konradkopp.eth"},
    image: "https://cdn.shopify.com/s/files/1/1520/4366/products/slim-x2-bluetooth-backlit-keyboard-keyboards-satechi-499759_1024x.jpg?v=1621015338",
    name: "Satechi Slim X2 Bluetooth Keyboard",
    description: "Designed for Mac & iOS devices, the X2 Keyboard features a QWERTY layout with numeric keypad, multi-deviceBT, and shortcut keys optimized for Apple devices with ...",
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
                  <Link href={'/user?ad=' + nft.seller.address} passHref>
                    <div className='block mt-4 md:inline-block md:mt-0 group transition-all duration-100 ease-in-out hover:cursor-pointer text-gray-600 dark:text-gray-300'>
                      <span className='bg-left-bottom bg-gradient-to-r from-blue-500 via-blue-700 to-green-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                        {nft.seller.ens ? nft.seller.ens : formatAddress(nft.seller.address)}
                      </span>
                    </div>
                  </Link>
                </div>

                <div className='my-4'>
                  <p className='font-semibold text-black dark:text-white'>Owner:</p>
                  <Link href={'/user?ad=' + nft.owner.address} passHref>
                    <div className='block mt-4 md:inline-block md:mt-0 group transition-all duration-100 ease-in-out hover:cursor-pointer text-gray-600 dark:text-gray-300'>
                      <span className='bg-left-bottom bg-gradient-to-r from-blue-500 via-blue-700 to-green-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                        {nft.owner.ens ? nft.owner.ens : formatAddress(nft.owner.address)}
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
