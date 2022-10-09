import { VscChevronUp, VscChevronDown } from "react-icons/vsc";
import { useState } from "react";

export default function Voting(props) {
  const { review } = props;
  const [x, setX] = useState(review.metadata.content.length);
  return (
    <div>
      <div>
        <button
          className="hover:bg-emerald-200 hover:rounded-xl"
          onClick={() => setX(x + 1)}
        >
          <VscChevronUp size="24" />
        </button>
      </div>
      <div className="mb-1 text-sm">{x}</div>
      <div>
        <button
          className="hover:bg-red-300 hover:rounded-xl"
          onClick={() => setX(x - 1)}
        >
          <VscChevronDown size="24" />
        </button>
      </div>
    </div>
  );
}
