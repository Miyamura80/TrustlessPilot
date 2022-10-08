import RatingBreakdown from "./RatingBreakdown";
import Review from "./Review";
import Voting from "./Voting";
import { AiFillStar } from 'react-icons/ai';

export default function ReviewContainer() {
    const rating = 4.4;
    return (
        <div className='w-1/2 p-4 border-4 rounded-xl'>
            <div className="flex flex-wrap items-center">
                <div className="text-xl pl-4">
                    Reviews  |  {rating}
                </div>
                <div>
                    <AiFillStar size="20"/>
                </div>
            </div>
                <RatingBreakdown></RatingBreakdown>
            <hr></hr>
            <div className="flex flex-row m-2">
                <div className="flex-shrink mr-4 mt-4">
                    <Voting></Voting>
                </div>
                <div className="flex-1 w-42 bg-white rounded-2xl">
                    <Review></Review>
                </div>
            </div>
        </div>
    )
}