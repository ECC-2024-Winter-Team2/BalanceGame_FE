import styled from "styled-components";

export const ResultContainer= styled.div`
  white-space: pre-wrap;
  position: relative;
  margin: 0;
  padding: 100px 100px;
  justify-content: center;
  height: 100vh;
  background-color:  #cce5ff;
`;

export const ResultCategories = styled.button`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  padding-left: 120px;
  margin-bottom: 20px; 

  background-color: #a88dd2;
  color: white;
  font-size: 80px;
  font-weight: bold;
  border: 5px solid black;
  width: 400px;
  height: 200px;
  cursor: pointer;
  transition: 0.3s;
  
  text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black,
    2px 2px 0 black;
  &:hover {
    background: #554b93;
  }
`;