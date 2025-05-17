import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import DisplayMemeAuthor from "./DisplayMemeAuthor";
import { PencilSimple, Trash } from "@phosphor-icons/react";
import { MemeContext } from "../../context/MemeContext";

function MemeHeader({ meme }) {
  const { user } = useContext(AuthContext);
  const { REDUCER_ACTIONS, dispatch } = useContext(MemeContext);

  const authorName = meme.author.username;
  const currentUserIsAuthor = user && authorName === user.username;
  const currentUserIsAdmin =
    user && user.role === "moderator" && !currentUserIsAuthor;

  return (
    <div className="flex items-center justify-between text-xs text-zinc-600 sm:text-base">
      <DisplayMemeAuthor authorName={authorName} />
      <div className="flex gap-3">
        {currentUserIsAuthor && (
          <>
            <PencilSimple
              size={20}
              className="cursor-pointer transition-all duration-300 hover:text-zinc-900"
              onClick={() => 
                dispatch({ 
                  type: REDUCER_ACTIONS.EDIT_MODAL_VISIBLE, 
                  payload: meme,
                 })}
            />
            <Trash
              size={20}
              className="cursor-pointer transition-all duration-300 hover:text-zinc-900"
              onClick={() =>
                dispatch({
                  type: REDUCER_ACTIONS.DELETE_MODAL_VISIBLE,
                  payload: meme,
                })
              }
            />
          </>
        )}
        {currentUserIsAdmin && (
          <Trash
            size={20}
            className="cursor-pointer transition-all duration-300 hover:text-zinc-900"
            onClick={() =>
              dispatch({
                type: REDUCER_ACTIONS.DELETE_MODAL_VISIBLE,
                payload: meme,
              })
            }
          />
        )}
      </div>
    </div>
  );
}

export default MemeHeader;
