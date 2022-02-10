import React, { useState, useRef } from 'react';
import useFetch from '../../hooks/useFetch';
import { useField } from 'formik';
import styles from './Keywords.module.css';

const Keywords = () => {
  const [query, setQuery] = useState(null);
  const ref = useRef(null);
  const data = useFetch(query);
  const suggestionList = data?.results;

  const [field, meta, helpers] = useField('with_keywords');
  const { value } = meta;
  const { setValue } = helpers;

  const removeKeyword = (e) => {
    e.preventDefault();
    const name = e.target.textContent;
    const list = value.filter((keyword) => keyword.name != name);
    setValue(list);
  };

  const addKeyword = (e) => {
    e.preventDefault();

    const name = e.target.textContent;
    const isOnKeywordList = value.some((x) => x.name === name);
    if (!isOnKeywordList) {
      const keyword = suggestionList.find((keyword) => keyword.name === name);
      setValue([...value, keyword]);
    }
    ref.current.value = '';
    setQuery(null);
    setFocus();
  };

  const searchForSuggestions = (e) => {
    const value = e.target.value;
    setQuery(`search/keyword/&query=${value}`);
  };

  const setFocus = () => {
    ref.current.focus();
  };

  return (
    <div className={styles.root} onClick={setFocus}>
      <ul className={styles.keywordList}>
        {value.map((keyword) => (
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
