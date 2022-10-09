import RatingBreakdown from "./RatingBreakdown";
import SingleReview from "./SingleReview";
import Voting from "./Voting";
import { AiFillStar } from "react-icons/ai";
import WriteReview from "./WriteReview";

export default function ReviewContainer(data) {
  console.log(data);
  const reviews = data.data;
  console.log(reviews);
  return (
    <div className="w-1/2 p-4 rounded-xl">
        <div className="mb-8">
            <RatingBreakdown></RatingBreakdown>
        </div>
      <hr></hr>
      {reviews ? reviews.map((review, index) => {
        return (
          <SingleReview data={review} key={index} />
      )}) : <div>No reviews yet!</div> }
      <hr></hr>
      <div className="mt-8">
        <WriteReview />
      </div>
    </div>
  );
}