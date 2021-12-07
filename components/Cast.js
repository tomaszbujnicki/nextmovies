import React from 'react';
import Modal from './Modal';
import { CloseButton } from './Button';
import styles from './styles/Cast.module.css';

const Cast = ({ credits, closeCallback }) => {
  //if (!Array.isArray(data) || !data.length) return null;

  return (
    <Modal>
      <div className={styles.main}>
        <h2 className={styles.title}>Cast & crew</h2>
        <Credits credits={credits} />
        <CloseButton onClick={closeCallback} className={styles.closeButton} />
      </div>
    </Modal>
  );
};

export default Cast;

const Credits = ({ credits }) => {
  const { cast, crew } = credits;
  return (
    <div className={styles.credits} style={{ color: 'red' }}>
      <div className={styles.cast}>
        <h3 className={styles.title}>Cast</h3>
        <ul className={styles.castList}>
          {cast.map((person) => (
            <li key={person.id}>{person.name}</li>
          ))}
        </ul>
      </div>
      <div className={styles.crew}>
        <h3 className={styles.title}>Crew</h3>
        <ul className={styles.castList}>
          {crew.map((person) => (
            <li key={person.id + person.job}>
              {person.name} - {person.job}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
