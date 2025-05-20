import ButtonVote from "./ButtonVote";
import { MemeContext } from "../../context/MemeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function MemeVotes({ meme, likes, dislikes }) {
  const { user } = useContext(AuthContext);
  const { likeMeme, dislikeMeme, unlikeMeme, undislikeMeme } =
    useContext(MemeContext);

  function handleLike() {
    if (!meme.likes.includes(user.username)) {
      likeMeme(meme._id);
      return;
    }
    unlikeMeme(meme._id);
  }

  function handleDislike() {
    if (!meme.dislikes.includes(user.username)) {
      dislikeMeme(meme._id);
      return;
    }
    undislikeMeme(meme._id);
  }

  return (
    <div className="flex items-center gap-1 text-sm text-zinc-800 min-[480px]:gap-2 min-[480px]:text-lg sm:gap-3">
      <ButtonVote type="up" votesQuantity={likes} onClick={handleLike} />
      <ButtonVote
        type="down"
        votesQuantity={dislikes}
        onClick={handleDislike}
      />
    </div>
  );
}

export default MemeVotes;
