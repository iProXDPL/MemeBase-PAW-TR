import { ThumbsDown, ThumbsUp } from "@phosphor-icons/react";
import ButtonVote from "./ButtonVote";

function MemeVotes({ likes, dislikes }) {
  return (
    <div className="flex items-center gap-1 text-sm text-zinc-800 min-[480px]:gap-2 min-[480px]:text-lg sm:gap-3">
      <ButtonVote type="up" votesQuantity={likes} />
      <ButtonVote type="down" votesQuantity={dislikes} />
    </div>
  );
}

export default MemeVotes;
