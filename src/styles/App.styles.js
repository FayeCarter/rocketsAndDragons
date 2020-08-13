import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`

  html, body {
    margin: 10px;
    height: 100%;
  }

  body {
    font-family: Arial, Helvetica, sans-serif;
    display: grid;
    height: 100vh;
    margin: 0;
    place-items: center center;
  }
`

export const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  height: 100%;

  h1 {
    text-align: center;
  }

  .controls {
    align-self: center;
  }

  button {
    width: 300px;
    margin: 20px;
  }

  .load-message {
    color: grey;
    align-self: center;
    font-style: italic;
    padding: 20px 0;
  }
`;

export const StyledResults = styled.div`
  display: flex;
  align-content: center;
  width:100%;
  padding-top: 40px;
`;

export const StyledList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

