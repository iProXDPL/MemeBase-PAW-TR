import { useContext, useEffect } from "react";
import MemeCard from "../features/memes/MemeCard";
import { Shuffle } from "@phosphor-icons/react";
import { MemeContext } from "../context/MemeContext";

function RandomMeme() {
  const { currentMeme, isLoading, randomMeme, getMeme } =
    useContext(MemeContext);

  useEffect(() => {
    randomMeme();
  }, []);

  console.log(currentMeme);
  return (
    <div className="flex flex-col gap-6 px-6 py-8 sm:gap-4">
      {isLoading && <div>Ładowanie...</div>}
      {currentMeme && currentMeme._id && (
        <MemeCard
          meme={currentMeme}
          textMeme={currentMeme.description}
          memeUrl={currentMeme.image}
          onInteraction={() => getMeme(currentMeme._id)}
        />
      )}
      <div className="m-auto w-full sm:w-10/12 md:max-w-[500px]">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 py-2 text-white hover:bg-purple-700"
          onClick={randomMeme}
          disabled={isLoading}
        >
          Losuj <Shuffle size="24" />
        </button>
      </div>
    </div>
  );
}

export default RandomMeme;
