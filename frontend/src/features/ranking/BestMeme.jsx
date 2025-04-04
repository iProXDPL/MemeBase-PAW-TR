import { Trophy } from "@phosphor-icons/react";
import RankingWrapper from "./RankingWrapper";
import MemeCard from "../memes/MemeCard";
import memeUrl1 from "../../images/Meme.png";
import SectionUndelinedTitle from "../../ui/SectionUndelinedTitle";

function BestMeme() {
  return (
    <RankingWrapper>
      <SectionUndelinedTitle>
        <h3>Najlepszy mem</h3>
        <Trophy />
      </SectionUndelinedTitle>
      <MemeCard
        memeUrl={memeUrl1}
        textMeme="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </RankingWrapper>
  );
}

export default BestMeme;
