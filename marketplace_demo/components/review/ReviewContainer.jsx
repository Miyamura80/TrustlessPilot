import RatingBreakdown from "./RatingBreakdown";
import SingleReview from "./SingleReview";
import Voting from "./Voting";
import { AiFillStar } from "react-icons/ai";
import WriteReview from "./WriteReview";

export default function ReviewContainer(props) {
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
          </>
        : <></>
      }
    </div>
  );
}
