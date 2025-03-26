import RankingTable from "./RankingTable";
import { Ranking } from "@phosphor-icons/react";
import RankingWrapper from "./RankingWrapper";
import SectionUndelinedTitle from "../../ui/SectionUndelinedTitle";

function BestUsers() {
  return (
    <RankingWrapper>
      <SectionUndelinedTitle>
        <h3>Ściana Sławy</h3>
        <Ranking />
      </SectionUndelinedTitle>
      <RankingTable />
    </RankingWrapper>
  );
}

export default BestUsers;
