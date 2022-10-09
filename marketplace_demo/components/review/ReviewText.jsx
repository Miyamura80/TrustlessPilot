import Stars from "./Stars";

export default function ReviewText(props) {
  const { review }= props
  console.log('in text', review)
  const stars = {stars: review?.rating}
  return (
    <div>
      <div>
        <Stars data={stars} />
      </div>
      <div>
        <h1 className="text-lg">{review?.metadata.title}</h1>
        <p className="text-sm">
          {review?.metadata.content}
        </p>
      </div>
    </div>
  );
}
