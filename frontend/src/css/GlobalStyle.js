/* eslint-disable indent */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html { font-size: 62.5%; } 

  @media (max-width: 300px) {
   html {
    font-size: 52.5%;
   }
  }

  body {
    font-family: 'Inter', sans-serif;
    background-color: var(--background);
    color: var(--text);
    transition: all 0.2s;
  }

  * {
    box-sizing: border-box;
  }

  .Toastify__toast {
    background-color: var(--lightGrey);
    color: var(--text);
    border:  1px solid var(---border);
  } 

  .Toastify__close-button {
    color: var(--text);
    opacity: 0.5;
  }

  :root {
    ${(props) => {
      let append = '';
      Object.entries(props.theme).forEach(([prop, value]) => {
        append += `--${prop}: ${value};`;
      });
      return append;
    }}
  }
`;

export default GlobalStyle;
