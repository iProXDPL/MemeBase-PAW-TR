import { User } from "@phosphor-icons/react";

function DisplayMemeAuthor() {
  return (
    <div className="flex items-center gap-1.5 min-[480px]:text-sm sm:gap-3">
      <div className="flex items-center rounded-full bg-white p-1.5">
        <User />
      </div>
      <p>RandomUser1</p>
    </div>
  );
}

export default DisplayMemeAuthor;
