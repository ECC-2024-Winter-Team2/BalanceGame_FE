import styled from "styled-components";

const StyledButton = styled.button`
  width: 50vw;
  height: 50vh;
  padding: 60px 120px;
  font-size: 160px;
  border-width: 1px;
  border-width: thin thin;
  border-color: white;
  background: linear-gradient(to right, #a093ff, #9b8aff);
  color: white;
  cursor: pointer;
  text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black,
    2px 2px 0 black;

  &:hover {
    background: #554b93;
  }
`;

function CategoryButton({ title, onClick }) {
  return <StyledButton onClick={onClick}>{title}</StyledButton>;
}

export default CategoryButton;
