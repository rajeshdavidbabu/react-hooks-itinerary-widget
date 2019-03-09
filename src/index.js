import React from "react";
import ReactDOM from "react-dom";
import styled, { createGlobalStyle } from "styled-components";
import ColorPalette from './resources/color-palette';

import Widget from "./Widget";

const GlobalStyle = createGlobalStyle`
body {
  font-family: "Helvetica", "Helvetica Neue", "Segoe UI", "Helvetica",
    "Arial", sans-serif;
    background-color: #ffffff;
    color: ${ColorPalette.primaryBGText}
}
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Container>
      <Widget />
    </Container>
  </React.Fragment>,
  document.getElementById("root")
);
