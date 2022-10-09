import { VscChevronUp, VscChevronDown } from "react-icons/vsc";


export default function Voting() {
    const totalVotes = 128;
    return (
        <div>
            <div>
                <button className="hover:bg-emerald-200 hover:rounded-xl">
                    <VscChevronUp size="24" />
                </button>
            </div>
            <div className="mb-1 text-sm">
                {totalVotes}
            </div>
            <div>
                <button className="hover:bg-red-300 hover:rounded-xl">
                    <VscChevronDown size="24" />
                </button>
            </div>
        </div>
    )
}