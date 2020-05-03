import React, { useReducer } from "react";
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
   <Container>
    <Modal />
    <h1>Mastermind</h1>
    <div style={{ display: 'flex' }}>
     <ColorSelector />
     <div key={state.gameNumber}>
      {times(10, (index) => (
       <Guess key={index} index={index} />
      ))}
     </div>
    </div>
   </Container>
  </ApplicationState.Provider>
 );
}
const Container = styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 min-height: 100vh;
 background: #f4f4f4;
`;

export default App;
