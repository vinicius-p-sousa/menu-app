import React, { useState, useEffect } from 'react';

import { FiSearch } from 'react-icons/fi';
import requestAPI from '../../utils/requestAPI';
import { Div, SearchButton, SearchResult, SearchLoading } from './style';

export default function SearchBar() {
  const [inputFocus, setInputFocus] = useState(false);
  const [inputHover, setInputHover] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [timer, setTimer] = useState(null);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (inputFocus === false) {
      setSearchResult([]);
    }
  }, [inputFocus]);

  const requestSearch = (searchText) => {
    clearTimeout(timer);
    if (searchText === '') {
      setSearchResult([]);
      return;
    }

    const actualTimer = setTimeout(async () => {
      const data = await requestAPI(`/products/search/${searchText}`, 'POST');
      setSearchResult(data);
    }, 500);

    setTimer(actualTimer);
  };

  const changeInputText = (e) => {
    requestSearch(e.target.value);
    setInputValue(e.target.value);
  };

  async function makeSearch(searchText) {
    if (searchText) {
      const data = await requestAPI(`/products/search/${searchText}`, 'POST');
      setSearchResult(data);
    }
  }

  return (
    <Div
      onMouseEnter={() => setInputHover(true)}
      onMouseLeave={() => setInputHover(false)}
      onFocus={() => setInputFocus(true)}
      onBlur={() => setInputFocus(false)}
    >
      <input
        onChange={changeInputText}
        type="text"
        placeholder="Oque você busca?"
        value={inputValue}
      />

      <SearchButton onClick={() => makeSearch(inputValue)}>
        <FiSearch color="var(--text)" />
      </SearchButton>

      {inputFocus || inputHover ? (
        <SearchResult>
          <ul>
            {searchResult.length > 0 ? (
              searchResult.map((result) => (
                <li key={result.name}>
                  <p>{result.category_name}</p>
                  <p>{result.name}</p>
                </li>
              ))
            ) : (
              <SearchLoading />
            )}
          </ul>
        </SearchResult>
      ) : null}
    </Div>
  );
}
