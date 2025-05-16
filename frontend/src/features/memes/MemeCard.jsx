import Card from "../../ui/Card";
import MemeActions from "./MemeActions";
import MemeHeader from "./MemeHeader";
import MemeShare from "./MemeShare";
import MemeVotes from "./MemeVotes";

function MemeCard({ meme, textMeme, memeUrl }) {
  return (
    <div className="m-auto w-full sm:w-10/12 md:max-w-[500px]">
      <Card>
        <MemeHeader meme={meme} />
        <div className="m-auto py-4">
          <img src={memeUrl} className="m-auto" />
        </div>
        <p className="mt-1 mb-5 text-center text-xs font-medium text-zinc-700 sm:text-sm">
          {textMeme}
        </p>
        <MemeActions>
          <MemeVotes
            likes={meme.likes.length}
            dislikes={meme.dislikes.length}
          />
          <MemeShare />
        </MemeActions>
      </Card>
    </div>
  );
}

export default MemeCard;
