import { useContext } from "react";
import MemeCard from "../features/memes/MemeCard";
import MemePageNavigation from "../features/memes/MemePageNavigation";
import { MemeContext } from "../context/MemeContext";

function MainPage() {
  const { memes } = useContext(MemeContext);
  if (!memes || memes.length === 0) {
    return <div className="py-8 text-center text-gray-500">Brak postów</div>;
  }
  return (
    <div className="flex flex-col gap-6 px-6 py-8 sm:gap-12">
      {memes.map((meme) => (
        <MemeCard
          key={meme._id}
          meme={meme}
          memeUrl={meme.image}
          textMeme={meme.description}
        />
      ))}
      {/*<MemePageNavigation />*/}
    </div>
  );
}

export default MainPage;
