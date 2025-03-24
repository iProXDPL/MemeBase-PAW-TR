import { FacebookLogo, XLogo } from "@phosphor-icons/react";

function MemeShare() {
  return (
    <div className="flex items-center sm:gap-2 gap-2 min-[480px]:text-xl">
      <button>
        <XLogo />
      </button>
      <button>
        <FacebookLogo />
      </button>
    </div>
  );
}

export default MemeShare;
