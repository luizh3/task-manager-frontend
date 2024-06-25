import {
  BrowserRouter,
  Outlet,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Board from "./pages/Board";
import Layout from "./pages/Layout";
import Users from "./pages/Users";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";

import { AuthProvider, Context } from "./context/AuthContext";
import { useContext } from "react";
import Spinner from "./components/Spinner";

function PrivateRoute() {
  const { loading, authenticated } = useContext(Context);

  if (loading) {
    return (
      <div className="w-screen h-screen items-center justify-center flex">
        <Spinner />
      </div>
    );
  }

  if (!authenticated) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<PrivateRoute />}>
            <Route element={<Layout />}>
              <Route path="/" index element={<Board />}></Route>
              <Route path="/users" index element={<Users />} />
            </Route>
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Cadastro />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
