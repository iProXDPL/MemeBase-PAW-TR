import { ThumbsDown, ThumbsUp } from "@phosphor-icons/react";

function ButtonVote({ type, votesQuantity, onClick }) {
  const isVoteUp = type.toLowerCase() === "up";

  return (
    <button
      className={`flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 min-[480px]:px-4 min-[480px]:py-2.5 ${
        isVoteUp
          ? "bg-lime-500 hover:bg-lime-600"
          : "bg-orange-500 hover:bg-orange-600"
      } transition-all duration-300`}
      onClick={onClick}
    >
      {isVoteUp ? <ThumbsUp /> : <ThumbsDown />}
      <span className="text-xs min-[480px]:text-sm">{votesQuantity}</span>
    </button>
  );
}

export default ButtonVote;
