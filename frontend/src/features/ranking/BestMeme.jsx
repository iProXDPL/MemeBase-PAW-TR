import { Trophy } from "@phosphor-icons/react";
import RankingWrapper from "./RankingWrapper";
import MemeCard from "../memes/MemeCard";
import SectionUndelinedTitle from "../../ui/SectionUndelinedTitle";
import { useContext, useEffect } from "react";
import { RankingContext } from "../../context/RankingContext";

function BestMeme() {
  const { bestMeme, loadBestMeme } = useContext(RankingContext);

  useEffect(
    function () {
      loadBestMeme();
    },
    [loadBestMeme],
  );

  if (!Object.entries(bestMeme).length) {
    return;
  }

  return (
    <RankingWrapper>
      <SectionUndelinedTitle>
        <h3>Najlepszy mem</h3>
        <Trophy />
      </SectionUndelinedTitle>
      <MemeCard
        meme={bestMeme}
        textMeme="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        memeUrl={`http://localhost:5001/${bestMeme.image}`}
      />
    </RankingWrapper>
  );
}

export default BestMeme;
