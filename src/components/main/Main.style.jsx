import styled from "styled-components";

export const MainContainer = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #b0c4de; 
`;

export const Title = styled.div`
  white-space: pre-line;
  position: absolute;
  top: 90px;
  left: 25%;
  transform: translateX(-50%);
  font-size: 140px;
  font-weight: bold;
  color: white;
  text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black,
    2px 2px 0 black;
`;

export const NicknameContainer=styled.div`
  display: flex;
  position: absolute;
  top: 550px;
  left: 50%;
  transform: translateX(-50%);
  align-items: center;
  justify-content: center;
  gap: 30px;
  padding: 15px 100px;
  font-size: 15px;
  border: 2px solid black;
  background-color: #a88dd2; 
  outline: none;
  width: 150px;
  `;

  export const ShuBung=styled.div`
  position: absolute;
  top: 40px;
  right: 600px;
  width: 40px;
  `;

  export const NicknameLabel = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: white;
   text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black;
   writing-mode: horizontal-tb;
   white-space: nowrap;
`;