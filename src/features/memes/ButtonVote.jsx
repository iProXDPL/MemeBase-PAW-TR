import { ThumbsDown, ThumbsUp } from "@phosphor-icons/react";

function ButtonVote({ type, votesQuantity }) {
  const isVoteUp = type.toLowerCase() === "up";

  return (
    <button
      className={`flex items-center gap-2 bg-${
        isVoteUp ? "lime" : "orange"
      }-500 min-[480px]:py-2.5 min-[480px]:px-4 py-1.5 px-2 rounded-lg cursor-pointer`}
    >
      {isVoteUp ? <ThumbsUp /> : <ThumbsDown />}
      <span className="text-xs min-[480px]:text-sm">{votesQuantity}</span>
    </button>
  );
}

export default ButtonVote;
