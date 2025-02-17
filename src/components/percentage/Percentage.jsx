import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./Percentage.style";
import * as GameS from "../game/Game.style";
import backbutton from "./backbutton.png"
import homebutton from "./homebutton.png"

export function Percentage() {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };

  return (
      <S.PercentageContainer>

      <GameS.BackButton>
        <img onClick={handleBack} src={backbutton} />
      </GameS.BackButton>

      <GameS.HomeButton>
        <img onClick={() => navigate('/')} src={homebutton} />
      </GameS.HomeButton>

      <S.TopContainer>
        당신은 상위 ??%입니다
      </S.TopContainer>

      <S.RoundPercentage>{"??%"}</S.RoundPercentage>
    
      <S.ResultButton onClick={() => navigate('/result')}>
        {"결과보기"}
      </S.ResultButton>
      </S.PercentageContainer>
  );
}
export default Percentage;