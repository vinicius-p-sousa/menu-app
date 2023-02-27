import styled from 'styled-components';

export const Main = styled.main`
  max-width: 1200px;
  width: 90vw;
  height: 100vh;
  margin: 0 auto;
`;

export const Slogan = styled.div`
  margin-top: 2rem;
  text-align: center;

  h2 {
    font-size: 3rem;
  }

  h1 {
    padding: 15px;
    font-weight: bold;
    font-size: 10rem;

    background-image: linear-gradient(
      -225deg,
      #fff800 0%,
      #ff1361 25%,
      #44107a 50%,
      #ff1361 75%,
      #fff800 100%
    );
    background-size: 200% auto;
    background-clip: text;
    text-fill-color: transparent;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: textclip 5s linear infinite;
  }

  @keyframes textclip {
    to {
      background-position: 200% center;
    }
  }
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  place-items: center;
  margin-top: 3rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 550px) {
    grid-template-columns: 1fr;
  }
`;
