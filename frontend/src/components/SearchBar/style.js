import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: row;
  width: 50vw;
  max-width: 700px;
  position: relative;
  transition: all 0.2s;

  input {
    background-color: var(--mediumGrey);
    color: var(--text);
    width: 90%;
    height: 38px;
    padding: 10px;
    border: 1px solid var(--border);
    border-radius: 8px 0 0 8px;
    font-size: 20px;
  }

  &:hover {
    input {
      outline: 0px;
      border-color: var(--purple);
    }
  }

  input:focus {
    outline: 0px;
    border-color: var(--purple);
  }

  @media (max-width: 900px) {
    width: 70vw;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
`;

export const SearchButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--mediumGrey);
  height: 38px;
  width: 10%;
  font-size: 30px;

  color: var(--text);
  border: 1px solid var(--border);
  border-radius: 0 8px 8px 0;
  border-left: none;

  &:hover {
    outline: 0px;
    border-color: var(--purple);
  }
`;

export const SearchResult = styled.div`
  position: absolute;
  margin: 0 auto;
  top: 55px;
  left: 0;
  right: 0;

  background-color: var(--lightGrey);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1rem;
  width: 40vw;
  z-index: 10;

  text-align: center;
  font-size: 20px;

  li {
    display: flex;
    align-items: center;
    justify-content: space-around;

    padding: 5px;
    border-radius: 5px;
    cursor: pointer;

    &:hover {
      background-color: var(--mediumGrey);
    }

    p {
      width: 50%;
      text-align: start;
    }

    p:first-child {
      font-weight: bold;
    }
  }

  @media (max-width: 900px) {
    width: 60vw;
  }

  @media (max-width: 600px) {
    width: 95%;
  }
`;

export const SearchLoading = styled.div`
  margin: 0 auto;
  width: 2rem;
  height: 2rem;
  
  border: 2px solid transparent;
  border-top-color: var(--purple);
  border-radius: 50%;
  animation: rotate 0.7s linear infinite;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
`;
