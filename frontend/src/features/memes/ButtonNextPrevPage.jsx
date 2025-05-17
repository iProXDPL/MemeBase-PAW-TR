import { useSearchParams } from "react-router";
import { ArrowRight, ArrowLeft } from "@phosphor-icons/react";

function ButtonNextPrevPage({ to = "next" }) {
  const [searchParams, setSearchParams] = useSearchParams();

  function handleClick(e) {
    e.preventDefault();
    const currentPageNum = Number(searchParams.get("pageNum")) || 1;
    let newPageNum = to === "next" ? currentPageNum + 1 : currentPageNum - 1;

    if (newPageNum < 1) newPageNum = 1;

    setSearchParams({ pageNum: newPageNum });
  }

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer rounded-lg bg-violet-800 px-5 text-lg text-zinc-100 transition-colors duration-300 hover:bg-violet-900 sm:px-7 sm:text-2xl"
    >
      {to === "prev" ? <ArrowLeft /> : <ArrowRight />}
    </button>
  );
}

export default ButtonNextPrevPage;
