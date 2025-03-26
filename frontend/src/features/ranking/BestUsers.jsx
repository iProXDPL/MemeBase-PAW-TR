import RankingTable from "./RankingTable";
import RankingTitle from "./RankingTitle";
import { Ranking } from "@phosphor-icons/react";
import RankingWrapper from "./RankingWrapper";

function BestUsers() {
  return (
    <RankingWrapper>
      <RankingTitle>
        <h3>Ściana Sławy</h3>
        <Ranking />
      </RankingTitle>
      <RankingTable />
    </RankingWrapper>
  );
}

export default BestUsers;
