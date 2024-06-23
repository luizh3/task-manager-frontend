import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "./pages/Board";
import Layout from "./pages/Layout";
import Users from "./pages/Users";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" index element={<Board />} />
          <Route path="/users" index element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
