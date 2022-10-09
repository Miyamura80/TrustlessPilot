import { AiFillStar } from "react-icons/ai";

export default function RatingBreakdown() {
  const ratings = [35, 30, 20, 10, 5]; // replace with props later

  const ratingBars = ratings.map((number, index) => (

    <div className="flex items-center mx-6" key={index}>
        <div className="w-20 flex-shrink text-sm">
            <p>{5 - index}-star</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 flex-grow">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${number}%`}}></div>
        </div>
    </div>
  ));
  const rating = 4.2
  return (
    <>
        <div className="flex flex-wrap items-center">
        <div className="text-xl pl-4">Reviews | {rating}</div>
        <div className="ml-2">
            <AiFillStar size="20" />
        </div>
        </div>
        <div className="m-4">
            {ratingBars}
        </div>
    </>
  )
}
