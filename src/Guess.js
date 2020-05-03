import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Input } from "./Input";
import { ApplicationState } from "./App";
import times from "lodash/times";
import { Hint } from "./Hint";

export const Guess = ({ index }) => {
 const [state, dispatch] = useContext(ApplicationState);
 const [guess, setGuess] = useState(Array(4).fill(undefined));
 const [result, setResult] = useState();

 function updateGuess(index) {
  const updated = [...guess];
  updated[index] = state.currentColor;
  setGuess(updated);
 }

 function isSubmittable() {
  return index === state.currentGuess && !guess.some((it) => it === undefined);
 }

 function checkGuess() {
  if (JSON.stringify(guess) === JSON.stringify(state.pattern)) {
   setResult({ correct: 4, misplaced: 0 });
   dispatch({ type: "PATTERN_SOLVED" });
   return;
  }
  setResult(computeResult(guess, state.pattern));
  dispatch({ type: "NEXT_GUESS" });
 }

 function computeResult(guess, pattern) {
  const guessCopy = [...guess];
  const patternCopy = [...pattern];
  const result = { correct: 0, misplaced: 0 };
  for (let i = guessCopy.length - 1; i >= 0; i--) {
   if (guessCopy[i] === patternCopy[i]) {
    result.correct += 1;
    patternCopy.splice(i, 1);
    guessCopy.splice(i, 1);
   }
  }
  for (let i = 0; i < guessCopy.length; i++) {
   const index = patternCopy.indexOf(guessCopy[i]);
   if (index > -1) {
    result.misplaced += 1;
    patternCopy.splice(index, 1);
   }
  }
  return result;
 }

 return (
  <Container current={index === state.currentGuess}>
   <Inputs>
    {times(4, (i) => (
     <Input key={i} color={guess[i] || "lightgray"} onClick={() => state.currentGuess === index && updateGuess(i)} />
    ))}
   </Inputs>
   {isSubmittable() && <Submit className="fa fa-check" onClick={checkGuess}></Submit>}

   <Hint result={result} />
  </Container>
 );
};

const Container = styled.div`
 display: flex;
 justify-content: space-between;
 align-items: center;
 border: ${(props) => props.current && "1px solid lightgray"};
 border-radius: 5px;
 margin-bottom: 5px;
 height: 35px;
 width: 180px;
`;

const Inputs = styled.div`
 display: flex;
 align-items: center;
`;

const Submit = styled.i`
 color: #b4bb69;
 cursor: pointer;
`;
