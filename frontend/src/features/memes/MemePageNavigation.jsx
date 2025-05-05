import { useSearchParams } from "react-router";
import ButtonNextPrevPage from "./ButtonNextPrevPage";

function MemePageNavigation() {
  const [searchParams] = useSearchParams();

  return (
    <form className="mt-4 flex justify-between text-xs text-zinc-800 sm:mx-auto sm:mt-6 sm:w-10/12 sm:text-xl md:max-w-[500px]">
      <ButtonNextPrevPage to="prev" />
      <div className="flex items-center justify-center gap-2 py-3.5 sm:gap-4">
        <span>{searchParams.get("pageNum")}</span>
        <span>/</span>
        <span>7</span>
      </div>
      <ButtonNextPrevPage to="next" />
      <button type="submit" className="hidden" aria-hidden="true" />
    </form>
  );
}

export default MemePageNavigation;
