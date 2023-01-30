import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  max-width: 100vw;
  min-height: 90vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: end;
  margin: 10px 10px 0 0;
`;

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--cardBackground);
  box-shadow: rgba(0, 0, 0, 0.4) 0px 7px 29px 0px;

  width: 500px;
  height: 550px;
  border: 2px solid var(--border);
  border-radius: 20px;

  h1 {
    text-align: center;
    font-size: 28px;
    margin-bottom: 12%;
    justify-self: start;
  }

  @media (max-width: 580px) {
    background-color: var(--background);
    border: transparent;
    width: 100%;
    box-shadow: none;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  div {
    width: 100%;
    margin-bottom: 8%;

    input,
    label {
      margin: 0 auto;
      width: 90%;
      display: block;
    }

    input {
      height: 60px;
      background-color: var(--lightGrey);
      border-radius: 10px;
      border: 2px solid var(--border);
      font-size: 24px;
      color: var(--text);
    }

    input:hover {
      outline: 0px;
      border: 2px solid var(--green);
    }

    label {
      font-size: 18px;
    }
  }

  button {
    background-color: var(--green);
    width: 90%;
    height: 60px;
    position: relative;
    border: 2px solid var(--border);
    border-radius: 10px;
    color: #fff;
    font-size: 28px;
    text-align: center;
    transition: 0.5s;
  }

  button:hover {
    cursor: pointer;
  }

  button:after {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 10px;
    opacity: 0;
    transition: all 0.5s;
    box-shadow: 0 0 12px 30px #2dc12d;
  }

  button:active:after {
    box-shadow: 0 0 0 0 #2dc12d;
    opacity: 0.8;
    transition: 0s;
  }
`;
