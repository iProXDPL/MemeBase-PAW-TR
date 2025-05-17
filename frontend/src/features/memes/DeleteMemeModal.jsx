import { useContext } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import { MemeContext } from "../../context/MemeContext";

function DeleteMemeModal() {
  const { dispatch, REDUCER_ACTIONS, deleteMeme, currentMeme } =
    useContext(MemeContext);
  console.log(currentMeme);
  return (
    <Modal
      title="Usuń post"
      description="Czy napewno chcesz trwale usunąć ten post?"
      onClose={() => dispatch({ type: REDUCER_ACTIONS.DELETE_MODAL_CLOSED })}
    >
      <Button
        type="secondary"
        onClickSecondary={() =>
          dispatch({ type: REDUCER_ACTIONS.DELETE_MODAL_CLOSED })
        }
      >
        Anuluj
      </Button>
      <Button color="purple" onClickPrimary={() => deleteMeme(currentMeme._id)}>
        Usuń
      </Button>
    </Modal>
  );
}

export default DeleteMemeModal;
