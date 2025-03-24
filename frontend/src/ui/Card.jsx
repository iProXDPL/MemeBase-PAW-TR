function Card({ children }) {
  return (
    <div className="bg-zinc-100 sm:py-8 sm:px-10 py-4 px-6 rounded-xl">
      {children}
    </div>
  );
}

export default Card;
