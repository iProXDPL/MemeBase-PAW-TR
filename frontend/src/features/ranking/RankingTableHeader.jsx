function RankingTableHeader() {
  return (
    <div className="flex min-w-fit flex-row justify-between gap-4 pb-2 text-sm font-semibold text-nowrap text-zinc-700">
      <div className="w-12 text-center">#</div>
      <div className="w-44 text-center">Nazwa Użytkownika</div>
      <div className="w-44 text-center">Liczba Memów</div>
      <div className="w-44 text-center">Liczba Polubień</div>
      <div className="w-44 text-center">Punkty</div>
    </div>
  );
}

export default RankingTableHeader;
