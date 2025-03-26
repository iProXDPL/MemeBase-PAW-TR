function Button({ color = "green", children }) {
  return (
    <button
      className={`inline-block ${color === "green" ? "hover:bg-lime-600" : "hover:bg-violet-900"} cursor-pointer rounded-lg ${color === "green" ? "bg-lime-500" : "bg-violet-800"} px-4 py-2 ${color !== "green" ? "text-zinc-100" : "text-zinc-800"} transition-all duration-300`}
    >
      {children}
    </button>
  );
}

export default Button;
