import React, { useReducer } from "react";
import "./App.css";
import { ColorSelector } from "./ColorSelector";
import { reducer, InitialState } from "./reducer";
import { Guess } from "./Guess";
import styled from "styled-components";
import times from "lodash/times";
import { Modal } from "./Modal";

export const ApplicationState = React.createContext();

function App() {
 const [state, dispatch] = useReducer(reducer, InitialState);
 return (
  <ApplicationState.Provider value={[state, dispatch]}>
   <StyledApp>
    <Modal />
    <ColorSelector />
    <div key={state.gameNumber}>
     {times(10, (index) => (
      <Guess key={index} index={index} />
     ))}
    </div>
   </StyledApp>
  </ApplicationState.Provider>
 );
}
const StyledApp = styled.div`
 display: flex;
 justify-content: center;
 height: 100%;
 background: #f4f4f4;
`;
export default App;
