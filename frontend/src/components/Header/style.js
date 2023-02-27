import styled from 'styled-components';

export const Heading = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  box-sizing: border-box;
  padding: 5px 1rem;
  border-bottom: 2px solid var(--border);
  background-color: var(--background);

  box-shadow: rgba(0, 0, 0, 0.16) 2px 2px 5px, rgba(0, 0, 0, 0.23) 2px 2px 5px;

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
  font-size: 2rem;
  opacity: 0.7;

  border: 2px solid var(--border);
  border-radius: 10px;
  height: 40px;
  padding: 0 1p0x;
  color: var(--text);
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    opacity: 1;
    border-color: var(--purple);
  }
`;
