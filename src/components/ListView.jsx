import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import Input from "./Input";
import { IoMdClose } from "react-icons/io";
import Button from "./Button";

export default function ListView({ onConfirmItem, initialItems, title }) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState("");

  const handleIsEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="bg-gray-200 border border-gray-100 h-fit w-full rounded p-2 space-y-4">
      <header>
        <label className="font-medium text-gray-600">{title}</label>
      </header>
      {initialItems.length > 0 && (
        <div className="flex flex-col space-y-2 max-h-32 overflow-auto">
          {initialItems?.map((item, index) => (
            <div
              key={index}
              className="flex justify-between w-full h-8 bg-white rounded flex justify-center align-center items-center space-x-1 font-medium shadow-md text-gray-600 p-4"
            >
              <label className="">{item.description}</label>
              <IoMdClose
                className="text-red-500 cursor-pointer"
                fontSize={20}
              />
            </div>
          ))}
        </div>
      )}
      {!isEditing && (
        <Button
          onClick={handleIsEditing}
          styleType="secundary"
          icon={<IoMdAdd className="text-gray-700" />}
          width="w-full"
        >
          Add
        </Button>
      )}
      {isEditing && (
        <Input
          placeHolder={"Descrição artefato"}
          onChange={(event) => {
            setText(event.target.value);
          }}
          onFocus={() => {
            setIsEditing(true);
          }}
          onBlur={() => {
            setIsEditing(false);
          }}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              onConfirmItem(text);
              setIsEditing(false);
            }
          }}
          autoFocus
        />
      )}
    </div>
  );
}
