import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import { TbCameraOff } from 'react-icons/tb';

import {
  ProductContainer,
  ProductImg,
  ProductName,
  ProductCategory,
  ProductPrice,
  ProductDescription,
} from './style';

const API_URL = import.meta.env.VITE_API_URL || 'localhost:3000/';

function Product({ productDetails }) {
  return (
    <ProductContainer
      as={motion.div}
      initial={{ x: '-100%', opacity: 0, scale: 0.5 }}
      animate={{ x: 0, opacity: 1, scale: 1 }}
      exit={{ y: '100%', opacity: 0, visibility: 'none' }}
    >
      <ProductImg>
        {productDetails?.images.length > 0 ? (
          <img src={`${API_URL}/${productDetails.images[0].filename}`} alt="imagem do produto" />
        ) : (
          <div className="img-notFound">
            <TbCameraOff />
          </div>
        )}
      </ProductImg>
      <ProductPrice available={productDetails.available}>
        <p>{productDetails.price}</p>
        <div>{productDetails.available ? 'disponível' : 'indisponível'}</div>
      </ProductPrice>

      <ProductCategory>
        <p>{`${productDetails.category_name}: `}</p>
      </ProductCategory>
      <ProductName>
        <p>{productDetails.name}</p>
      </ProductName>
      <ProductDescription>
        <p>{productDetails.description}</p>
      </ProductDescription>
    </ProductContainer>
  );
}

Product.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  productDetails: PropTypes.object.isRequired,
};

export default Product;
