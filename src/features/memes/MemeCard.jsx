import Card from "../../ui/Card";
import DisplayMemeAuthor from "./DisplayMemeAuthor";
import memeUrl from "../../images/Meme.png";
import MemeActions from "./MemeActions";

function MemeCard() {
  return (
    <div className="w-10/12 m-auto">
      <Card>
        <DisplayMemeAuthor />
        <div className="py-3 m-auto">
          <img src={memeUrl} className="m-auto" />
        </div>
        <MemeActions />
      </Card>
    </div>
  );
}

export default MemeCard;
