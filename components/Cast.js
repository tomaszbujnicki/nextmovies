import React from 'react';
import PersonCard from './PersonCard';
import styles from './styles/Cast.module.css';

const Cast = ({ data }) => {
  if (!Array.isArray(data) || !data.length) return null;

  return (
    <div>
      <h2>Full cast & crew</h2>
      <ul className={styles.shortList}>
        {data.map((person) => (
          <li key={person.id} style={{ marginRight: 40 }}>
            <PersonCard person={person} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
