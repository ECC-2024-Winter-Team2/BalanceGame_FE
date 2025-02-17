import { useNavigate } from "react-router-dom";
import * as S from "./Percentage.style";

export function Percentage() {
  const navigate = useNavigate();

  return (
    <S.PercentageContainer>
      <S.TopContainer>당신은 상위 ??%입니다</S.TopContainer>
      <S.RoundPercentage>{"??%"}</S.RoundPercentage>
      <S.ResultButton onClick={() => navigate("/result")}>
        {"결과보기"}
      </S.ResultButton>
    </S.PercentageContainer>
  );
}
export default Percentage;
