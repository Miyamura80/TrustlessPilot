import Voting from "./Voting";
import Link from 'next/link';
import ReviewText from './ReviewText'

export default function SingleReview(review) {
    console.log('review ', review)
    return (
    <div className="flex flex-row m-2 dark:text-gray-300">
        <div className="flex-shrink mr-4 mt-4">
          <Voting></Voting>
        </div>
        <div className="flex-1 w-42 bg-white dark:bg-gray-700 dark:border-gray-600 rounded-2xl">
            <div className="p-4 rounded-xl">
                <div className="flex items-center mb-4">
                    <Link href="/UserPage">
                        <div className='flex-shrink'>
                                <img src="https://www.creative-tim.com/learning-lab/tailwind-starter-kit/img/team-4-470x470.png" height="50" width="50" className="rounded-full mr-4 cursor-pointer" />
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
                <ReviewText data={review}/>
            </div>
        </div>
    </div>
    )
}