import { useNavigate } from "react-router-dom";
import Nickname from "./Nickname";
import Button from "./Button";
import * as S from "./Main.style";

export function Main() {
  const navigate = useNavigate();

  const handleNavigate = (path) => () => {
    navigate(path);
  };

  return (
    <S.MainContainer>
      <div className="app-container">
        <h1>나는 근본 인간일까?</h1>
        <Nickname />
        {/* TODO: 닉네임 없으면 alert 추가 */}
        <Button title="시작하기" onClick={handleNavigate("/category")} />
        <Button title="결과보기" onClick={handleNavigate("/result")} />
      </div>
    </S.MainContainer>
  );
}

export default Main;
