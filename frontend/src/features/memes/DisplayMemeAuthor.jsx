import { User } from "@phosphor-icons/react";

function DisplayMemeAuthor({ authorName }) {
  return (
    <div className="flex items-center gap-1.5 min-[480px]:text-sm sm:gap-3">
      <div className="flex items-center rounded-full bg-white p-1.5">
        <User />
      </div>
      <p>{authorName}</p>
    </div>
  );
}

export default DisplayMemeAuthor;
