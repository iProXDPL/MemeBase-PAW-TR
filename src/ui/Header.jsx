import { List, User, X } from "@phosphor-icons/react";

function Header() {
  return (
    <div className="bg-violet-800 text-zinc-100 flex justify-between py-4 px-6">
      <p className="md:text-3xl text-2xl font-semibold">
        <a href="#">
          Meme<span className="text-lime-500">Base</span>
        </a>
      </p>
      <ul className="flex items-center gap-8">
        <li className="hidden md:block text-xl">
          <a href="#">Strona Główna</a>
        </li>
        <li className="hidden md:block text-xl">
          <a href="#">Losowy Mem</a>
        </li>
        <li className="hidden md:block text-xl">
          <a href="#">Rankingi</a>
        </li>
        <li className="hidden md:block text-xl">
          <a href="#">Logowanie</a>
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
