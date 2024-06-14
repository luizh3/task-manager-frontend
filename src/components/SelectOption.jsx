import IconCircle from "./iconCircle";
import { IoMdClose } from "react-icons/io";

export default function SelectOption({
  isEnableRemove,
  option,
  onRemove,
  onConfirm,
}) {
  return (
    <div
      onClick={() => {
        onConfirm(option);
      }}
      className="w-full h-12 hover:bg-gray-200 rounded content-center items-center p-2 flex justify-between"
    >
      <div className="flex space-x-1 items-center">
        <IconCircle url={option.url} />
        <label className="text-gray-600">{option.description}</label>
      </div>
      {isEnableRemove && (
        <IoMdClose
          onClick={() => {
            onRemove(option);
          }}
          fontSize={20}
          className="text-gray-600 cursor-pointer"
        />
      )}
    </div>
  );
}
