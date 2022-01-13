import React, { useState } from 'react';
import styles from './styles/Paragraph.module.css';

const Paragraph = ({ text }) => {
  const isTooLong = text.length > 650;
  const [isExpanded, setIsExpanded] = useState(!isTooLong);
  const shortText = text.substring(0, 600) + '...';

  return (
    <p className={styles.root}>
      {isExpanded ? text : shortText}{' '}
      {isTooLong && (
        <button
          className={styles.button}
          onClick={() => setIsExpanded((prev) => !prev)}
        >
          {isExpanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </p>
  );
};

export default Paragraph;
