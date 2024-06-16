import { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [isVisibleTaskModal, setIsVisibleTaskModal] = useState(false);

  function handleVisibleTaskModal() {
    setIsVisibleTaskModal(true);
  }

  return (
    <div className="flex flex-col w-screen h-screen">
      <Navbar onCreate={handleVisibleTaskModal} />
      {/* // TODO change for useDispatch */}
      <div className="mt-20">
        <Outlet context={[isVisibleTaskModal, setIsVisibleTaskModal]} />
      </div>
    </div>
  );
}
