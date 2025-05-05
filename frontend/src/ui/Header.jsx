import { List, X } from "@phosphor-icons/react";
import Logo from "./Logo";
import HeaderNavList from "./HeaderNavList";
import { useState, useEffect } from "react";

function Header() {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [user, setUser] = useState("");

  useEffect(function () {
    async function user() {
      try {
        const token = localStorage.getItem("token");

        const response = await fetch("http://localhost:5001/api/auth/user", {
          method: "GET",
          headers: { token: token },
        });

        const data = await response.json();

        setUser(data.user);
      } catch (err) {
        console.log(err.message);
      }
    }

    user();
  }, []);

  return (
    <div className="relative flex items-center justify-between bg-violet-800 px-6 py-4 text-zinc-100 min-[890px]:gap-2">
      <Logo />
      <HeaderNavList
        isMobileNavOpen={isMobileNavOpen}
        onClick={setIsMobileNavOpen}
        user={user}
      />
      <div className="flex gap-3 text-3xl min-[890px]:hidden">
        <div
          className={`${isMobileNavOpen ? "hidden" : ""} z-10 cursor-pointer`}
          tabIndex="0"
          role="button"
          aria-label="Otwórz menu"
          onClick={() => setIsMobileNavOpen(true)}
        >
          <List />
        </div>
        <div
          className={`${!isMobileNavOpen ? "hidden" : ""} fixed top-5 right-5 z-10 cursor-pointer`}
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
