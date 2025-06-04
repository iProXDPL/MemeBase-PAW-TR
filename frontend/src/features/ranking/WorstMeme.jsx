import { Trash } from "@phosphor-icons/react";
import MemeCard from "../memes/MemeCard";
import RankingWrapper from "./RankingWrapper";
import SectionUndelinedTitle from "../../ui/SectionUndelinedTitle";
import { useContext, useEffect } from "react";
import { RankingContext } from "../../context/RankingContext";

function WorstMeme() {
  const { loadWorstMeme, worstMeme } = useContext(RankingContext);

  useEffect(
    function () {
      loadWorstMeme();
    },
    [loadWorstMeme],
  );

  if (!Object.entries(worstMeme).length) return;

  return (
    <RankingWrapper>
      <SectionUndelinedTitle isOrange="true">
        <h3>Najgorszy mem</h3>
        <Trash />
      </SectionUndelinedTitle>
      <MemeCard
        meme={worstMeme}
        textMeme={worstMeme.description}
        memeUrl={worstMeme.image}
        onInteraction={loadWorstMeme}
      />
    </RankingWrapper>
  );
}

export default WorstMeme;
