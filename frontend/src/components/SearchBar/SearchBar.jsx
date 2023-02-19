import React, { useState, useEffect } from 'react';

import { FiSearch } from 'react-icons/fi';
import requestAPI from '../../utils/requestAPI';
import { Div, SearchButton, SearchResult, SearchLoading } from './style';

export default function SearchBar() {
  const [inputFocus, setInputFocus] = useState(false);
  const [timer, setTimer] = useState(null);
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    if (inputFocus === false) {
      setSearchResult([]);
    }
    return;
  }, [inputFocus]);

  const requestSearch = (searchText) => {
    clearTimeout(timer);
    if (searchText === '') {
      setSearchResult([]);
      return;
    }
    setTimer(
      setTimeout(async () => {
        const data = await requestAPI(`/products/search/${searchText}`, 'POST');
        setSearchResult(data);
      }, 500)
    );
  };

  const changeInputText = (e) => {
    requestSearch(e.target.value);
  };

  return (
    <Div onFocus={() => setInputFocus(true)} onBlur={() => setInputFocus(false)}>
      <input onChange={changeInputText} type="text" placeholder="Oque você busca?" />
      <SearchButton onClick={() => requestSearch(inputValue)}>
        <FiSearch color="var(--text)" />
      </SearchButton>
      {inputFocus ? (
        <SearchResult>
          <ul>
            {searchResult.length > 0 ? (
              searchResult.map((result) => {
                return (
                  <li key={result.name}>
                    <p>{result.category_name}</p> <p>{result.name}</p>
                  </li>
                );
              })
            ) : (
              <SearchLoading />
            )}
          </ul>
        </SearchResult>
      ) : null}
    </Div>
  );
}
