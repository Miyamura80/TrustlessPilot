import { Page } from "../components/Page";
import ReviewText from "../components/review/ReviewText";
import Image from "next/image";
import { MdVerified } from "react-icons/md";
import { FaVoteYea } from "react-icons/fa";
import { BsPencilSquare } from "react-icons/bs";
import Voting from "../components/review/Voting";
import { useState, useEffect } from "react";
import { formatAddress } from '../utils/formatting';
import { WorldcoinWidget } from '../components/profile'
import { useRouter } from 'next/router'
import ReviewContainer from "../components/review/ReviewContainer";

export default function UserPage() {
  const router = useRouter();
  const walletAddress = "0xF7C012789aac54B5E33EA5b88064ca1F1172De05";
  const verifiedHuman = true;
  const globalScore = 2000;

  const [isReady, setIsReady] = useState(router.isReady)
  const [isLoading, setIsLoading] = useState(true)
  const [hasMounted, setHasMounted] = useState(false)

  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState('reviews')

  useEffect(() => {
    fetch(`http://localhost:8000/user/${walletAddress}`)
      .then((response) => response.json())
      .then((data) => {
        console.log("initial data request", data);
        setData(data);
      })
      .then(() => setIsLoading(false))
      .catch((error) => console.log(error));
  }, [])

  useEffect(() => {
    setIsReady(router.isReady)
  }, [router])

  useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }

  if (isLoading || !isReady ) return <div>loading</div>;
  console.log("router ", router.query)
  console.log("data ", data);
  const reviews = data.userReviews;
  const profileData = data.profile.profiles[0];

  const displayReviews = reviews.map((review, index): any => {
    return (<div key={index} className="flex rounded-3xl shadow-sm justify-start p-6 m-4 bg-zinc-100 dark:bg-zinc-700 w-2/3 mx-auto">
      <div className="flex items-center mr-8">
        <Voting />
      </div>
      <div className="flex-col justify-center">
        <h1 className="text-3xl mb-4">NFT image</h1>
        <ReviewText data={review} />
      </div>
    </div>);
  });

  return (
    <Page>
      <div className="flex flex-row mt-6">
        <div className="w-1/3 ml-10 mt-8 flex flex-col justify-center">
          <div>
            <img src={profileData.imageURI} height="300" width="300" className="mx-auto rounded-3xl my-3" />
          </div>
          <div className="flex items-center mx-auto">
            <div className="text-2xl font-bold">
              {profileData ? profileData.handle : formatAddress(walletAddress)}
            </div>
          </div>
          <div className="text-base font-semibold text-green-500 mx-auto">
            {profileData ? formatAddress(walletAddress) : ""}
          </div>
          <div className="mt-2">
          </div>
          <div className="flex mt-2 mx-auto">
            <div className="w-24 flex-none">
              <p className="text-center text-lg font-semibold">{profileData ? profileData.totalFollowers : ""}</p>
              <p className="text-center text-slate-500">Followers</p>
            </div>
            <div className="flex-1">
              <p className="text-center text-lg font-semibold">{profileData ? profileData.totalFollowings : ""}</p>
              <p className="text-center text-slate-500">Following</p>
            </div>
          </div>
          <div className="flex flex-row justify-center mt-6">
            {profileData.worldCoinVerified ?
            <img
              src="https://assets.lenster.xyz/images/badges/worldcoin.png"
              className="h-16 w-16"/>:
            <WorldcoinWidget signal="43587" />}
          </div>
        </div>
        <div className="flex flex-col w-2/3">
          <div className="flex flex-row justify-center">
            <h4 className='block mt-4 md:inline-block md:mt-0 group transition-all duration-100 ease-in-out hover:cursor-pointer text-black dark:text-white text-xl font-semibold mx-12' onClick={() => setActiveTab('reviews')}>
              <span className={'bg-left-bottom bg-gradient-to-r from-blue-500 via-blue-700 to-green-500 bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out' + (activeTab == 'reviews' ? " bg-[length:100%_2px]" : " bg-[length:0%_2px]")}>
                Reviews written
              </span>
            </h4>
            <h4 className='block mt-4 md:inline-block md:mt-0 group transition-all duration-100 ease-in-out hover:cursor-pointer text-black dark:text-white text-xl font-semibold mx-12' onClick={() => setActiveTab('ratings')}>
              <span className={'bg-left-bottom bg-gradient-to-r from-blue-500 via-blue-700 to-green-500 bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out' + (activeTab == 'ratings' ? " bg-[length:100%_2px]" : " bg-[length:0%_2px]")}>
                Reviews rates
              </span>
            </h4>
            <h4 className='block mt-4 md:inline-block md:mt-0 group transition-all duration-100 ease-in-out hover:cursor-pointer text-black dark:text-white text-xl font-semibold mx-12' onClick={() => setActiveTab('nfts')}>
              <span className={'bg-left-bottom bg-gradient-to-r from-blue-500 via-blue-700 to-green-500 bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out' + (activeTab == 'nfts' ? " bg-[length:100%_2px]" : " bg-[length:0%_2px]")}>
                NFTs owned
              </span>
            </h4>
          </div>
          <div className="flex flex-col justify-center my-4">
            { (activeTab == 'reviews' )
            ? <ReviewContainer data={reviews} />
            : <></>
            }
          </div>
        </div>
        <Tabs.Group aria-label="Default tabs" style="default">
          <Tabs.Item
            active={true}
            title="Reviews Written"
            icon={BsPencilSquare}>
              <ReviewContainer data={reviews}/>
              {displayReviews}
          </Tabs.Item>
          <Tabs.Item title="Reviews Rated" icon={FaVoteYea}></Tabs.Item>
        </Tabs.Group>
      </div>
    </Page>
  );
}
