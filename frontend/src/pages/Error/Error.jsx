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

  h1 {
    font-size: 30vw;
    color: var(--text);
  }
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    margin: 10px;
    font-size: 3rem;
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
`;

function Error() {
  const navigate = useNavigate();

  function redirect() {
    navigate('/');
  }
  return (
    <Container>
      <h1>404</h1>
      <Div>
        <h2>A paginá que você esta procurando não existe</h2>
        <button type="button" onClick={redirect}>
          voltar para o inicio
        </button>
      </Div>
    </Container>
  );
}

export default Error;
