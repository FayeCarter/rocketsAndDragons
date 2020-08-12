import styled, { createGlobalStyle } from 'styled-components';


export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
    margin: 20px;
  }
`

export const StyledApp= styled.div`
  display: flex;
  flex-direction: column;

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

`;

export const StyledResults= styled.div`
  display: flex;
`;
