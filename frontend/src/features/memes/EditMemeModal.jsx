import { useContext, useState } from "react";
import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import Card from "../../ui/Card";
import MemeUploader from "./MemeUploader";
import { MemeContext } from "../../context/MemeContext";

function EditMemeModal() {
  const { dispatch, REDUCER_ACTIONS, editMeme, currentMeme } = useContext(MemeContext);
  const [title, setTitle] = useState(currentMeme?.description || "");
  const [file, setFile] = useState(null);
  const [titleError, setTitleError] = useState("");
  const [isFileError, setIsFileError] = useState(false);

  const handleEdit = () => {
    if (!title) {
      setTitleError("Opis nie został wprowadzony");
      return;
    }
    setTitleError("");
    // Jeśli chcesz umożliwić edycję obrazka, wyślij plik, w przeciwnym razie tylko opis
    if (file) {
      const formData = new FormData();
      formData.append("description", title);
      formData.append("image", file);
      editMeme(currentMeme._id, formData);
    } else {
      editMeme(currentMeme._id, { description: title });
    }
    dispatch({ type: REDUCER_ACTIONS.EDIT_MODAL_CLOSED });
  };

  return (
    <Modal
      title="Edytuj mema"
      description="Zmień opis lub obrazek mema:"
      onClose={() => dispatch({ type: REDUCER_ACTIONS.EDIT_MODAL_CLOSED })}
    >
      <Card>
        <div className="mb-4 flex flex-col">
          <label className="pb-2 text-zinc-600">Opis</label>
          <input
            className="rounded-lg bg-white p-2 text-base text-zinc-700 focus:ring-3 focus:ring-violet-800 focus:ring-offset-2 focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nowy opis"
          />
          {titleError && (
            <span className="pt-2 pl-2 text-xs text-red-700">{titleError}</span>
          )}
        </div>
        <MemeUploader
          onFileChange={setFile}
          handleResetError={() => setIsFileError(false)}
        />
        <p
          className={`pt-1.5 text-xs ${isFileError ? "text-red-700" : "text-zinc-600"}`}
        >
          {file ? file.name : "Nie wybrano nowego zdjęcia"}
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <Button
            type="secondary"
            onClickSecondary={() => dispatch({ type: REDUCER_ACTIONS.EDIT_MODAL_CLOSED })}
          >
            Anuluj
          </Button>
          <Button color="purple" onClickPrimary={handleEdit}>
            Zapisz
          </Button>
        </div>
      </Card>
    </Modal>
  );
}

export default EditMemeModal;