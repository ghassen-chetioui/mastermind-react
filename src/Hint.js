import React from "react";
import styled from "styled-components";
import { Input } from "./Input";
import times from "lodash/times";

export const Hint = ({ result }) => {
 return (
  <Container>
   {result ? (
    <>
     {times(result.correct, (i) => (
      <Input key={i} color={"lightgreen"} selected size={8} />
     ))}
     {times(result.misplaced, (i) => (
      <Input key={i} color={"yellow"} selected size={8} />
     ))}
     {times(4 - (result.correct + result.misplaced), (i) => (
      <Input key={i} color={"lightcoral"} selected size={8} />
     ))}
    </>
   ) : (
    <>
     {times(4, (i) => (
      <Input key={i} color={"white"} selected size={8} />
     ))}
    </>
   )}
  </Container>
 );
};

const Container = styled.div`
 display: flex;
 flex-wrap: wrap;
 height: 20px;
 width: 30px;
`;
