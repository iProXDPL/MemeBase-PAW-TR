function RankingTableUser({ place, username, memeCount, likesCount, points }) {
  return (
    <div
      className={`flex min-w-fit items-center justify-between gap-4 ${place % 2 === 0 ? "bg-white" : "bg-zinc-100"} py-2 text-sm text-zinc-700`}
    >
      <div className="w-12 text-center">{place}</div>
      <div className="w-44 text-center">{username}</div>
      <div className="w-44 text-center">{memeCount}</div>
      <div className="w-44 text-center">{likesCount}</div>
      <div className="w-44 text-center">{points} pkt</div>
    </div>
  );
}

export default RankingTableUser;
