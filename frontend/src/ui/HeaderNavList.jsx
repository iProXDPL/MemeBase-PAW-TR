import { SignOut, User } from "@phosphor-icons/react";
import Button from "./Button";
import { NavLink } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

function HeaderNavList({ isMobileNavOpen, onClick }) {
  const { token: isUser, isLoading, logout, user } = useContext(AuthContext);

  return (
    <ul
      className={`fixed top-0 right-0 flex h-dvh w-dvw flex-col items-center justify-center gap-8 space-y-7 bg-violet-900 text-center text-2xl duration-300 min-[890px]:static min-[890px]:top-auto min-[890px]:h-auto min-[890px]:w-auto min-[890px]:translate-none min-[890px]:flex-row min-[890px]:space-y-0 min-[890px]:bg-transparent min-[890px]:text-xl ${
        !isMobileNavOpen ? "translate-x-full" : ""
      }`}
    >
      <li className="transition-colors duration-300 hover:text-zinc-400 min-[890px]:block">
        <NavLink to="/" onClick={() => onClick(false)}>
          Strona Główna
        </NavLink>
      </li>
      <li className="transition-colors duration-300 hover:text-zinc-400 min-[890px]:block">
        <NavLink to="/losowymem" onClick={() => onClick(false)}>
          Losowy
        </NavLink>
      </li>
      <li className="transition-colors duration-300 hover:text-zinc-400 min-[890px]:block">
        <NavLink to="/ranking" onClick={() => onClick(false)}>
          Rankingi
        </NavLink>
      </li>
      <li className="transition-colors duration-300 hover:text-zinc-400 min-[890px]:block">
        <NavLink to="/publikuj" onClick={() => onClick(false)}>
          Publikuj
        </NavLink>
      </li>
      <li className="min-[890px]:block">
        {!isUser || isLoading ? (
          <Button to="logowanie" onClick={onClick}>
            Logowanie
          </Button>
        ) : (
          <div className="flex gap-4">
            {user.username}
            <User className="cursor-pointer duration-300 hover:text-zinc-400" />
            <SignOut
              className="cursor-pointer duration-300 hover:text-zinc-400"
              onClick={logout}
            />
          </div>
        )}
      </li>
    </ul>
  );
}

export default HeaderNavList;
