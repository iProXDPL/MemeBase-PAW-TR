import { FacebookLogo, XLogo } from "@phosphor-icons/react";
import Logo from "./Logo";
import { Link } from "react-router";

function Footer() {
  function scrollTop() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <div className="bg-violet-800 px-6 py-4 text-zinc-100 sm:py-6 md:pt-8 md:pb-12">
      <div className="m-auto sm:grid sm:grid-cols-4 md:max-w-11/12">
        <div className="text-center">
          <Logo type="small" />
          <p className="pt-2 text-xs text-zinc-100 md:text-sm">Zobacz także</p>
          <div className="flex justify-center space-x-2 py-2 text-xl">
            <a
              href="#"
              className="transition-colors duration-300 hover:text-zinc-400"
            >
              <XLogo />
            </a>
            <a
              href="#"
              className="transition-colors duration-300 hover:text-zinc-400"
            >
              <FacebookLogo />
            </a>
          </div>
        </div>
        <div className="pt-6 text-center text-xs sm:py-2 md:text-sm">
          <ul className="space-y-2 lg:space-y-3">
            <li>
              <Link
                className="transition-colors duration-300 hover:text-zinc-400"
                to="/"
              >
                Strona Główna
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors duration-300 hover:text-zinc-400"
                to="losowymem"
              >
                Losowy Mem
              </Link>
            </li>
            <li>
              <Link
                className="transition-colors duration-300 hover:text-zinc-400"
                to="ranking"
              >
                Rankingi
              </Link>
            </li>
          </ul>
        </div>
        <div className="pt-6 text-center text-xs sm:py-2 md:text-sm">
          <ul className="space-y-2 lg:space-y-3">
            <li>
              <Link
                className="transition-colors duration-300 hover:text-zinc-400"
                to="publikuj"
              >
                Publikuj Mema
              </Link>
            </li>
          </ul>
        </div>
        <div className="py-6 text-center text-xs sm:py-2 md:text-sm">
          <span
            className="cursor-pointer transition-colors duration-300 hover:text-zinc-400"
            onClick={scrollTop}
          >
            Do Góry &uarr;
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
