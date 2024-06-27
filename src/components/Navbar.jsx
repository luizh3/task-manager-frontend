import { FcNightLandscape } from "react-icons/fc";
import Button from "./Button";
import { Link } from "react-router-dom";
import { PiUserListFill } from "react-icons/pi";
import { MdExitToApp } from "react-icons/md";

export default function Navbar({ onCreate }) {
  return (
    <div className="bg-white w-screen h-20 mb-5	shadow-md border-b border-gray-300 flex items-center p-6 space-x-12 justify-center fixed">
      <Link to="/" className="flex items-center space-x-3">
        <FcNightLandscape
          style={{
            fontSize: 35,
          }}
        />
        <label className="font-medium text-gray-600 cursor-pointer">
          Task Manager
        </label>
      </Link>

      <div className="flex gap-3">
        <Button to styleType="primary" width="w-32" onClick={onCreate}>
          Criar
        </Button>
        <Link
          to="/users"
          className="font-bold text-gray-600 font-medium hover:bg-violet-300 hover:text-white py-2 px-4 h-11 rounded flex items-center gap-2 group"
        >
          <PiUserListFill
            style={{ fontSize: 20 }}
            className="text-violet-500 group-hover:text-white"
          />
          Usuarios
        </Link>
        <Link
          to="/login"
          className="font-bold text-gray-600 font-medium hover:bg-violet-300 hover:text-white py-2 px-4 h-11 rounded flex items-center gap-2 group"
        >
          <MdExitToApp
            style={{ fontSize: 20 }}
            className="text-violet-500 group-hover:text-white"
          />
          Sair
        </Link>
      </div>
    </div>
  );
}
