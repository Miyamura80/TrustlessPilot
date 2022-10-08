// export default function Carousel()
import Image from "next/image";
// import Swiper core and required modules
import { Navigation, Pagination, Mousewheel } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Carousel() {
  useEffect(() => {
    loadNFTs();
  }, []);

  const [nfts, setNfts] = useState<any[]>([]);
  const [loadingState, setLoadingState] = useState("not-loaded");

  async function loadNFTs() {
    /*
     *  map over items returned from smart contract and format
     *  them as well as fetch their token metadata
     */
    const items = [{price:80,tokenId:392871,seller:"Eito",owner:"Konrad", image: "IMAGE PLACEHOLDER", name: "monke", description: "shit desc"}]
    setNfts(items);
    setLoadingState("loaded");
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
  ) : (
    <motion.div animate={{ scale: [0.5, 1] }} transition={{ duration: 1 }}>
      <div className="flex items-center h-screen w-screen">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Mousewheel]}
          slidesPerView={1}
          mousewheel
          pagination={{ clickable: true }}
        >
          {nfts.map((nft, i) => (
            <div key={i} className="border rounded-xl">
              <SwiperSlide>
                <Image
                  className="rounded"
                  src={nft.image}
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
                    {nft.name}
                  </p>
                  <div style={{ height: "70px", overflow: "hidden" }}>
                    <p className="text-gray-400">{nft.description}</p>
                  </div>
                  <div className="text-2xl font-bold ">
                    {nft.price}{" "}
                    <Image
                      src="/Polygon-Matic-Logo.png"
                      alt="Polygon Matic Logo"
                      width={25}
                      height={25}
                    />
                    MATIC
                  </div>
                </div>
              </SwiperSlide>
            </div>
          ))}
        </Swiper>
      </div>
    </motion.div>
  );
}
