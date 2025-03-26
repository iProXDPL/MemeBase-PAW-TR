import { Trophy } from "@phosphor-icons/react";
import RankingTitle from "./RankingTitle";
import RankingWrapper from "./RankingWrapper";
import MemeCard from "../memes/MemeCard";
import memeUrl1 from "../../images/Meme.png";

function BestMeme() {
  return (
    <RankingWrapper>
      <RankingTitle>
        <h3>Najlepszy mem</h3>
        <Trophy />
      </RankingTitle>
      <MemeCard
        memeUrl={memeUrl1}
        textMeme="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </RankingWrapper>
  );
}

export default BestMeme;
