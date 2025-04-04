import BestMeme from "../features/ranking/BestMeme";
import BestUsers from "../features/ranking/BestUsers";
import WorstMeme from "../features/ranking/WorstMeme";

function Ranking() {
  return (
    <div className="m-auto mt-6 min-[1100px]:max-w-[900px] md:w-10/12">
      <BestUsers />
      <BestMeme />
      <WorstMeme />
    </div>
  );
}

export default Ranking;
