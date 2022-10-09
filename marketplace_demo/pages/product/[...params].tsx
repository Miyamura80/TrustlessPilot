

import { useRouter } from 'next/router';
import { Page } from '../../components/Page';
import { useProductContext } from '../_app';
import { motion } from "framer-motion";
import Image from "next/image";
import ReviewContainer from '../../components/review/ReviewContainer';
import { useState, useEffect } from "react";


export default function ProductPage() {
  const router = useRouter()
  const queryResult = router.query;

  const [productContext, setProductContext] = useProductContext();

  const {contractAddr, chainId, price,tokenId,seller,owner,image,name,description} = productContext;

  const [followers, setFollowers] = useState(null);

  useEffect(() => {
   console.log(contractAddr)
   fetch(`http://localhost:8000/get-reviews/${chainId}/${contractAddr}/${tokenId}`)
    .then( (response) => response.json())
    .then( (data) => {
        console.log('product data request', data)
    })
    .catch((error) => console.log(error));
  }, []);

  return (
    <Page>
      <motion.div animate={{ scale: [0.5, 1] }} transition={{ duration: 1 }}>
        <div className="flex items-center h-screen w-screen">
          <div className="border rounded-xl">
            <div>
              <Image
                className="rounded"
                src={image}
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
                  {name}
                </p>
                <div style={{ height: "70px", overflow: "hidden" }}>
                  <p className="text-gray-400">{description}</p>
                </div>
                <div className="text-2xl font-bold ">
                  {price}{" "}
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
                  <p>{seller}</p>
                </div>

                <br/>

                <div className='text-gray-500'>
                  <p className='font-semibold'>Owner:</p>
                  <p>{owner}</p>
                </div>

                <br/>

                <div className='text-gray-500'>
                  <p className='font-semibold'>Token ID:</p>
                  <p>{tokenId}</p>
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
