function Card({ children }) {
  return (
    <div className="rounded-xl bg-zinc-100 px-6 py-4 sm:px-10 sm:py-8">
      {children}
    </div>
  );
}

export default Card;
