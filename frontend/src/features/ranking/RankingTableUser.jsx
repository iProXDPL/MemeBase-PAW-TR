function RankingTableUser({ place, username, memeCount, likesCount, points }) {
  return (
    <div
      className={`flex min-w-fit items-center justify-between gap-1 ${place % 2 === 0 ? "bg-white" : "bg-zinc-100"} py-2 text-xs text-zinc-700 lg:text-base`}
    >
      <div className="w-10 text-center lg:w-12">{place}</div>
      <div className="w-32 text-center lg:w-44">{username}</div>
      <div className="w-32 text-center lg:w-44">{memeCount}</div>
      <div className="w-32 text-center lg:w-44">{likesCount}</div>
      <div className="w-32 text-center lg:w-44">{points} pkt</div>
    </div>
  );
}

export default RankingTableUser;
