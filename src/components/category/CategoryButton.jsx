import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
    padding: 60px 120px;
    font-size: 150px;
    border-width: 1px;
    border-width: thin thin;
    border-color: white;
    background: linear-gradient(to right, #A093FF, #9B8AFF);
    color: white;
    cursor: pointer;
`;

function CategoryButton(props) {
    const { title, onClick } = props;

    return <StyledButton onClick={onClick}>{title || "button"}</StyledButton>;
}

export default CategoryButton;
