import Card from "../ui/Card";
import SectionUndelinedTitle from "../ui/SectionUndelinedTitle";
import Button from "../ui/Button";
import { useContext, useState } from "react";
import { MemeContext } from "../context/MemeContext";
import MemeUploader from "../features/memes/MemeUploader";

function PublishMeme() {
  const { createMeme, isLoading, error } = useContext(MemeContext);
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [titleError, setTitleError] = useState("");
  const [isFileError, setIsFileError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    if (!file && !title) {
      setIsFileError(true);
      setTitleError("Tytuł nie został wprowadzony");
      return;
    }
    if (!file) return setIsFileError(true);
    if (!title) return setTitleError("Tytuł nie został wprowadzony");

    setIsFileError(false);
    setTitleError("");
    console.log(`title: ${title}`);

    createMeme({ title, file });

    setTitle("");
    setFile(null);
  }

  return (
    <form
      action="POST"
      className="m-auto mt-12 mb-20 px-6 min-[1100px]:max-w-[900px] md:w-10/12"
      onSubmit={handleSubmit}
    >
      <SectionUndelinedTitle>Publikuj mema</SectionUndelinedTitle>
      <Card>
        <div className="mb-4 flex flex-col">
          <label className="pb-2 text-zinc-600">Tytuł</label>
          <input
            placeholder="Tytuł"
            className="rounded-lg bg-white p-2 text-base text-zinc-700 focus:ring-3 focus:ring-violet-800 focus:ring-offset-2 focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
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
          {file ? file.name : "Nie wybrano zdjęcia"}
        </p>
        {error && <p className="mt-4 text-center text-red-700">{error}</p>}

        <div className="mt-8 text-center">
          <Button color="violet">{isLoading ? "Czekaj..." : "Publikuj"}</Button>
        </div>
      </Card>
    </form>
  );
}

export default PublishMeme;
