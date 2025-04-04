import { Trash } from "@phosphor-icons/react";
import memeUrl1 from "../../images/Meme.png";
import MemeCard from "../memes/MemeCard";
import RankingWrapper from "./RankingWrapper";
import SectionUndelinedTitle from "../../ui/SectionUndelinedTitle";

function WorstMeme() {
  return (
    <RankingWrapper>
      <SectionUndelinedTitle isOrange="true">
        <h3>Najgorszy mem</h3>
        <Trash />
      </SectionUndelinedTitle>
      <MemeCard
        memeUrl={memeUrl1}
        textMeme="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
      />
    </RankingWrapper>
  );
}

export default WorstMeme;
