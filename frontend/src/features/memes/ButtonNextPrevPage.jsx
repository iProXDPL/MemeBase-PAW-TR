import { ArrowRight, ArrowLeft } from "@phosphor-icons/react";

function ButtonNextPrevPage({ to = "next" }) {
  return (
    <button className="cursor-pointer rounded-lg bg-violet-800 px-5 text-lg text-zinc-100 transition-colors duration-300 hover:bg-violet-900 sm:px-7 sm:text-2xl">
      {to === "prev" ? <ArrowLeft /> : <ArrowRight />}
    </button>
  );
}

export default ButtonNextPrevPage;
