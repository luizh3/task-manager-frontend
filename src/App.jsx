import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "./pages/Board";
import Layout from "./pages/Layout";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" state="ola" index element={<Board />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
