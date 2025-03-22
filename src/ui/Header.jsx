import { List, X } from "@phosphor-icons/react";
import Logo from "./Logo";
import HeaderNavList from "./HeaderNavList";
import { useState } from "react";

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  return (
    <div className="relative flex items-center justify-between bg-violet-800 px-6 py-4 text-zinc-100 md:gap-2">
      <Logo />
      <HeaderNavList isMobileNavOpen={isMobileNavOpen} />
      <div className="flex gap-3 text-3xl md:hidden">
        <div
          className={`${
            isMobileNavOpen ? "hidden" : ""
          } z-10 cursor-pointer md:hidden`}
          tabIndex="0"
          role="button"
          aria-label="Otwórz menu"
          onClick={() => setIsMobileNavOpen(true)}
        >
          <List />
        </div>
        <div
          className={`${!isMobileNavOpen ? "hidden" : ""} z-10 cursor-pointer`}
          role="button"
          aria-label="Zamknij menu"
          onClick={() => setIsMobileNavOpen(false)}
        >
          <X />
        </div>
      </div>
    </div>
  );
}

export default Header;
