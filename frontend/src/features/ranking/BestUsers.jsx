import RankingTable from "./RankingTable";
import RankingTitle from "./RankingTitle";
import { Ranking } from "@phosphor-icons/react";

function BestUsers() {
  return (
    <div className="px-6 py-4 text-zinc-800">
      <RankingTitle>
        <h2>Ściana Sławy</h2>
        <Ranking />
      </RankingTitle>
      <RankingTable />
    </div>
  );
}

export default BestUsers;
