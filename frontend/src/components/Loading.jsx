import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-color: rgba(0, 0, 0, 0.6),
  width: 100%;
  height: 100%;

  position: absolute;
  z-index: 10;
  transition: ease-in 1s; : null
  
`;

const LoadCircle = styled.div`
  position: absolute;
  bottom: 50%;
  left: 50%;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  animation: rotate 0.7s linear infinite;

  &::before {
    content: '';
    box-sizing: border-box;
    position: absolute;
    inset: 0px;
    border-radius: 50%;
    border: 5px solid #fff;
    animation: prixClipFix 3s linear infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes prixClipFix {
    0% {
      clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
    }
    25% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
    }
    50% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
    }
    75% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
    }
    100% {
      clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
    }
  }
`;

function Loading() {
  return (
    <Container>
      <LoadCircle />
    </Container>
  );
}

export default Loading;
