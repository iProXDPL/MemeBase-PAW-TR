function RankingTableHeader() {
  return (
    <div className="flex min-w-fit flex-row justify-between gap-1 pb-2 text-xs font-semibold text-nowrap text-zinc-700 lg:text-base">
      <div className="w-10 text-center lg:w-12">#</div>
      <div className="w-32 text-center lg:w-44">Nazwa Użytkownika</div>
      <div className="w-32 text-center lg:w-44">Liczba Memów</div>
      <div className="w-32 text-center lg:w-44">Liczba Polubień</div>
      <div className="w-32 text-center lg:w-44">Punkty</div>
    </div>
  );
}

export default RankingTableHeader;
