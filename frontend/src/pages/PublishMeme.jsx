import { UploadSimple } from "@phosphor-icons/react";
import Card from "../ui/Card";
import SectionUndelinedTitle from "../ui/SectionUndelinedTitle";
import Button from "../ui/Button";

function PublishMeme() {
  return (
    <form
      action="POST"
      className="m-auto mt-12 mb-20 px-6 min-[1100px]:max-w-[900px] md:w-10/12"
    >
      <SectionUndelinedTitle>Publikuj mema</SectionUndelinedTitle>
      <Card>
        <div className="mb-4 flex flex-col">
          <label className="pb-2 text-zinc-600">Opis</label>
          <textarea
            placeholder="Opis"
            className="h-32 rounded-lg bg-white p-2 text-base text-zinc-700 focus:ring-3 focus:ring-violet-800 focus:ring-offset-2 focus:outline-none"
          />
        </div>
        <button className="flex cursor-pointer items-center gap-2 border-b-1 border-violet-900 text-violet-900 hover:text-violet-950 focus:rounded-md focus:ring-3 focus:ring-violet-800 focus:ring-offset-2 focus:outline-none">
          <UploadSimple />
          <label htmlFor="chooseFile  " className="cursor-pointer">
            Wybierz mema
          </label>
          <input type="file" id="chooseFile" className="hidden" />
        </button>
        <div className="mt-8 text-center">
          <Button color="violet">Publikuj</Button>
        </div>
      </Card>
    </form>
  );
}

export default PublishMeme;
