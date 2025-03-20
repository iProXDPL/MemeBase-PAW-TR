import { ThumbsDown, ThumbsUp } from "@phosphor-icons/react";

function MemeVotes() {
  return (
    <div className="flex items-center sm:gap-3 min-[480px]:gap-2 gap-1 text-sm text-zinc-800 min-[480px]:text-lg">
      <button className="flex items-center gap-2 bg-lime-500 min-[480px]:py-2.5  min-[480px]:px-4 py-1.5 px-2 rounded-lg cursor-pointer">
        <ThumbsUp />
        <span className="text-xs min-[480px]:text-sm">147</span>
      </button>
      <button className="flex items-center gap-2 bg-orange-500 min-[480px]:py-2.5   min-[480px]:px-4 py-1.5 px-2 rounded-lg cursor-pointer">
        <ThumbsDown color="#27272A" />
        <span className="text-xs min-[480px]:text-sm">147</span>
      </button>
    </div>
  );
}

export default MemeVotes;
