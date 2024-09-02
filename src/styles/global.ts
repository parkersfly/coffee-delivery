import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;

    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  :focus {
    outline: none;
    box-shadow: 0 0 0 2px ${({ theme }) => theme["yellow-dark"]};
  }

  body {
    font-size: 1.6rem;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme["base-text"]};
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
  }
`