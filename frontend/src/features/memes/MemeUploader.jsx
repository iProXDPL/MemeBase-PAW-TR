import { UploadSimple } from "@phosphor-icons/react";

function MemeUploader({ handleResetError, onFileChange }) {
  function handleFileChange(e) {
    if (e.target.files) {
      onFileChange(e.target.files[0]);
      handleResetError();
    }
  }

  return (
    <>
      <div
        className="inline-flex cursor-pointer items-center gap-2 border-b-1 border-violet-900 text-violet-900 hover:text-violet-950 focus:rounded-md focus:ring-3 focus:ring-violet-800 focus:ring-offset-2 focus:outline-none"
        role="button"
        tabIndex={0}
        aria-label="Wybierz mema do przesłania"
      >
        <UploadSimple />
        <label htmlFor="chooseFile" className="cursor-pointer">
          Wybierz mema
        </label>
      </div>
      <input
        type="file"
        id="chooseFile"
        className="hidden"
        onChange={handleFileChange}
      />
    </>
  );
}

export default MemeUploader;
