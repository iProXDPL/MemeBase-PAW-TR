import Card from "../../ui/Card";
import RankingTableHeader from "./RankingTableHeader";
import RankingTableUser from "./RankingTableUser";

function RankingTable() {
  return (
    <Card>
      <div className="divide-y-[1px] divide-zinc-200 overflow-x-auto py-2">
        <RankingTableHeader />
        <RankingTableUser
          place="1."
          username="RandomUser1"
          memeCount="34"
          likesCount="218"
          points="1240"
        />
        <RankingTableUser
          place="2."
          username="RandomUser1"
          memeCount="34"
          likesCount="218"
          points="1240"
        />
        <RankingTableUser
          place="3."
          username="RandomUser1"
          memeCount="34"
          likesCount="218"
          points="1240"
        />
        <RankingTableUser
          place="4."
          username="RandomUser1"
          memeCount="34"
          likesCount="218"
          points="1240"
        />
        <RankingTableUser
          place="5."
          username="RandomUser1"
          memeCount="34"
          likesCount="218"
          points="1240"
        />
      </div>
    </Card>
  );
}

export default RankingTable;
