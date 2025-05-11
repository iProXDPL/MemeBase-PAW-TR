import { Link } from "react-router";

function Button({
  color = "green",
  to,
  onClick,
  type = "primary",
  onClickPrimary,
  onClickSecondary,
  children,
}) {
  if (to)
    return (
      <Link
        to={to}
        onClick={() => onClick(false)}
        className={`inline-block ${color === "green" ? "hover:bg-lime-600" : "hover:bg-violet-900"} cursor-pointer rounded-lg ${color === "green" ? "bg-lime-500" : "bg-violet-800"} px-4 py-2 ${color !== "green" ? "text-zinc-100" : "text-zinc-800"} transition-all duration-300 focus:ring-3 ${color === "green" ? "focus:ring-lime-500" : "focus:ring-violet-800"} focus:ring-offset-2 focus:outline-none`}
      >
        {children}
      </Link>
    );

  if (type === "primary")
    return (
      <button
        onClick={onClickPrimary}
        className={`inline-block ${color === "green" ? "hover:bg-lime-600" : "hover:bg-violet-900"} cursor-pointer rounded-lg ${color === "green" ? "bg-lime-500" : "bg-violet-800"} px-4 py-2 ${color !== "green" ? "text-zinc-100" : "text-zinc-800"} transition-all duration-300 focus:ring-3 ${color === "green" ? "focus:ring-lime-500" : "focus:ring-violet-800"} focus:ring-offset-2 focus:outline-none`}
      >
        {children}
      </button>
    );

  return (
    <button
      onClick={onClickSecondary}
      className={`hover inline-block cursor-pointer rounded-lg border-2 border-zinc-400 bg-zinc-100 px-3.5 py-1.5 text-zinc-500 transition-all duration-300 hover:bg-zinc-200 focus:ring-3 focus:ring-zinc-400 focus:ring-offset-2 focus:outline-none`}
    >
      {children}
    </button>
  );
}

export default Button;
