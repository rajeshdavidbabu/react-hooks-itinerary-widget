import React from "react";
import styled, { keyframes } from "styled-components";

// color-picker
import ColorPalette from '../../resources/color-palette';

// styled components
const BounceAnimation = keyframes`
  0% { margin-bottom: 0; }
  50% { margin-bottom: 1rem }
  100% { margin-bottom: 0 }
`;

const DotWrapper = styled.div`
  width: 100vw;
  height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Dot = styled.div`
  width: 1em;
  height: 1em;
  margin: 0 0.5rem;
  border-radius: 50%;
  background-color: ${ColorPalette.primaryFG};
  /* Animation */
  animation: ${BounceAnimation} 0.5s linear infinite;
  animation-delay: ${props => props.delay};
`;

// export component
const LoadingDots = () => {
  return (
    <DotWrapper>
      <Dot delay="0s" />
      <Dot delay=".1s" />
      <Dot delay=".2s" />
    </DotWrapper>
  );
};

export default LoadingDots;
