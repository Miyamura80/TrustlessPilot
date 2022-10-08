import { AiOutlineStar, AiFillStar } from 'react-icons/ai'


const Stars = 3

export default function Review() {
    return (
        <>
            {/* Vertical div */}
            <div className="flex flex-col">
                <div className="flex-1">
                    <h2>
                        Reviewer Name
                    </h2>
                    <h2>
                        Reputation 
                    </h2>
                </div>
                <div className="flex-1">
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <AiFillStar></AiFillStar>
                    <AiOutlineStar></AiOutlineStar>
                    <AiOutlineStar></AiOutlineStar>
                </div>
                <div className="flex-1">
                    <h1>
                        Review Title
                    </h1>
                    <p>
                        Lorem ipseum dolor. Lorem ipseum dolor. Lorem ipseum dolor. Lorem ipseum dolor. 
                    </p>
                </div>
            </div>

        </>
    )
}