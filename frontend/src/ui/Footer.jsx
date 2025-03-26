import { FacebookLogo, XLogo } from "@phosphor-icons/react";
import Logo from "./Logo";

function Footer() {
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
              <a
                className="transition-colors duration-300 hover:text-zinc-400"
                href="#"
              >
                Strona Główna
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-300 hover:text-zinc-400"
                href="#"
              >
                Losowy Mem
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-300 hover:text-zinc-400"
                href="#"
              >
                Rankingi
              </a>
            </li>
          </ul>
        </div>
        <div className="pt-6 text-center text-xs sm:py-2 md:text-sm">
          <ul className="space-y-2 lg:space-y-3">
            <li>
              <a
                className="transition-colors duration-300 hover:text-zinc-400"
                href="#"
              >
                Konto
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-300 hover:text-zinc-400"
                href="#"
              >
                Publikuj Mema
              </a>
            </li>
            <li>
              <a
                className="transition-colors duration-300 hover:text-zinc-400"
                href="#"
              >
                Regulamin
              </a>
            </li>
          </ul>
        </div>
        <div className="py-6 text-center text-xs sm:py-2 md:text-sm">
          <span className="cursor-pointer transition-colors duration-300 hover:text-zinc-400">
            Do Góry &uarr;
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
