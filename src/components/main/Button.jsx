import styled from "styled-components";

const StyledButton = styled.button`
  width: 300px;
  height: 70px;
  background-color: #cce5ff; /* 연한 파란색 */
  transition: 0.3s;
  &:hover {
    background-color: #99c2ff;
  }
  margin-top: 20px
  padding: 30px 100px;
  font-size: 30px;
  border: 2px solid black;
  font-weight: bold;
  color: white;
  text-align: center;
  text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black,
    2px 2px 0 black;
  cursor: pointer;

`;

function Button({ title, onClick }) {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
}

export default Button;
