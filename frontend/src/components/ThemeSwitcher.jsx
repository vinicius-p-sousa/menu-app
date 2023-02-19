import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';

import styled, { ThemeContext } from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 40px;
  width: 40px;
  font-size: 28px;
  padding: 0;

  background-color: var(--lightGrey);
  border: 2px solid var(--border);
  border-radius: 10px;
  cursor: pointer;
  opacity: 0.7;

  &:hover {
    border-color: var(--purple);
    color: var(--purple);
  }
`;

export default function ThemeSwitcher() {
  return (
    <ThemeContext.Consumer>
      {({ themeName, toggleTheme }) => (
        <Button onClick={toggleTheme}>
          {themeName === 'dark' ? <FiSun color="var(--text)" /> : <FiMoon color="var(--text)" />}
        </Button>
      )}
    </ThemeContext.Consumer>
  );
}
