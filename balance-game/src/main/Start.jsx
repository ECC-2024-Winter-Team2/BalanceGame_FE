import React, { useState } from "react";
import '../App.css';

function Start(props) {
  const [name, setName] = useState("");

  const handleInputChange = (e) => {
    setName(e.target.value);
  };

  const handleStartClick = () => {
    alert("이 페이지는 밸런스 게임 페이지입니다.");
  };

  const handleDetailClick = () => {
    alert("이 페이지는 결과보기 페이지입니다..");
  };

  return (
    <div className="app-container">
    <h1>나는 근본 인간일까?</h1>

    <div className="input-container">
      <input
        type="text"
        placeholder="닉네임"
        value={name}
        onChange={handleInputChange}
      />
    </div>
    <div className="button-container">
      <button onClick={handleStartClick}>시작</button>
      <button onClick={handleDetailClick}>결과</button>
    </div>
  </div>
  );
}
export default Start;
