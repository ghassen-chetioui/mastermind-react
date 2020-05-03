import React, { useContext } from "react";
import { ApplicationState } from "./App";
import styled from "styled-components";

export const Modal = () => {
 const [state, dispatch] = useContext(ApplicationState);
 return state.status !== "PLAYING" ? (
  <StyledModal id="modal">
   <ModalContent>
    <div>{state.status === "WINING" ? "Congratulations you win :)" : "Bad luck you lose :("}</div>
    <button onClick={() => dispatch({ type: "RESET" })}>Retry</button>
   </ModalContent>
  </StyledModal>
 ) : null;
};

const StyledModal = styled.div`
 position: fixed;
 top: 0;
 left: 0;
 width: 100%;
 height: 100%;
 background: rgba(0, 0, 0, 0.6);
`;

const ModalContent = styled.div`
 height: 50px;
 width: 220px;
 display: flex;
 flex-direction: column;
 padding: 10px;
 position: fixed;
 background: white;
 top: 50%;
 left: 50%;
 transform: translate(-50%, -50%);
 border-radius: 5px;
`;
