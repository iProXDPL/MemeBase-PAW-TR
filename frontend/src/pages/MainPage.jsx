import MemeCard from "../features/memes/MemeCard";
import memeUrl1 from "../images/Meme.png";
import memeUrl2 from "../images/image.png";

function MainPage() {
  return (
    <div className="py-8 px-6 flex flex-col sm:gap-12 gap-6 ">
      <MemeCard
        memeUrl={memeUrl1}
        textMeme="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
      <MemeCard memeUrl={memeUrl2} />
      <MemeCard memeUrl={memeUrl1} />
    </div>
  );
}

export default MainPage;
