import React, { useState } from 'react';
import { PrimaryButton } from './Button';
import styles from './styles/Article.module.css';

const Article = ({ title, text }) => {
  const isTooLong = text.length > 650;
  const [isExpanded, setIsExpanded] = useState(!isTooLong);
  const shortText = text.substr(0, 600) + '...';

  return (
    <article className={styles.root}>
      <h2 className={styles.title}>{title}</h2>

      <p className={styles.text}>{isExpanded ? text : shortText}</p>

      {isTooLong && (
        <PrimaryButton onClick={() => setIsExpanded((prev) => !prev)}>
          {isExpanded ? 'Show less' : 'Show more'}
        </PrimaryButton>
      )}
    </article>
  );
};

export default Article;
