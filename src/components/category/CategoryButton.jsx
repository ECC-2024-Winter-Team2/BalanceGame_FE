import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    width: 50vw; 
    height: 50vh;
    padding: 60px 120px;
    font-size: 160px;
    border-width: 1px;
    border-width: thin thin;
    border-color: white;
    background: linear-gradient(to right, #A093FF, #9B8AFF);
    color: white;
    cursor: pointer;
    text-shadow: -2px -2px 0 black, 2px -2px 0 black, -2px 2px 0 black, 2px 2px 0 black;
`;

function CategoryButton(props) {
    const { title, onClick } = props;

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default CategoryButton;
