import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, Category, Result, Game, Percentage } from "./components";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="category" element={<Category />} />
        {/* TODO: 다이나믹 라우팅 */}
        <Route path="game/:category/:id" element={<Game />} />
        <Route path="result" element={<Result />} />
        <Route path="percentage" element={<Percentage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
