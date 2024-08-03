import React from 'react';
import PersonCard from './PersonCard';
import styles from './styles/PersonList.module.css';

const PersonList = ({ people }) => {
  if (!Array.isArray(people) || !people.length) return null;
  return (
    <ul className={styles.List}>
      {people.map((person) => (
        <li key={person.credit_id} className={styles.ListItem}>
          <PersonCard {...person} cardType="horizontal" />
        </li>
      ))}
    </ul>
  );
};

export default PersonList;
