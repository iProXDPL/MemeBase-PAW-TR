import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

function MemePageNavigation() {
  return (
    <div className="flex items-center justify-between">
      <button>
        <ArrowLeft />
      </button>
      <div className="flex items-center justify-center">
        <input type="number" min="1" className="bg-zinc-400 p-4" />
        <span> / 7</span>
      </div>
      <button>
        <ArrowRight />
      </button>
    </div>
  );
}

export default MemePageNavigation;
