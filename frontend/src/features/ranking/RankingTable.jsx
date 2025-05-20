import { useContext, useEffect } from "react";
import Card from "../../ui/Card";
import RankingTableHeader from "./RankingTableHeader";
import RankingTableUser from "./RankingTableUser";
import { RankingContext } from "../../context/RankingContext";

function RankingTable() {
  const { loadBestUsers, users } = useContext(RankingContext);

  useEffect(
    function () {
      loadBestUsers();
    },
    [loadBestUsers],
  );

  console.log(users);
  const { users: usersList } = users;
  if (!usersList) return;

  return (
    <Card>
      <div className="divide-y-[1px] divide-zinc-200 overflow-x-auto py-2">
        <RankingTableHeader />
        {usersList.map((user, i) => (
          <RankingTableUser
            place={`${i + 1}.`}
            key={user._id}
            username={user.username}
            memeCount={user.totalPosts}
            likesCount={user.totalLikes}
            dislikesCount={user.totalDislikes}
          />
        ))}
      </div>
    </Card>
  );
}

export default RankingTable;
