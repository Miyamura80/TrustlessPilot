import Voting from "./Voting";
import Link from 'next/link';
import ReviewText from './ReviewText'
import { formatAddress } from '../../utils/formatting';

export default function SingleReview(props) {
    const { review } = props
    return (
    <div className="flex flex-row m-4 mb-6 dark:text-gray-300">
        <div className="flex-shrink mr-4 mt-4">
          <Voting totalVotes={review.upvotes}></Voting>
        </div>
        <div className="flex-1 w-42 bg-white dark:bg-gray-700 dark:border-gray-600 rounded-2xl">
            <div className="p-4 rounded-xl">
                <div className="flex items-center mb-4">
                    <Link href="/UserPage">
                        <div className='flex-shrink'>
                                <img src={review.imageUrl} height="50" width="50" className="rounded-full mr-4 cursor-pointer" />
                        </div>
                    </Link>
                    <div className="flex-auto cursor-pointer">
                        <h2 className="font-semibold">
                            {review.name.length > 40 ? formatAddress(review.name): review.name}
                        </h2>
                        <h2>
                            Reputation: {review.reputation}
                        </h2>
                    </div>
                </div>
                <ReviewText review={review}/>
            </div>
        </div>
    </div>
    )
}
