

import { useRouter } from 'next/router'
import { Page } from '../../components/Page';
import { useProductContext } from '../_app';
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import ReviewContainer from '../../components/review/ReviewContainer';

const ProductPage = () => {
  const router = useRouter()
  const queryResult = router.query;

  const [productContext, setProductContext] = useProductContext();

  // console.log("hello");
  // console.log(queryResult.params)
  // console.log(router.query)
  const {price,tokenId,seller,owner,image,name,description} = productContext;

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

export default ProductPage