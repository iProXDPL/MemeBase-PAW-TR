import ButtonNextPrevPage from "./ButtonNextPrevPage";

function MemePageNavigation() {
  return (
    <div className="mt-4 flex justify-between text-xs text-zinc-800 sm:mx-auto sm:mt-6 sm:w-10/12 sm:text-xl md:max-w-[500px]">
      <ButtonNextPrevPage to="prev" />
      <div className="flex items-center justify-center gap-2 sm:gap-4">
        <input
          type="number"
          min="1"
          value="2"
          placeholder="1"
          className="w-8 [appearance:textfield] rounded-lg border-1 border-violet-800 px-1 py-2 text-center sm:w-12 sm:py-3 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
        />
        <span>/</span>
        <span>7</span>
      </div>
      <ButtonNextPrevPage to="next" />
    </div>
  );
}

export default MemePageNavigation;
