import { Page } from "../components/Page";
import ReviewText from "../components/review/ReviewText";
import Voting from "../components/review/Voting";
import { useState, useEffect } from "react";
import { formatAddress } from '../utils/formatting';
import { WorldcoinWidget } from '../components/profile'
import { useRouter } from 'next/router'
import ReviewContainer from "../components/review/ReviewContainer";
import { useAccount } from 'wagmi';

export default function UserPage() {
  const router = useRouter();
  const { address:connectedAddress } = useAccount();
  const verifiedHuman = true;
  const globalScore = 2000;

  const [walletAddress, setWalletAddress] = useState("");
  const [isReady, setIsReady] = useState(router.isReady)
  const [isLoading, setIsLoading] = useState(true)
  const [hasMounted, setHasMounted] = useState(false)

  const [data, setData] = useState(null);
  const [activeTab, setActiveTab] = useState('reviews')

  useEffect(() => {
    if (!walletAddress) return;
    fetch(`http://localhost:8000/user/${walletAddress}`)
      .then((response) => response.json())
      .then((data) => {
        if (data['status'] == 404) return;
        setData(data);
      })
      .then(() => setIsLoading(false))
      .catch((error) => console.log(error));
  }, [walletAddress])

  useEffect(() => {
    setIsReady(router.isReady)
    if (router.query['ad']) {
      setWalletAddress(router.query['ad'])
    }
  }, [router])

  useEffect(() => {
    setHasMounted(true)
  }, [])
  if (!hasMounted) {
    return null
  }

  if (isLoading || !isReady ) {
    return (
    <Page>
      <div className="flex flex-row mt-6">
        <div className="w-1/3 ml-10 mt-8 flex flex-col justify-center">
          <div>
            <div className="w-[300px] h-[300px] bg-gray-300 rounded-3xl mx-auto animate-pulse"></div>
          </div>
          <div className="flex items-center mx-auto my-2">
            <div className="w-40 h-8 bg-gray-300 rounded-3xl mx-auto animate-pulse"></div>
          </div>
          <div className="flex items-center mx-auto my-2">
            <div className="w-32 h-6 bg-gray-300 rounded-3xl mx-auto animate-pulse"></div>
          </div>
          <div className="mt-2">
          </div>
          <div className="flex mt-2 mx-auto">
            <div className="w-24 flex-none">
              <div className="w-6 h-8 bg-gray-300 rounded-3xl mx-auto animate-pulse"></div>
              <p className="text-center text-slate-500">Followers</p>
            </div>
            <div className="flex-1">
              <div className="w-6 h-8 bg-gray-300 rounded-3xl mx-auto animate-pulse"></div>
              <p className="text-center text-slate-500">Following</p>
            </div>
          </div>
          <div className="flex flex-row justify-center mt-6">
            <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto animate-pulse"></div>
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

          <div className="grid grid-cols-2 my-4">

          <div className="flex justify-center mt-1">
          <div className="flex flex-row justify-start m-2 dark:text-gray-300 px-6">
              <div className="flex-shrink justify-start mr-4 mt-4">
                <div className="flex-shrink justify-start mr-4 mt-4">
                    <div>
                        <button className="">
                            <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto animate-pulse"></div>
                        </button>
                    </div>
                    <div className="mb-1 text-sm">
                      <div className="w-8 h-10 bg-gray-300 rounded-3xl mx-auto animate-pulse"></div>
                    </div>
                    <div>
                        <button className="">
                            <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto animate-pulse"></div>
                        </button>
                    </div>
                </div>
              </div>
              <div className="flex-1 w-42 bg-white dark:bg-gray-700 justify-start dark:border-gray-600 rounded-2xl">
                  <div className="p-4 rounded-xl">
                      <div className="flex items-center mb-4">
                          <div className="w-[50px] h-[50px] bg-gray-300 rounded-full mx-auto animate-pulse"></div>
                          <div className="flex-auto cursor-pointer">
                                <div className="w-40 h-6 bg-gray-300 rounded-3xl mx-auto animate-pulse mb-2"></div>
                                <div className="w-32 h-6 bg-gray-300 rounded-3xl mx-auto animate-pulse"></div>
                          </div>
                      </div>
                      <div>
                        <div className="flex flex-row justify-center mb-2">
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                        </div>
                        <div>
                          <div className="w-96 h-6 bg-gray-300 rounded-3xl mx-auto animate-pulse mb-2"></div>
                          <div className="w-80 h-4 bg-gray-300 rounded-3xl mx-auto animate-pulse"></div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
          </div>

          <div className="flex justify-center mt-1">
          <div className="flex flex-row justify-start m-2 dark:text-gray-300 px-6">
              <div className="flex-shrink justify-start mr-4 mt-4">
                <div className="flex-shrink justify-start mr-4 mt-4">
                    <div>
                        <button className="">
                            <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto animate-pulse"></div>
                        </button>
                    </div>
                    <div className="mb-1 text-sm">
                      <div className="w-8 h-10 bg-gray-300 rounded-3xl mx-auto animate-pulse"></div>
                    </div>
                    <div>
                        <button className="">
                            <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto animate-pulse"></div>
                        </button>
                    </div>
                </div>
              </div>
              <div className="flex-1 w-42 bg-white dark:bg-gray-700 justify-start dark:border-gray-600 rounded-2xl">
                  <div className="p-4 rounded-xl">
                      <div className="flex items-center mb-4">
                          <div className="w-[50px] h-[50px] bg-gray-300 rounded-full mx-auto animate-pulse"></div>
                          <div className="flex-auto cursor-pointer">
                                <div className="w-40 h-6 bg-gray-300 rounded-3xl mx-auto animate-pulse mb-2"></div>
                                <div className="w-32 h-6 bg-gray-300 rounded-3xl mx-auto animate-pulse"></div>
                          </div>
                      </div>
                      <div>
                        <div className="flex flex-row justify-center mb-2">
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                        </div>
                        <div>
                          <div className="w-96 h-6 bg-gray-300 rounded-3xl mx-auto animate-pulse mb-2"></div>
                          <div className="w-80 h-4 bg-gray-300 rounded-3xl mx-auto animate-pulse"></div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
          </div>

          <div className="flex justify-center mt-1">
          <div className="flex flex-row justify-start m-2 dark:text-gray-300 px-6">
              <div className="flex-shrink justify-start mr-4 mt-4">
                <div className="flex-shrink justify-start mr-4 mt-4">
                    <div>
                        <button className="">
                            <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto animate-pulse"></div>
                        </button>
                    </div>
                    <div className="mb-1 text-sm">
                      <div className="w-8 h-10 bg-gray-300 rounded-3xl mx-auto animate-pulse"></div>
                    </div>
                    <div>
                        <button className="">
                            <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto animate-pulse"></div>
                        </button>
                    </div>
                </div>
              </div>
              <div className="flex-1 w-42 bg-white dark:bg-gray-700 justify-start dark:border-gray-600 rounded-2xl">
                  <div className="p-4 rounded-xl">
                      <div className="flex items-center mb-4">
                          <div className="w-[50px] h-[50px] bg-gray-300 rounded-full mx-auto animate-pulse"></div>
                          <div className="flex-auto cursor-pointer">
                                <div className="w-40 h-6 bg-gray-300 rounded-3xl mx-auto animate-pulse mb-2"></div>
                                <div className="w-32 h-6 bg-gray-300 rounded-3xl mx-auto animate-pulse"></div>
                          </div>
                      </div>
                      <div>
                        <div className="flex flex-row justify-center mb-2">
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                        </div>
                        <div>
                          <div className="w-96 h-6 bg-gray-300 rounded-3xl mx-auto animate-pulse mb-2"></div>
                          <div className="w-80 h-4 bg-gray-300 rounded-3xl mx-auto animate-pulse"></div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
          </div>

          <div className="flex justify-center mt-1">
          <div className="flex flex-row justify-start m-2 dark:text-gray-300 px-6">
              <div className="flex-shrink justify-start mr-4 mt-4">
                <div className="flex-shrink justify-start mr-4 mt-4">
                    <div>
                        <button className="">
                            <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto animate-pulse"></div>
                        </button>
                    </div>
                    <div className="mb-1 text-sm">
                      <div className="w-8 h-10 bg-gray-300 rounded-3xl mx-auto animate-pulse"></div>
                    </div>
                    <div>
                        <button className="">
                            <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto animate-pulse"></div>
                        </button>
                    </div>
                </div>
              </div>
              <div className="flex-1 w-42 bg-white dark:bg-gray-700 justify-start dark:border-gray-600 rounded-2xl">
                  <div className="p-4 rounded-xl">
                      <div className="flex items-center mb-4">
                          <div className="w-[50px] h-[50px] bg-gray-300 rounded-full mx-auto animate-pulse"></div>
                          <div className="flex-auto cursor-pointer">
                                <div className="w-40 h-6 bg-gray-300 rounded-3xl mx-auto animate-pulse mb-2"></div>
                                <div className="w-32 h-6 bg-gray-300 rounded-3xl mx-auto animate-pulse"></div>
                          </div>
                      </div>
                      <div>
                        <div className="flex flex-row justify-center mb-2">
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                        </div>
                        <div>
                          <div className="w-96 h-6 bg-gray-300 rounded-3xl mx-auto animate-pulse mb-2"></div>
                          <div className="w-80 h-4 bg-gray-300 rounded-3xl mx-auto animate-pulse"></div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
          </div>

          <div className="flex justify-center mt-1">
          <div className="flex flex-row justify-start m-2 dark:text-gray-300 px-6">
              <div className="flex-shrink justify-start mr-4 mt-4">
                <div className="flex-shrink justify-start mr-4 mt-4">
                    <div>
                        <button className="">
                            <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto animate-pulse"></div>
                        </button>
                    </div>
                    <div className="mb-1 text-sm">
                      <div className="w-8 h-10 bg-gray-300 rounded-3xl mx-auto animate-pulse"></div>
                    </div>
                    <div>
                        <button className="">
                            <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto animate-pulse"></div>
                        </button>
                    </div>
                </div>
              </div>
              <div className="flex-1 w-42 bg-white dark:bg-gray-700 justify-start dark:border-gray-600 rounded-2xl">
                  <div className="p-4 rounded-xl">
                      <div className="flex items-center mb-4">
                          <div className="w-[50px] h-[50px] bg-gray-300 rounded-full mx-auto animate-pulse"></div>
                          <div className="flex-auto cursor-pointer">
                                <div className="w-40 h-6 bg-gray-300 rounded-3xl mx-auto animate-pulse mb-2"></div>
                                <div className="w-32 h-6 bg-gray-300 rounded-3xl mx-auto animate-pulse"></div>
                          </div>
                      </div>
                      <div>
                        <div className="flex flex-row justify-center mb-2">
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                        </div>
                        <div>
                          <div className="w-96 h-6 bg-gray-300 rounded-3xl mx-auto animate-pulse mb-2"></div>
                          <div className="w-80 h-4 bg-gray-300 rounded-3xl mx-auto animate-pulse"></div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
          </div>

          <div className="flex justify-center mt-1">
          <div className="flex flex-row justify-start m-2 dark:text-gray-300 px-6">
              <div className="flex-shrink justify-start mr-4 mt-4">
                <div className="flex-shrink justify-start mr-4 mt-4">
                    <div>
                        <button className="">
                            <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto animate-pulse"></div>
                        </button>
                    </div>
                    <div className="mb-1 text-sm">
                      <div className="w-8 h-10 bg-gray-300 rounded-3xl mx-auto animate-pulse"></div>
                    </div>
                    <div>
                        <button className="">
                            <div className="w-8 h-8 bg-gray-300 rounded-full mx-auto animate-pulse"></div>
                        </button>
                    </div>
                </div>
              </div>
              <div className="flex-1 w-42 bg-white dark:bg-gray-700 justify-start dark:border-gray-600 rounded-2xl">
                  <div className="p-4 rounded-xl">
                      <div className="flex items-center mb-4">
                          <div className="w-[50px] h-[50px] bg-gray-300 rounded-full mx-auto animate-pulse"></div>
                          <div className="flex-auto cursor-pointer">
                                <div className="w-40 h-6 bg-gray-300 rounded-3xl mx-auto animate-pulse mb-2"></div>
                                <div className="w-32 h-6 bg-gray-300 rounded-3xl mx-auto animate-pulse"></div>
                          </div>
                      </div>
                      <div>
                        <div className="flex flex-row justify-center mb-2">
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                          <div className="w-4 h-4 bg-gray-300 rounded-full mx-1 animate-pulse"></div>
                        </div>
                        <div>
                          <div className="w-96 h-6 bg-gray-300 rounded-3xl mx-auto animate-pulse mb-2"></div>
                          <div className="w-80 h-4 bg-gray-300 rounded-3xl mx-auto animate-pulse"></div>
                        </div>
                      </div>
                  </div>
              </div>
          </div>
          </div>

          </div>

        </div>
      </div>
    </Page>
  )};

  const reviews = data.userReviews;
  const profileData = data.profile.profiles[0];

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
            null}
            { walletAddress == connectedAddress ?
            <WorldcoinWidget signal="43587" /> : null}
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
            ? <ReviewContainer reviews={reviews} showReviewDialog={false} showRatingBreakdown={false} />
            : <></>
            }

          </div>
        </div>
      </div>
    </Page>
  );
}
