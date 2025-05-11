import { useContext } from "react";
import MemeCard from "../features/memes/MemeCard";
import MemePageNavigation from "../features/memes/MemePageNavigation";
import memeUrl1 from "../images/Meme.png";
import { MemeContext } from "../context/MemeContext";

function MainPage() {
  const { memes } = useContext(MemeContext);
  return (
    <div className="flex flex-col gap-6 px-6 py-8 sm:gap-12">
      {memes.map((meme) => (
        <MemeCard
          key={meme._id}
          meme={meme}
          memeUrl={memeUrl1}
          textMeme="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      ))}

      <MemePageNavigation />
    </div>
  );
}

export default MainPage;
