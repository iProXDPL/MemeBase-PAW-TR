import { List, User, X } from "@phosphor-icons/react";
import Button from "./Button";
import Logo from "./Logo";

function Header() {
  return (
    <div className="bg-violet-800 text-zinc-100 flex items-center justify-between py-4 px-6">
      <Logo />
      <ul className="flex items-center gap-8 ">
        <li className="hidden md:block text-xl hover:text-zinc-400 transition-colors duration-300">
          <a href="#">Strona Główna</a>
        </li>
        <li className="hidden md:block text-xl hover:text-zinc-400 transition-colors duration-300">
          <a href="#">Losowy Mem</a>
        </li>
        <li className="hidden md:block text-xl hover:text-zinc-400 transition-colors duration-300">
          <a href="#">Rankingi</a>
        </li>
        <li className="hidden md:block text-xl">
          <Button color="green">Logowanie</Button>
        </li>
        <li className="hidden">
          <User
            tabIndex="0"
            role="button"
            aria-label="Panel użytkownika"
            size={32}
          />
        </li>
        <li
          className="md:hidden cursor-pointer"
          tabIndex="0"
          role="button"
          aria-label="Otwórz menu"
        >
          <List size={32} />
        </li>
        <li className="hidden" role="button" aria-label="Zamknij menu">
          <X size={32} />
        </li>
      </ul>
    </div>
  );
}

export default Header;
