import MemeCard from "../features/memes/MemeCard";
import memeUrl1 from "../images/Meme.png";
import { Shuffle } from "@phosphor-icons/react";


function RandomMeme() {
  return (
    <div className="flex flex-col gap-6 px-6 py-8 sm:gap-4">
      <MemeCard
        memeUrl={memeUrl1}
        textMeme="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <div className="m-auto w-full sm:w-10/12 md:max-w-[500px]">
        <button className="w-full flex items-center justify-center gap-2 rounded-lg bg-purple-600 py-2 text-white hover:bg-purple-700">
              Losuj <Shuffle size="24"/>
        </button>
      </div>
    </div>
  );
}

export default RandomMeme;
