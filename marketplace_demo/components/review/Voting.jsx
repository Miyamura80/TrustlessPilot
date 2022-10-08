import { VscChevronUp, VscChevronDown } from "react-icons/vsc";


export default function Voting() {

    return (
        <div>
            <div>
                <button className="hover:bg-emerald-200 hover:rounded-xl">
                    <VscChevronUp size="28" />
                </button>
            </div>
            <div>
                <button className="hover:bg-red-300 hover:rounded-xl">
                    <VscChevronDown size="28" />
                </button>
            </div>
        </div>
    )
}