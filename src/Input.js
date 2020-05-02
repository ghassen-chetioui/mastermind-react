import React from "react";
import styled from "styled-components";

export const Input = ({ color, selected, size, onClick }) => {
 return <StyledInput color={color} selected={selected} size={size} onClick={onClick} />;
};

const StyledInput = styled.div`
 background-color: ${(props) => props.color};
 border: ${(props) => props.selected ? "1px solid #525554" : "2px solid #EAEBE9"};
 cursor: pointer;
 height: ${(props) => (props.size ? `${props.size}px` : "25px")};
 width: ${(props) => (props.size ? `${props.size}px` : "25px")};
 border-radius: 50%;
 display: inline-block;
 margin: 1px;
`;
