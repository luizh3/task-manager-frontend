import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "./pages/Board";
import Layout from "./pages/Layout";
import Users from "./pages/Users";
import Login from "./pages/login/Login";
import Cadastro from "./pages/cadastro/Cadastro";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" index element={<Board />}></Route>
          <Route path="/users" index element={<Users />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  );
}
