import { User } from "@phosphor-icons/react";

function DisplayMemeAuthor() {
  return (
    <div className="flex items-center gap-1.5 sm:gap-3 text-xs sm:text-base">
      <div className="bg-white flex items-center p-1.5 rounded-full">
        <User color="#27272A" />
      </div>
      <p className="text-zinc-800 text-xs sm:text-base">RandomUser1</p>
    </div>
  );
}

export default DisplayMemeAuthor;
