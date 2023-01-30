import { FiSun } from 'react-icons/fi';
import styled, { ThemeContext } from 'styled-components';

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: 48px;
  background-color: var(--lightGrey);
  border: 2px solid var(--border);
  font-size: 32px;
  border-radius: 10px;
  cursor: pointer;
`;

export default function ThemeSwitcher() {
  return (
    <ThemeContext.Consumer>
      {({ theme, toggleTheme }) => (
        <Button onClick={toggleTheme}>
          <FiSun color="var(--text)" />
        </Button>
      )}
    </ThemeContext.Consumer>
  );
}
