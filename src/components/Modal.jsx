import { IoMdClose } from "react-icons/io";

export default function Modal({ title, children, width, onClose }) {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-black/20 absolute">
      <div
        className={`bg-white min-h-96 h-fit ${
          width ?? "w-1/3"
        } rounded p-6 space-y-8`}
      >
        <header className="flex justify-between">
          <label className="font-medium text-xl">{title}</label>
          <IoMdClose
            fontSize={25}
            onClick={onClose}
            className="cursor-pointer"
          />
        </header>
        {children}
      </div>
    </div>
  );
}
