import RatingBreakdown from "./RatingBreakdown";
import Review from "./Review";

export default function ReviewContainer() {
    return (
        <div>
            <h1>
                Reviews
            </h1>
                <RatingBreakdown></RatingBreakdown>
            <hr></hr>
                <Review></Review>
        </div>
    )
}