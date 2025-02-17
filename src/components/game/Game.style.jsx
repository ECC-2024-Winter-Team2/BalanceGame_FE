import styled from "styled-components";

export const GameContainer = styled.div`
  white-space: pre-wrap;
  display: flex;
  justify-content: space-between; /* 내부 요소를 균형 있게 배치 */
  align-items: center;
  position: relative;
`;

export const QuestionText = styled.div`
  position: absolute;
  top: 40px;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  padding: 16px;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  border: 3px solid black;
  background-color: white;
  border-radius: 47%;
  overflow: hidden;
  z-index: 10;
`;

export const ProgressBar = styled.div``;

export const ChoiceContainer = styled.div`
  width: 50vw; /* 왼쪽 반 차지 */
  height: 100vh; /* 전체 화면 높이 */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  font-weight: bold;
  color: white;
  background-color: transparent;
  text-align: center;
  text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black,
    2px 2px 0 black;
  cursor: pointer;
`;

export const ChoiceLeft = styled(ChoiceContainer)`
  background-color: #87cefa;

  &:hover {
    background-color: #66a6ce;
  }
`;

export const ChoiceRight = styled(ChoiceContainer)`
  background-color: #ffb6c1;

  &:hover {
    background-color: #ce8797;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  top: 20px;
  cursor: pointer;

  &:hover img {
    transform: scale(1.2);
  }

  img {
    transition: transform 0.3s ease-in-out;
    width: 50px;
  }
`;

export const BackButton = styled(ButtonContainer)`
  left: 10px;
`;

export const HomeButton = styled(ButtonContainer)`
  right: 10px;
`;
