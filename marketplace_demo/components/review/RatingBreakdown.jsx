export default function RatingBreakdown() {
    const numbers = [1, 2, 3, 4, 5]; // replace with props later
    const ratings = numbers.map((number) =>
         <div className="flex mb-3">
            <div className="flex-shrink w-16 px-6">
                {number}
            </div>
            <div className="flex-1 mr-20 border-2">
            </div>
        </div>
    );
    return (
        <div className="">
            {ratings}
        </div>
    )
}