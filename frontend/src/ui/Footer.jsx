import { FacebookLogo, XLogo } from "@phosphor-icons/react";
import Logo from "./Logo";

function Footer() {
  return (
    <div className="bg-violet-800 text-zinc-100 py-4 sm:py-6 px-6 md:pt-8 md:pb-12 mt-8">
      <div className="sm:grid sm:grid-cols-4 md:max-w-11/12 m-auto">
        <div className="text-center">
          <Logo type="small" />
          <p className="text-xs md:text-sm text-zinc-100 pt-2">Zobacz także</p>
          <div className="flex py-2 space-x-2 justify-center text-xl">
            <a
              href="#"
              className="hover:text-zinc-400 transition-colors duration-300"
            >
              <XLogo />
            </a>
            <a
              href="#"
              className="hover:text-zinc-400 transition-colors duration-300"
            >
              <FacebookLogo />
            </a>
          </div>
        </div>
        <div className="text-xs md:text-sm text-center pt-6 sm:py-2">
          <ul className="lg:space-y-3 space-y-2">
            <li>
              <a
                className="hover:text-zinc-400 transition-colors duration-300"
                href="#"
              >
                Strona Główna
              </a>
            </li>
            <li>
              <a
                className="hover:text-zinc-400 transition-colors duration-300"
                href="#"
              >
                Losowy Mem
              </a>
            </li>
            <li>
              <a
                className="hover:text-zinc-400 transition-colors duration-300"
                href="#"
              >
                Rankingi
              </a>
            </li>
          </ul>
        </div>
        <div className="text-xs md:text-sm text-center pt-6 sm:py-2">
          <ul className="lg:space-y-3 space-y-2">
            <li>
              <a
                className="hover:text-zinc-400 transition-colors duration-300"
                href="#"
              >
                Konto
              </a>
            </li>
            <li>
              <a
                className="hover:text-zinc-400 transition-colors duration-300"
                href="#"
              >
                Publikuj Mema
              </a>
            </li>
            <li>
              <a
                className="hover:text-zinc-400 transition-colors duration-300"
                href="#"
              >
                Regulamin
              </a>
            </li>
          </ul>
        </div>
        <div className="text-xs md:text-sm text-center py-6 sm:py-2">
          <span className="cursor-pointer hover:text-zinc-400 transition-colors duration-300">
            Do Góry &uarr;
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
