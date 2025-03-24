import Card from "../../ui/Card";
import DisplayMemeAuthor from "./DisplayMemeAuthor";
import MemeActions from "./MemeActions";

function MemeCard({ textMeme, memeUrl }) {
  return (
    <div className="md:max-w-[600px] sm:w-10/12 w-full m-auto">
      <Card>
        <DisplayMemeAuthor />
        <div className="sm:py-4 py-2 m-auto">
          <img src={memeUrl} className="m-auto" />
        </div>
        <p className="sm:text-sm text-xs text-zinc-800 text-center mb-5 mt-1 font-medium">
          {textMeme}
        </p>
        <MemeActions />
      </Card>
    </div>
  );
}

export default MemeCard;
