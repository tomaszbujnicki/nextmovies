import React, { useState, useRef, useEffect } from 'react';
import useFetch from '../../hooks/useFetch';
import styles from './Keywords.module.css';

const Keywords = () => {
  const [keywordlist, setKeywordList] = useState([]);
  const [query, setQuery] = useState(null);
  const ref = useRef(null);
  const data = useFetch(query);
  const suggestionList = data?.results;

  const removeKeyword = (e) => {
    e.preventDefault();
    const name = e.target.textContent;
    setKeywordList((list) => list.filter((keyword) => keyword.name != name));
  };

  const addKeyword = (e) => {
    e.preventDefault();
    const name = e.target.textContent;
    const isOnKeywordList = keywordlist.some((x) => x.name === name);
    if (!isOnKeywordList) {
      const keyword = suggestionList.find((keyword) => keyword.name === name);
      setKeywordList((list) => {
        return [...list, keyword];
      });
    }
    ref.current.value = '';
    setQuery(null);
    setFocus();
  };

  const searchForSuggestions = (e) => {
    const value = e.target.value;
    setQuery(`search/multi/&query=${value}`);
  };

  const setFocus = () => {
    ref.current.focus();
  };

  return (
    <div className={styles.root} onClick={setFocus}>
      <ul className={styles.keywordList}>
        {keywordlist.map((keyword) => (
          <li key={keyword.id}>
            <div onClick={removeKeyword} className={styles.keyword}>
              {keyword.name}
            </div>
          </li>
        ))}
        <li key="input" style={{ width: '100%' }}>
          <input
            ref={ref}
            className={styles.input}
            type="search"
            id="keywords"
            name="keywords"
            onChange={searchForSuggestions}
            autoComplete="off"
            placeholder="Search for keywords"
          />
        </li>
      </ul>

      {suggestionList && suggestionList.length > 0 && (
        <ul className={styles.suggestionList}>
          {suggestionList.map((keyword) => (
            <li key={keyword.id}>
              <div onClick={addKeyword} className={styles.suggestion} focusable>
                {keyword.name}
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Keywords;
