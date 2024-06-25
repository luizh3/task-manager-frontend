import { useUsers } from "../api/hooks/useUsers";
import Spinner from "../components/Spinner";
import { Toaster, toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import TableUsers from "./users/TableUsers";

export default function Users() {
  let location = useLocation();
  let navigate = useNavigate();

  const { data, isLoading, dsError } = useUsers();

  useEffect(() => {
    // TODO change this
    if (location.state?.toast) {
      toast.success(location.state.toast.message);
      setTimeout(
        () => navigate(location.pathname, { replace: true, state: null }),
        location.state.toast.duration
      );
    }
  }, [location, navigate]);

  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={false}
        toastOptions={{
          className: "shadow-md",
          style: {
            padding: "16px",
          },
        }}
        containerStyle={{
          top: 100,
        }}
      />
      <div className="w-screen h-screen bg-gray-200 flex justify-center">
        {isLoading && (
          <div className="flex w-screen h-screen items-center justify-center">
            <Spinner />
          </div>
        )}
        {!isLoading && (
          <TableUsers users={data} navigate={navigate}></TableUsers>
        )}
      </div>
    </>
  );
}
