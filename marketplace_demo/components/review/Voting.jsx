import { useState } from "react";
import { VscChevronUp, VscChevronDown } from "react-icons/vsc";


export default function Voting(props) {
    const {totalVotes} = props;
    const [x,setX] = useState(totalVotes);
    return (
        <div>
            <div>
                <button className="hover:bg-emerald-200 hover:rounded-xl" onClick={() => {const k = x+1; setX(k);}}>
                    <VscChevronUp size="24" />
                </button>
            </div>
            <div className="mb-1 text-sm">
                {x}
            </div>
            <div>
                <button className="hover:bg-red-300 hover:rounded-xl" onClick={() => setX(x-1)}>
                    <VscChevronDown size="24" />
                </button>
            </div>
        </div>
    )
}