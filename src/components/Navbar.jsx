import { FcNightLandscape } from "react-icons/fc";
import Button from "./Button";
import { Link } from "react-router-dom";

export default function Navbar({ onCreate }) {
  return (
    <div className="bg-white w-screen h-20 mb-5	shadow-md border-b border-gray-300 flex items-center p-6 space-x-12 justify-center fixed">
      <Link to="/" className="flex items-center space-x-3">
        <FcNightLandscape
          style={{
            fontSize: 35,
          }}
        />
        <label className="font-medium text-gray-600 cursor-pointer">Task Manager</label>
      </Link>
      <Button styleType="primary" width="w-32" onClick={onCreate}>
        Criar
      </Button>
    </div>
  );
}
