import React from "react";

import {
  BrowserRouter,
  Route,
  Routes,
  useNavigate
} from "react-router-dom"

import "./App.css";
import { Main } from "./components";
import CategoryPage from "./components/main/CategoryPage";
import styled from "styled-components";

function App(props) {
  const navigate = useNavigate
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Main />} />
        <Route path="category" element={<CategoryPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

