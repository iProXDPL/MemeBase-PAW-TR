import MemeCard from "../features/memes/MemeCard";
import MemePageNavigation from "../features/memes/MemePageNavigation";
import memeUrl1 from "../images/Meme.png";
import memeUrl2 from "../images/image.png";

function MainPage() {
  return (
    <div className="flex flex-col gap-6 px-6 py-8 sm:gap-12">
      <MemeCard
        memeUrl={memeUrl1}
        textMeme="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <MemeCard memeUrl={memeUrl2} />
      <MemeCard memeUrl={memeUrl1} />
      <MemePageNavigation />
    </div>
  );
}

export default MainPage;
