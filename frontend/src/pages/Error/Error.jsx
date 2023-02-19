import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 99vh;
`;

const Pizza = styled.div`
  background-color: #f9d63e;
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  border: 1.5vw solid #ce9546;
  position: relative;
  animation: rotation ease-in-out infinite 3s;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  span {
    display: block;
    background-color: #df1e26;
    width: 3vw;
    height: 3vw;
    border: 1px solid #000;
    border-radius: 50%;
    /* z-index: 2; */
  }

  span:first-child {
    position: absolute;
    top: 10%;
    left: 20%;
  }

  span:nth-child(2) {
    position: absolute;
    top: 15%;
    left: 60%;
  }

  span:nth-child(3) {
    position: absolute;
    top: 60%;
    left: 42%;
  }

  span:nth-child(4) {
    position: absolute;
    top: 70%;
    left: 15%;
  }

  span:nth-child(5) {
    position: absolute;
    top: 70%;
    left: 70%;
  }

  span:nth-child(6) {
    position: absolute;
    top: 30%;
    left: 5%;
  }
  span:nth-child(7) {
    position: absolute;
    top: 45%;
    left: 80%;
  }

  hr {
    border: solid 1px rgba(0, 0, 0, 0.1);
    position: absolute;
    width: 115%;
    top: -15%;
    left: -8%;
  }

  hr:nth-child(2n) {
    transform: rotate(45deg);
  }
  hr:nth-child(3n) {
    transform: rotate(-45deg);
  }
  hr:nth-child(4n) {
    transform: rotate(90deg);
  }
`;

const NotFound = styled.div`
  display: flex;
  font-size: 26vw;
  color: var(--text);
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 10px;
    font-size: 2rem;
    text-align: center;
  }

  button {
    background: var(--mediumGrey);
    color: var(--text);
    border: 2px solid var(--border);
    border-radius: 10px;
    width: 70%;
    height: 100%;
    padding: 10px;
    font-size: 1.5rem;
  }

  button:hover {
    cursor: pointer;
    background-color: var(--lightGrey);
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1rem;
    }
    button {
      font-size: 1rem;
      height: 100%;
      width: 80%;
    }
  }
`;

function Error() {
  const navigate = useNavigate();

  function redirect() {
    navigate('/');
  }
  return (
    <Container>
      <NotFound>
        <p>4</p>
        <Pizza>
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <span />
          <hr />
          <hr />
          <hr />
          <hr />
        </Pizza>
        <p>4</p>
      </NotFound>
      <Div>
        <h1>A paginá que você esta procurando não existe</h1>
        <button type="button" onClick={redirect}>
          voltar para o inicio
        </button>
      </Div>
    </Container>
  );
}

export default Error;
