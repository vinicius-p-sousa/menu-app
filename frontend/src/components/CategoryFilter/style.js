import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  background: var(--lightGrey);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 0.5rem;
  margin-top: 25px;
  box-shadow: rgba(0, 0, 0, 0.16) 5px 5px 10px, rgba(0, 0, 0, 0.23) 5px 5px 10px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: transparent;
    font-size: 1.8rem;
    color: var(--text);
    cursor: pointer;

    svg {
      transform: rotate(${(props) => (props.isOpen ? '180deg' : '0deg')});
      transition: ease all 0.2s;
    }
  }

  .categoriesGrid {
    width: 80%;
    align-self: flex-end;

    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 500px) {
    .categoriesGrid {
      width: 85%;
      align-self: center;
    }
  }

  @media (max-width: 400px) {
    .categoriesGrid {
      width: 100%;
      align-self: center;
    }
  }
`;

export const CheckboxDiv = styled.div`
  input[type='checkbox'] {
    display: none;
    visibility: hidden;
  }

  label {
    position: relative;
    padding-left: 2rem;
    padding-right: 1rem;
    font-size: 1.8rem;
    line-height: 2;
    cursor: pointer;
    display: inline-flex;
    z-index: 10;
  }

  label:before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    display: block;
    top: 0.8rem;
    left: 0;
    display: block;
    width: 1.8rem;
    height: 1.8rem;
    border: 2px solid var(--text);
    border-radius: 4px;
    z-index: 1;
  }

  input[type='checkbox']:checked + label {
    padding-left: 1rem;
  }

  input[type='checkbox']:checked + label:before {
    top: 0.6rem;
    width: 100%;
    height: 2.5rem;
    background: var(--lightBlue);
    border: 1px solid var(--blue);
    z-index: -1;
  }

  label,
  label::before {
    transition: 0.25s all ease;
  }
`;

export const Loading = styled.div`
  margin: 0 auto;
  width: 2rem;
  height: 2rem;
  
  border: 2px solid transparent;
  border-top-color: var(--text);
  border-radius: 50%;
  animation: rotate 0.7s linear infinite;

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
`;
