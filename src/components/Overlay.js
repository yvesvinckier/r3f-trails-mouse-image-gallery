import React from "react";
import styled from "styled-components";

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  z-index: 997;
  mix-blend-mode: difference;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1 {
    max-width: 1005px;
    transform: rotate(-1.50017deg);
    color: #fff;
    font-size: 9vw;
    font-weight: 300;
    line-height: 0.9;
    font-style: normal;
    letter-spacing: -0.04em;
  }
`;

const Overlay = () => {
  return (
    <StyledOverlay>
      <h1>
        Winter
        <br />
        is coming
      </h1>
    </StyledOverlay>
  );
};

export default Overlay;
