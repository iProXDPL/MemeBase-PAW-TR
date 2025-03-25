import MemeCard from "../features/memes/MemeCard";
import memeUrl1 from "../images/Meme.png";


function RandomMeme() {
  return (
    <div className="flex flex-col gap-6 px-6 py-8 sm:gap-12">
      <MemeCard
        memeUrl={memeUrl1}
        textMeme="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </div>
  );
}

export default RandomMeme;
