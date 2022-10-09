import { useRouter } from 'next/router';
import { Page } from '../../components/Page';
import { useProductContext } from '../_app';
import { motion } from "framer-motion";
import Image from "next/image";
import ReviewContainer from '../../components/review/ReviewContainer';
import { useState, useEffect } from "react";


export default function ProductPage() {
  const router = useRouter()
  const { slug } = router.query
  console.log(slug)

  // useEffect(() => {
  //  console.log(contractAddr)
  //  fetch(`http://localhost:8000/get-reviews/${chainId}/${contractAddr}/${tokenId}`)
  //   .then( (response) => response.json())
  //   .then( (data) => {
  //       console.log('product data request', data)
  //   })
  //   .catch((error) => console.log(error));
  // }, []);

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
        <div className="flex items-center h-screen w-screen">
          <div className="border rounded-xl">
            <div>
              <Image
                className="rounded"
                src={"/Polygon-Matic-Logo.png"}
                alt="NFT file"
                width={350}
                height={257}
                quality={100}
              />
              <div className="p-8">
                <p
                  style={{ height: "64px" }}
                  className="text-2xl font-semibold"
                >
                  {"name"}
                </p>
                <div style={{ height: "70px", overflow: "hidden" }}>
                  <p className="text-gray-400">{"description"}</p>
                </div>
                <div className="text-2xl font-bold ">
                  {"price"}{" "}
                  <Image
                    src="/Polygon-Matic-Logo.png"
                    alt="Polygon Matic Logo"
                    width={25}
                    height={25}
                  />
                  MATIC
                </div>

                <br/>

                <div className='text-gray-500'>
                  <p className='font-semibold'>Seller:</p>
                  <p>{"seller"}</p>
                </div>

                <br/>

                <div className='text-gray-500'>
                  <p className='font-semibold'>Owner:</p>
                  <p>{"owner"}</p>
                </div>

                <br/>

                <div className='text-gray-500'>
                  <p className='font-semibold'>Token ID:</p>
                  <p>{"tokenId"}</p>
                </div>

              </div>
            </div>
          </div>
          <ReviewContainer />
        </div>
      </motion.div>
    </Page>
  );
}

export const getStaticProps = async ({ params }) => {
    const post = await getSinglePost(params.slug);
    return {
      props: { ...post },
    };
};
