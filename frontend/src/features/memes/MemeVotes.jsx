import { ThumbsDown, ThumbsUp } from "@phosphor-icons/react";
import ButtonVote from "./ButtonVote";

function MemeVotes() {
  return (
    <div className="flex items-center sm:gap-3 min-[480px]:gap-2 gap-1 text-sm text-zinc-800 min-[480px]:text-lg">
      <ButtonVote type="up" votesQuantity="147" />
      <ButtonVote type="down" votesQuantity="147" />
    </div>
  );
}

export default MemeVotes;
