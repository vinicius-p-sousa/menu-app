import React, { useState, useEffect } from 'react';
import requestApi from '../../utils/requestAPI';

import Header from '../../components/Header/Header';
import CategoryFilter from '../../components/CategoryFilter/CategoryFilter';
import Product from '../../components/Product/Product';

import { Main, Slogan, ProductsGrid } from './style';

function Home() {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    requestApi('/products').then((res) => setResponse(res));
  }, []);

  return (
    <>
      <Header />
      <Main>
        <Slogan>
          <h1>Menu App</h1>
          <h2>O melhor lugar para manter seu cardápio sempre atualizado</h2>
        </Slogan>
        <CategoryFilter setResponse={setResponse} />
        <ProductsGrid>
          {response.length > 0
            ? response.map((product) => <Product key={product.name} productDetails={product} />)
            : null}
        </ProductsGrid>
      </Main>
    </>
  );
}

export default Home;
