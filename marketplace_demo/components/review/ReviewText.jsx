import Stars from "./Stars";

export default function ReviewText({data}) {
  return (
    <div>
      <div>
        <Stars />
      </div>
      <div>
        <h1 className="text-lg">{review.metadata.title}</h1>
        <p className="text-sm">
          {review.metadata.review}
        </p>
      </div>
    </div>
  );
}
