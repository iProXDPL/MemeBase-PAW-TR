import { Link } from "react-router";

function Button({ color = "green", to, onClick, children }) {
  //TODO: poprawić wylączanie nawigacji
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

  return (
    <button
      className={`inline-block ${color === "green" ? "hover:bg-lime-600" : "hover:bg-violet-900"} cursor-pointer rounded-lg ${color === "green" ? "bg-lime-500" : "bg-violet-800"} px-4 py-2 ${color !== "green" ? "text-zinc-100" : "text-zinc-800"} transition-all duration-300 focus:ring-3 ${color === "green" ? "focus:ring-lime-500" : "focus:ring-violet-800"} focus:ring-offset-2 focus:outline-none`}
    >
      {children}
    </button>
  );
}

export default Button;
