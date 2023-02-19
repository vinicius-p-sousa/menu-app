import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  width: 100vw;
  box-sizing: border-box;
  padding: 5px 10px;
  border-bottom: 1px solid var(--border);
  background-color: var(--background);

  @media (max-width: 600px) {
    gap: 5px;

    div:first-child {
      order: 2;
    }
  }
`;

export const LoginButton = styled.button`
  order: -1;
  justify-self: end;
  background-color: var(--lightGrey);
  font-size: larger;
  opacity: 0.7;

  border: 2px solid var(--border);
  border-radius: 10px;
  height: 40px;
  padding: 0 10px;
  color: var(--text);
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    opacity: 1;
    border-color: var(--purple);
  }
`;
