import { X } from "@phosphor-icons/react";
import Card from "./Card";

function Modal({ title, description, onClose, children }) {
  return (
    <div className="fixed inset-0 z-20 flex h-dvh items-center justify-center bg-zinc-800/30 backdrop-blur-sm">
      <div className="max-w-3/4 md:max-w-1/2">
        <Card>
          <X
            className="absolute top-4 right-4 cursor-pointer text-2xl text-zinc-400 transition-all duration-300 hover:text-zinc-600"
            onClick={onClose}
          />
          <h3 className="text-center text-2xl text-zinc-800">{title}</h3>
          <p className="mt-2 text-center text-base/relaxed text-zinc-700">
            {description}
          </p>
          <div className="mt-6 flex justify-center gap-4">{children}</div>
        </Card>
      </div>
    </div>
  );
}

export default Modal;
