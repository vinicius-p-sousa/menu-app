import styled from 'styled-components';

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, Helvetica, sans-serif;
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
