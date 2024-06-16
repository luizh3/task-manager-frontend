import { useState } from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  const [isVisibleTaskModal, setIsVisibleTaskModal] = useState(false);

  function handleVisibleTaskModal() {
    setIsVisibleTaskModal(true);
  }

  return (
    <div className="flex flex-col space-y-20">
      <Navbar onCreate={handleVisibleTaskModal} />
      {/* // TODO change for useDispatch */}
      <Outlet context={[isVisibleTaskModal, setIsVisibleTaskModal]} />
    </div>
  );
}
