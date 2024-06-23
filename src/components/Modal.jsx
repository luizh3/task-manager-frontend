import { IoMdClose } from "react-icons/io";

export default function Modal({ title, children, width, onClose }) {
  return (
    <div className="flex justify-center items-center w-full h-full overfllow-hidden bg-black/20 fixed inset-0 z-10">
      <div
        className={`bg-white min-h-96 h-fit ${
          width ?? "w-1/3"
        } rounded p-6 space-y-8`}
      >
        <header className="flex justify-between">
          <label className="font-medium text-3xl text-gray-600">{title}</label>
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
