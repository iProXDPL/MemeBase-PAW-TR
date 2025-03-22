import { User } from "@phosphor-icons/react";
import Button from "./Button";

function HeaderNavList({ isMobileNavOpen }) {
  return (
    <ul
      className={`absolute top-0 right-0 flex h-dvh w-dvw flex-col items-center justify-center gap-8 space-y-7 bg-violet-800 text-center text-2xl duration-300 md:static md:top-auto md:h-auto md:w-auto md:translate-none md:flex-row md:space-y-0 md:bg-transparent md:text-xl ${
        !isMobileNavOpen ? "translate-x-full" : ""
      } `}
    >
      <li className="transition-colors duration-300 hover:text-zinc-400 md:block">
        <a href="#">Strona Główna</a>
      </li>
      <li className="transition-colors duration-300 hover:text-zinc-400 md:block">
        <a href="#">Losowy Mem</a>
      </li>
      <li className="transition-colors duration-300 hover:text-zinc-400 md:block">
        <a href="#">Rankingi</a>
      </li>
      <li className="md:block">
        <Button color="green">Logowanie</Button>

        {/* Dla zalogowanego użytkownika ⬇️*/}
        {/* <User tabIndex="0" role="button" aria-label="Panel użytkownika" /> */}
      </li>
    </ul>
  );
}

export default HeaderNavList;
