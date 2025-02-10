import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryButton from "./CategoryButton";
import { CATEGORY_DATA } from "./game.const";

export function Category() {
  const navigate = useNavigate();
  return (
    <div>
     {CATEGORY_DATA.map((category, index) => (
      <CategoryButton
          key={index}
          title={category}
          onClick={() => { navigate("/game/1"); }}/>))}
    </div>
  );
}
