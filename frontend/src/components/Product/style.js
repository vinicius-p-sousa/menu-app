import styled from 'styled-components';

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;

  max-width: 350px;
  width: 100%;
  min-height: 400px;
  height: 100%;

  box-shadow: rgba(0, 0, 0, 0.16) 5px 5px 10px, rgba(0, 0, 0, 0.23) 5px 5px 10px;

  padding: 1.8rem;
  background: var(--lightGrey);
  border: 1px solid var(--border);
  border-radius: 10px;
  font-size: 1.8rem;
  cursor: pointer;
  overflow: hidden;
`;

export const ProductImg = styled.div`
  max-width: 320px;
  min-height: 250px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;

  img,
  .img-notFound {
    border-radius: 5px;
    width: 100%;
  }

  .img-notFound {
    background: var(--mediumGrey);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      font-size: 4em;
      color: var(--text);
    }
  }
`;

export const ProductCategory = styled.div`
  font-size: 1.6rem;
`;

export const ProductName = styled.div`
  margin-bottom: 1.8rem;
  font-size: 2rem;
`;

export const ProductPrice = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
  p {
    font-size: 2.5rem;
    font-weight: bold;
    margin-top: 0.5rem;
  }

  div {
    background-color: ${(props) => (props.available === true ? 'var(--green)' : 'var(--red)')};
    height: 100%;
    font-size: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 1rem;
    padding: 0.5rem;
    color: #fff;
  }
`;

export const ProductDescription = styled.div`
  font-size: 1.5rem;
`;
