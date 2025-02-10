import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoryButton from "./CategoryButton";

export function Category() {
  const navigate = useNavigate();
  return (
    <div>
      <CategoryButton
          title="연애"
          onClick={() => {navigate("/game");}}
        />
        <CategoryButton
          title="음식"
          onClick={() => {navigate("/game");}}
        />
        <CategoryButton
          title="병맛"
          onClick={() => {navigate("/game");}}
        />
        <CategoryButton
          title="인생"
          onClick={() => {navigate("/game");}}
        />
    </div>
  );
}
