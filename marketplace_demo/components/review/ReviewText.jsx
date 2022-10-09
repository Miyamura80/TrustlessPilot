import Stars from "./Stars";

export default function ReviewText({data}) {
  const stars = {stars: data.rating}
  return (
    <div>
      <div>
        <Stars data={stars} />
      </div>
      <div>
        <h1 className="text-lg">{data.metadata.title}</h1>
        <p className="text-sm">
          {data.metadata.content}
        </p>
      </div>
    </div>
  );
}
