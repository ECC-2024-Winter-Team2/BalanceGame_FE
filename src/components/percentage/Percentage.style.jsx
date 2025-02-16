import styled from "styled-components";

export const PercentageContainer = styled.button`
`;

export const TopContainer = styled.button`
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  padding: 10px;
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  border: 3px solid black;
  background-color: lightblue;
  z-index: 10;
  color: white;
  text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black;
`;

export const RoundPercentage = styled.button`
  position: absolute;
  top: 35%;
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  height: 300px;
  font-size: 60px;
  font-weight: bold;
  text-align: center;
  border: 3px solid black;
  border-radius: 50%;
  background: linear-gradient(to right, #A093FF, #9B8AFF);
  overflow: hidden;
  color: white;
  text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black;
`;

export const ResultButton = styled.button`
  position: absolute;
  top: 80%;
  left: 50%;
  transform: translateX(-50%);
  width: 250px;
  padding: 10px;
  font-size: 40px;
  font-weight: bold;
  text-align: center;
  border: 3px solid black;
  background-color: lightblue;
  z-index: 10;
  color: white;
  text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black;
`;