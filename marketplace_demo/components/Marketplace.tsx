import { useEffect, useState } from "react";
import Link from 'next/link';
import Image from "next/image";
import { motion } from "framer-motion";
import { Hero } from './marketplace-features';
import { useRouter } from 'next/router'
import { WorldcoinHosted } from './profile';

export default function Marketplace() {
  const [nfts, setNfts] = useState<any[]>([]);
  const [loadingState, setLoadingState] = useState("not-loaded");
  const router = useRouter()

  useEffect(() => {
    loadNFTs();
  }, []);

  async function loadNFTs() {
    /*
     *  map over items returned from smart contract and format
     *  them as well as fetch their token metadata
     */
    const items = [
      {contractAddr: "0x727fea0982f8f95902bfe40c53484d0dd1bbd623", chainId: 2, price:80,tokenId:0,seller:"Eito",owner:"Konrad", image: "https://pyxis.nymag.com/v1/imgs/4d9/076/3a3370deb182b80681bc8fbb59c1dbdfc8.rsquare.w600.jpg", name: "Keychron K2 (K2-C1H) Aluminum Gateron", description: "K2 is a super tactile wireless or wired keyboard giving you all the keys and function you need while keeping it compact, with the largest battery seen in a mechanical keyboard"},
      {contractAddr: "0x727fea0982f8f95902bfe40c53484d0dd1bbd623", chainId: 2, price:73,tokenId:1,seller:"Eito",owner:"Konrad", image: "https://cdn.shopify.com/s/files/1/2301/4381/products/Untitled-1000000-862586_large.jpg?v=1645125459", name: "Razer Pro Type Mechanical Keyboard", description: "Silent mechanical keyboard with superior ergonomic support, designed for productivity offers a quiet, distraction-free experience in the office or at home."},
      {contractAddr: "0x727fea0982f8f95902bfe40c53484d0dd1bbd623", chainId: 2, price:90,tokenId:2,seller:"Eito",owner:"Konrad", image: "https://cdn.shopify.com/s/files/1/1520/4366/products/slim-x2-bluetooth-backlit-keyboard-keyboards-satechi-499759_1024x.jpg?v=1621015338", name: "Satechi Slim X2 Bluetooth Keyboard", description: "Designed for Mac & iOS devices, the X2 Keyboard features a QWERTY layout with numeric keypad, multi-deviceBT, and shortcut keys optimized for Apple devices with ..."},
      {contractAddr: "0x727fea0982f8f95902bfe40c53484d0dd1bbd623", chainId: 2, price:72,tokenId:3,seller:"Eito",owner:"Konrad", image: "https://i.linio.com/p/6a8e19edc84b5bd450d68445d7534630-product.jpg", name: "Logitech Ergo K860", description: "Type more naturally with ERGO K860 - an advanced ergonomic keyboard that promotes a more relaxed typing posture – reducing wrist bending by 25% and offering ..."},
      {contractAddr: "0x727fea0982f8f95902bfe40c53484d0dd1bbd623", chainId: 2, price:60,tokenId:4,seller:"Eito",owner:"Konrad", image: "https://m.media-amazon.com/images/I/71Bth-gHViL.jpg", name: "Logitech K780 Wireless Keyboard", description: "The aptly named Logitech K780 Multi-Device keyboard, like many others on the market, is able to connect to any number of Bluetooth-enabled .."},
      {contractAddr: "0x727fea0982f8f95902bfe40c53484d0dd1bbd623", chainId: 2, price:82,tokenId:5,seller:"Eito",owner:"Konrad", image: "https://mechanicalkeyboards.com/shop/images/products/large_VA87M2WLLPn2W_main.jpg", name: "Varmilo VA87M Moonlight", description: "Meet the new, upgraded VA Series V2! The amazing colorways you love have just received a quality upgrade! All keyboards in this series now come with a standard USB-C cable."},
      {contractAddr: "0x727fea0982f8f95902bfe40c53484d0dd1bbd623", chainId: 2, price:65,tokenId:6,seller:"Eito",owner:"Konrad", image: "https://cdn.shopify.com/s/files/1/0582/0242/3501/products/kinesis-freestyle-edge-rgbakinekb0915418-901573_1800x1800.png?v=1648553879", name: "Kinesis Freestyle Edge RGB", description: "The Freestyle Edge RGB is the first split mechanical keyboard designed specifically for gaming. It was engineered with input from serious gamers to meet ..."},
      {contractAddr: "0x727fea0982f8f95902bfe40c53484d0dd1bbd623", chainId: 2, price:72,tokenId:7,seller:"Eito",owner:"Konrad", image: "https://cdn.shopify.com/s/files/1/0582/0242/3501/products/royal-kludge-rk71arkgakb0415471-921294_1800x1800.png?v=1648553904", name: "Royal Kludge RK71", description: "A compact 71 key Bluetooth mechanical keyboard from Royal Kludge. The RK-Gaming RK71 is fully programmable so you can customise your layout and lighting."},
      {contractAddr: "0x727fea0982f8f95902bfe40c53484d0dd1bbd623", chainId: 2, price:80,tokenId:8,seller:"Eito",owner:"Konrad", image: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/7215/7215241_sd.jpg", name: "Logitech - K360 Full-size Wireless Scissor Keyboard", description: "Logitech K360 wireless keyboard is ready when you are. This compact and portable keyboard fits into your tight workspaces, small offices or wherever you take your laptop or computer ..."},
      {contractAddr: "0x727fea0982f8f95902bfe40c53484d0dd1bbd623", chainId: 2, price:67,tokenId:9,seller:"Eito",owner:"Konrad", image: "https://c1.neweggimages.com/ProductImage/32N-00EG-00002-S01.jpg", name: "MK1 PC Mechanical Gaming Keyboard", description: "7-Color LED BACKLIT KEYBOARD: The MK1 keyboard comes with RED LED backlighting. 87 standard conflict free keys, 12 multimedia keys. Space Saving Design: The Compact 87-keys Space-Saving Mechanical Keyboard Design ..."}

    ]
    setNfts(items);
    setLoadingState("loaded");
  }

  if (loadingState === "loaded" && !nfts.length)
    return (
      <h1
        className="py-10 px-20 text-3xl flex justify-center items-center"
        style={{ height: "90vh" }}
      >
        No items in marketplace
      </h1>
    );
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
      <Hero/>
      <WorldcoinHosted signal="43587" />
      <div className="flex justify-center mt-20">
        <div className="px-4" style={{ maxWidth: "1600px" }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-4">
            {nfts.map((nft, i) => (
              <Link key={i} href={`/product/${nft.chainId}/${nft.contractAddr}/${nft.tokenId}/`} passHref>
                <div className="shadow-md rounded-3xl overflow-hidden bg-white dark:bg-black hover:cursor-pointer hover:scale-105 duration-200">
                  <div className="flex flex-row justify-center my-3">
                  <Image
                    className="rounded-3xl"
                    src={nft.image}
                    alt="NFT file"
                    width={340}
                    height={257}
                    quality={100}
                  />
                  </div>
                  <div className="p-4">
                    <p
                      style={{ height: "64px" }}
                      className="text-2xl font-semibold"
                    >
                      {nft.name}
                    </p>
                    <div style={{ height: "70px", overflow: "hidden" }}>
                      <p className="text-gray-400">{nft.description}</p>
                    </div>
                  </div>
                  <div className="p-4 bg-zinc-800 dark:bg-zinc-900">
                    <div className="text-2xl font-bold text-white flex flex-row items-center justify-center">
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
                    <button
                      className="mt-4 w-full bg-gradient-to-r from-blue-500 via-blue-700 to-green-500 text-white font-bold py-2 px-12 rounded-3xl shadow-lg"
                      onClick={() => console.log("buy nft")}
                    >
                      Buy
                    </button>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
