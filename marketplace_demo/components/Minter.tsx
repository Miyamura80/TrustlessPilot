/** 
HOW TO?

* Open two terminals

* In the first one run `yarn hardhat node`

* In the second one run `yarn hardhat run scripts/deploy.js --network localhost`
  Then run `yarn dev` in the same terminal

**/

import { useState } from "react";
import { ethers } from "ethers";
import { useWeb3React } from "@web3-react/core";
import { create as ipfsHttpClient, Options } from "ipfs-http-client";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Image from "next/image";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import { motion } from "framer-motion";

import "react-toastify/dist/ReactToastify.css";

// "https://ipfs.infura.io:5001"
const client = ipfsHttpClient({ host: 'ipfs.infura.io', port: 5001 , protocol: 'https' }); // This works check https://www.npmjs.com/package/ipfs-http-client

interface Inputs {
  nftName: string;
  nftDescription: string;
  nftPrice: number;
  nftFile: File;
}

export default function Minter() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({});

  const { active } = useWeb3React();

  const onSubmit = ({ nftName, nftDescription, nftPrice, nftFile }: Inputs) => {
    listNFTForSale({ nftName, nftDescription, nftPrice, nftFile });
  };

  const [fileUrl, setFileUrl] = useState("");
  const router = useRouter();
  const web3reactContext = useWeb3React();
  const notify = () => {
    toast.error("Your wallet is not connected !!!");
  };

  // Function for creating and updating the file url
  async function onChange(e: any) {
    // e is an event
    const file = e.target.files[0];
    try {
      const added = await client.add(file, {
        progress: (prog) => console.log(`received: ${prog}`),
      });
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      setFileUrl(url);
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  // Function saving an item to IPFS
  async function uploadToIPFS({
    nftName,
    nftDescription,
    nftPrice,
    nftFile,
  }: Inputs) {
    if (!nftName || !nftDescription || !nftPrice || !nftFile) return;
    // First, upload to IPFS
    const data = JSON.stringify({
      nftName,
      nftDescription,
      nftFile: fileUrl,
    });
    try {
      const added = await client.add(data);
      const url = `https://ipfs.infura.io/ipfs/${added.path}`;
      // After file is uploaded to IPFS, return the URL to use it in the transaction
      return url;
    } catch (error) {
      console.log("Error uploading file: ", error);
    }
  }

  // Function creating and listing an item for sale
  async function listNFTForSale({
    nftName,
    nftDescription,
    nftPrice,
    nftFile,
  }: Inputs) {
    const url = await uploadToIPFS({
      nftName,
      nftDescription,
      nftPrice,
      nftFile,
    });

    if (web3reactContext.active === true) {
      // Create the item
      const price = ethers.utils.parseUnits(String(nftPrice), "ether");

      let listingPrice = await contract.getListingPrice();
      listingPrice = listingPrice.toString();
      let transaction = await contract.createToken(url, price, {
        value: listingPrice,
      });
      await transaction.wait();

      router.push("/MarketplacePage"); // reroute the user to the marketplace page
    } else {
      console.log("Please connect your metamask"); //TODO Add Toastify event
    }
  }

  return (
    <motion.div animate={{ scale: [0.9, 1] }} transition={{ duration: 1 }}>
      <div
        className="flex justify-center items-center"
        style={{ height: "90vh" }}
      >
        <form
          className="mt-16 flex flex-col space-y-3 tablet:w-1/2 p-4 desktop:-mt-10 bg-slate-300 rounded-lg bg-gradient-to-tr from-violet-500 to-fuchsia-500 "
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            type="text"
            placeholder="NFT name"
            className="p-5 rounded"
            {...register("nftName", {
              required: true,
              maxLength: 50,
            })}
          />
          {errors?.nftName?.type === "required" && (
            <p>This field is required</p>
          )}
          {errors?.nftName?.type === "maxLength" && (
            <p>Name cannot exceed 20 characters</p>
          )}

          <input
            type="text"
            placeholder="NFT Description"
            className="p-5 rounded"
            {...register("nftDescription", { maxLength: 200 })}
          />
          {errors?.nftDescription?.type === "maxLength" && (
            <p>Description cannot exceed 200 characters</p>
          )}

          <input
            type="number"
            placeholder="Listing price"
            className="p-5 rounded"
            {...register("nftPrice", { required: true, min: 0.001 })}
          />
          {errors.nftPrice && <p>Price must be at least 1</p>}

          <input
            type="file"
            {...register("nftFile", { required: true })}
            onChange={onChange}
            accept="image/*" //TODO Only accept images for now
            // accept="image/*,video/*,audio/*,.glb,.gltf"
          />
          {errors?.nftFile?.type === "required" && (
            <p>Adding a file is required</p>
          )}
          {fileUrl && (
            <div className="rounded-lg mx-auto">
              <Image
                className="rounded"
                src={fileUrl}
                alt="NFT file"
                width={350}
                height={257}
                objectFit="scale-down"
                quality={100}
              />
            </div>
          )}
          {active ? (
            <button
              type="submit"
              className="items-center py-2 px-6 mx-0 mt-2 mb-0 font-semibold text-center normal-case whitespace-nowrap bg-none rounded-full border-2 border-solid cursor-pointer box-border border-stone-500 bg-zinc-800 text-stone-200 hover:border-neutral-600"
            >
              Mint an NFT
            </button>
          ) : (
            <div
              onClick={notify}
              className="items-center py-2 px-6 mx-0 mt-2 mb-0 font-semibold text-center normal-case whitespace-nowrap bg-none rounded-full border-2 border-solid cursor-pointer box-border border-stone-500 bg-zinc-800 text-stone-200 hover:border-neutral-600"
            >
              <p>Mint an NFT</p>
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={true}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </div>
          )}
        </form>
      </div>
    </motion.div>
  );
}
