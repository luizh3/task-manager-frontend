import { BrowserRouter, Route, Routes } from "react-router-dom";
import Board from "./pages/Board";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Board />} />
      </Routes>
    </BrowserRouter>
  );
}
