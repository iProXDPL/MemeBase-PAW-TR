function RankingTitle({ isOrange = false, children }) {
  return (
    <div
      className={`mb-5 flex items-center justify-between border-b-2 md:mb-8 ${isOrange ? "border-b-orange-500" : "border-b-lime-500"} pb-1 text-xl lg:text-2xl`}
    >
      {children}
    </div>
  );
}

export default RankingTitle;
