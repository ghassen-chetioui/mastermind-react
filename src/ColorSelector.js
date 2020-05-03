import React, { useContext } from "react";
import { Input } from "./Input";
import { ApplicationState } from "./App";
import styled from "styled-components";

export const ColorSelector = () => {
 const [state, dispatch] = useContext(ApplicationState);
 return (
  <Container>
   {state.colors.map((color, index) => (
    <Input key={index} color={color} selected={state.currentColor === color} onClick={() => dispatch({ type: "CHANGE_COLOR", color })} />
   ))}
  </Container>
 );
};

const Container = styled.div`
 display: flex;
 flex-direction: column;
 margin-right: 10px;
`;
