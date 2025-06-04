import ButtonVote from "./ButtonVote";
import { MemeContext } from "../../context/MemeContext";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function MemeVotes({ meme, likes, dislikes, onInteraction }) {
  const { user } = useContext(AuthContext);
  const { likeMeme, dislikeMeme, unlikeMeme, undislikeMeme } =
    useContext(MemeContext);

  async function handleLike() {
    if (!meme.likes.includes(user.username)) {
      await likeMeme(meme._id);
      if (onInteraction) await onInteraction();
      return;
    }

    if (meme.likes.includes(user.username)) {
      await unlikeMeme(meme._id);
      if (onInteraction) await onInteraction();
      return;
    }
  }

  async function handleDislike() {
    if (!meme.dislikes.includes(user.username)) {
      await dislikeMeme(meme._id);
      if (onInteraction) await onInteraction();
      return;
    }

    if (meme.dislikes.includes(user.username)) {
      await undislikeMeme(meme._id);
      if (onInteraction) await onInteraction();
      return;
    }
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
