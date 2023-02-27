import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { RiArrowDownSLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

import { Container, CheckboxDiv, Loading } from './style';
import requestAPI from '../../utils/requestAPI';

function CategoryFilter({ setResponse }) {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      requestAPI('/categories').then((response) => setCategories(response));
    }
  }, [isOpen]);

  function requestCategories() {
    if (selectedCategory.length > 0) {
      requestAPI(`/categories/${selectedCategory}`).then((response) => setResponse(response));
    } else {
      requestAPI('/products').then((response) => setResponse(response));
    }
  }

  function handleCheckboxChange(event, categoryName) {
    if (categoryName === selectedCategory) {
      setSelectedCategory('');
    } else {
      setSelectedCategory(categoryName);
    }
  }

  return (
    <Container isOpen={isOpen}>
      <button type="button" onClick={() => setIsOpen(!isOpen)}>
        Filtrar por categorias
        <RiArrowDownSLine />
      </button>

      {isOpen === true &&
        (categories.length > 0 ? (
          <>
            <motion.div
              initial={{ y: '-100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: '100%', opacity: 0, visibility: 'none' }}
              className="categoriesGrid"
            >
              {categories.map((category) => (
                <CheckboxDiv key={category.name}>
                  <input
                    type="checkbox"
                    id={category.name}
                    checked={selectedCategory === category.name}
                    onChange={(event) => handleCheckboxChange(event, category.name)}
                  />
                  <label htmlFor={category.name}>{category.name}</label>
                </CheckboxDiv>
              ))}
            </motion.div>

            <button type="button" onClick={requestCategories}>
              Pesquisar
            </button>
          </>
        ) : (
          <Loading />
        ))}
    </Container>
  );
}

CategoryFilter.propTypes = {
  setResponse: PropTypes.func.isRequired,
};

export default CategoryFilter;
