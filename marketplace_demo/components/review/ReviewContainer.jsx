import RatingBreakdown from "./RatingBreakdown";
import SingleReview from "./SingleReview";
import Voting from "./Voting";
import { AiFillStar } from "react-icons/ai";
import WriteReview from "./WriteReview";

export default function ReviewContainer() {
  const rating = 4.4;
  return (
    <div className="w-1/2 p-4 border-4 rounded-xl">
      <RatingBreakdown></RatingBreakdown>
      <hr></hr>
      <SingleReview />
      <hr></hr>
      <div className="mt-4">
        <WriteReview />
      </div>
    </div>
  );
}
