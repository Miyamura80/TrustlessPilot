export default function RatingBreakdown() {
  const ratings = [35, 30, 20, 10, 5]; // replace with props later

  const ratingBars = ratings.map((number, index) => (
    <div className="flex items-center mx-6">
        <div className="w-20 flex-shrink text-sm">
            <p>{5 - index}-star</p>
        </div>
        <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 flex-grow">
            <div class="bg-blue-600 h-2.5 rounded-full" style={{width: `${number}%`}}></div>
        </div>
    </div>
  ));
  return (
    <div className="m-4">
        {ratingBars}
    </div>
  )
}

{
  /* <div className="flex-shrink w-16 px-6">{5 - index}</div> */
}
