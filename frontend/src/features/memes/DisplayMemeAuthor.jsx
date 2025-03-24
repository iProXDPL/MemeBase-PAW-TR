import { User } from "@phosphor-icons/react";

function DisplayMemeAuthor() {
  return (
    <div className="text-zinc-600 flex items-center gap-1.5 sm:gap-3 min-[480px]:text-sm text-xs sm:text-base">
      <div className="bg-white flex items-center p-1.5 rounded-full">
        <User />
      </div>
      <p className=" ">RandomUser1</p>
    </div>
  );
}

export default DisplayMemeAuthor;
