import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Nickname from "./Nickname";
import Button from "./Button";
import * as S from "./Main.style";

export function Main() {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleStartClick = () => {
    alert("이 페이지는 밸런스 게임 페이지입니다.");
  };

  const handleDetailClick = () => {
    alert("이 페이지는 결과보기 페이지입니다..");
  };

  return (
    <S.MainContainer>
      <div className="app-container">
        <h1>나는 근본 인간일까?</h1>
        <Nickname />
        <div className="button-container">
          <button onClick={handleStartClick}>시작</button>
          <button onClick={handleDetailClick}>결과</button>
        </div>
        <Button
          title="시작"
          onClick={() => {
            navigate("/category");
          }}
        />
      </div>
    </S.MainContainer>
  );
}

export default Main;
