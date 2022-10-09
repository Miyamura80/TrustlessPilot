import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

export default function Stars({data}) {
  const stars = data.stars;
  const filled_stars = [...Array(stars)].map((i, index) => (
    <div className="flex-shrink" key={index}>
      <AiFillStar size="20" />
    </div>
  ));

  const empty_stars = [...Array(5 - stars)].map((i, index) => (
    <div className="flex-shrink" key={index}>
      <AiOutlineStar size="20" />
    </div>
  ));

  return (
    <div className="flex mb-2">
      {filled_stars}
      {empty_stars}
    </div>
  );
}