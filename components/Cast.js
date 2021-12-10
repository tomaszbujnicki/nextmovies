import React from 'react';
import PersonCard from './PersonCard';
import styles from './styles/Cast.module.css';

const Cast = ({ cast }) => {
  if (!Array.isArray(cast) || !cast.length) return null;
  return (
    <div>
      <ul className={styles.List}>
        {cast.map((person) => (
          <li key={person.credit_id} className={styles.ListItem}>
            <PersonCard {...person} cardType="horizontal" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
