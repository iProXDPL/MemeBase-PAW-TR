import { useContext, useState } from "react";
import MemeCard from "../features/memes/MemeCard";
import { MemeContext } from "../context/MemeContext";

const MEMES_PER_PAGE = 1;

function MainPage() {
  const { memes } = useContext(MemeContext);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(memes.length / MEMES_PER_PAGE);

  const startIdx = (currentPage - 1) * MEMES_PER_PAGE;
  const endIdx = startIdx + MEMES_PER_PAGE;
  const memesToShow = memes.slice(startIdx, endIdx);

  const handlePrev = () => setCurrentPage((p) => Math.max(1, p - 1));
  const handleNext = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  return (
    <div className="flex flex-col gap-6 px-6 py-8 sm:gap-12">
      {memes.length === 0 ? (
        "Brak postów"
      ) : (
        memesToShow.map((meme) => (
          <MemeCard
            key={meme._id}
            meme={meme}
            memeUrl={`http://localhost:5001/${meme.image}`}
            textMeme={meme.description}
          />
        ))
      )}

      {memes.length > MEMES_PER_PAGE && (
        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Poprzednia
          </button>
          <span>
            Strona {currentPage} z {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
          >
            Następna
          </button>
        </div>
      )}
    </div>
  );
}

export default MainPage;
