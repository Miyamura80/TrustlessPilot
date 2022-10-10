import RatingBreakdown from "./RatingBreakdown";
import SingleReview from "./SingleReview";
import Voting from "./Voting";
import { AiFillStar } from "react-icons/ai";
import WriteReview from "./WriteReview";
import { WorldcoinWidget } from '../../components/profile';
import { useState } from "react";


export default function ReviewContainer(props) {
  const [isVerified, setIsVerified] = useState(false);
  const {reviews, showReviewDialog, showRatingBreakdown} = props
  return (
    <div className="w-1/2 p-4 rounded-xl">
      { showRatingBreakdown === true
        ? <><RatingBreakdown /><hr></hr></>
        : <></>
      }
      {reviews ? reviews.map((review, index) => {
        return (
          <SingleReview review={review} key={index} />
      )}) : <div>No reviews yet!</div> }
      { showReviewDialog === true
        ? <>
            <hr></hr>
            <div className="mt-4">
              <WriteReview />
            </div>

      <div className='pl-4 pt-4 flex flex-col justify-center'><div className="mx-auto"><WorldcoinWidget signal={"43587"} setIsVerified={setIsVerified}/>
                <div className='pt-4'>
                { isVerified
                ? (<span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-green-100 text-green-500 mx-auto">
                    <span className="w-1.5 h-1.5 inline-block bg-lime-400 rounded-full"></span>
                    Verified
                  </span>
                  )
                : (<span className="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-500 mx-auto">
                    <span className="w-1.5 h-1.5 inline-block bg-red-400 rounded-full"></span>
                    Not Verified
                  </span>
                  )
                }
      </div>
      </div>
      </div>
      </>: <></>
    }
    </div>
  );
}
