import { NavLink } from "react-router";

function Logo({ type = "big" }) {
  const big = type === "big" ? "md:text-3xl text-2xl" : "md:text-2xl text-xl";

  return (
    <p className={`${big} font-semibold`}>
      <NavLink to="/">
        Meme<span className="text-lime-500">Base</span>
      </NavLink>
    </p>
  );
}

export default Logo;
