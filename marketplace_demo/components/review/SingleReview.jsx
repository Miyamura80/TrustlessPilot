import Voting from "./Voting";
import Link from 'next/link';
import ReviewText from './ReviewText'

export default function SingleReview(props) {
    const { review } = props
    return (
    <div className="flex flex-row m-4 mb-6 dark:text-gray-300">
        <div className="flex-shrink mr-4 mt-4">
          <Voting review={review}></Voting>
        </div>
        <div className="flex-1 w-42 bg-white dark:bg-gray-700 dark:border-gray-600 rounded-2xl">
            <div className="p-4 rounded-xl">
                <div className="flex items-center mb-4">
                    <Link href="/UserPage">
                        <div className='flex-shrink'>
                                <img src="https://statics-polygon-lens.s3.eu-west-1.amazonaws.com/profile/nft-0xF7C012789aac54B5E33EA5b88064ca1F1172De05_eth_0x47A00fC8590C11bE4c419D9Ae50DEc267B6E24ee_10217.png" height="50" width="50" className="rounded-full mr-4 cursor-pointer" />
                        </div>
                    </Link>
                    <div className="flex-auto cursor-pointer">
                        <h2>
                            Reviewer Name
                        </h2>
                        <h2>
                            Reputation
                        </h2>
                    </div>
                </div>
                <ReviewText review={review}/>
            </div>
        </div>
    </div>
    )
}