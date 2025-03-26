import { Trash } from "@phosphor-icons/react";
import memeUrl1 from "../../images/Meme.png";
import RankingTitle from "./RankingTitle";
import MemeCard from "../memes/MemeCard";
import RankingWrapper from "./RankingWrapper";

function WorstMeme() {
  return (
    <RankingWrapper>
      <RankingTitle isOrange="true">
        <h3>Najgorszy mem</h3>
        <Trash />
      </RankingTitle>
      <MemeCard
        memeUrl={memeUrl1}
        textMeme="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </RankingWrapper>
  );
}

export default WorstMeme;
