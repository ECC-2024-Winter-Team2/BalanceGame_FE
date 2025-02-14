import styled from "styled-components";

export const GameContainer = styled.div`
  white-space: pre-wrap;
  display: flex;
  justify-content: space-between; /* 내부 요소를 균형 있게 배치 */
  align-items: center;
  width: 100vw;
  height: 100vh; /* 전체 화면을 차지 */
  padding: 20px;
  background: linear-gradient(to right, #87CEFA 50%, #FFB6C1 50%);
  position: relative;
`;

export const QuestionText = styled.div`
  position: absolute;
  top: 5%;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  padding: 10px;
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  border: 3px solid white;
  background-color: white;
  z-index: 10;
`;

export const ProgressBar = styled.div``;

export const ChoiceLeft = styled.div`
  width: 50vw; /* 왼쪽 반 차지 */
  height: 100vh; /* 전체 화면 높이 */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  font-weight: bold;
  color: white;
  background-color: transparent;
`;

export const ChoiceRight = styled.div`
  width: 50vw; /* 오른쪽 반 차지 */
  height: 100vh; /* 전체 화면 높이 */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 100px;
  font-weight: bold;
  color: white;
  background-color: transparent;
`;

export const BackButton = styled.div`
  img{
    position: absolute;
    top: 5%;
    left: 5%;
    transform: translate(-50%, -50%);
    width: 50px;  /* 너비 조절 */
    height: auto; /* 비율 유지 */
}
`;

export const HomeButton = styled.div`
  img{
    position: absolute;
    top: 5%;
    right: 5%;
    transform: translate(-50%, -50%);
    width: 50px;  /* 너비 조절 */
    height: auto; /* 비율 유지 */
}
`;

