import { useNavigate } from "react-router-dom";
import Nickname from "./Nickname";
import Button from "./Button";
import * as S from "./Main.style";
import styled from "styled-components";
import shubung from "./shubung.png"

export function Main() {
  const navigate = useNavigate();

  const handleNavigate = (path) => () => {
    navigate(path);
  };

  const ButtonStart= styled.div`
  position: absolute;
  top: 700px;
  left: 30%;
  transform: translateX(-50%);
`;
const ButtonResult= styled.div`
  position: absolute;
  top: 700px;
  left: 70%;
  transform: translateX(-50%);
`;

  return (
    <S.MainContainer>
      <div className="app-container">
        <S.Title>나는 근본{"\n"}인간일까?</S.Title>
        <S.NicknameContainer>
          <S.NicknameLabel>닉네임</S.NicknameLabel>
          <Nickname />
        </S.NicknameContainer>
        {/* TODO: 닉네임 없으면 alert 추가 */}
        <ButtonStart><Button title="시작하기" onClick={handleNavigate("/category")} /></ButtonStart>
        <ButtonResult><Button title="결과보기" onClick={handleNavigate("/result")} /></ButtonResult>
        <S.ShuBung>
        <img src={shubung} alt="슈크림 붕어빵" />
        </S.ShuBung>
      </div>
    </S.MainContainer>
  );
}

export default Main;
