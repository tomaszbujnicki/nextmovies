import React, { useEffect, useState } from 'react';
import PersonCard from '../components/PersonCard';
import PopupCard from '../components/PopupCard';
import Section from '../components/Section';
import Button from './../components/Button';
import styles from './Cast.module.css';

const Cast = ({ cast }) => {
  const [isPopupCardOpen, setIsPopupCardOpen] = useState(false);

  useEffect(() => {
    setIsPopupCardOpen(false);
  }, [cast]);

  if (!cast) return null;
  return (
    <Section title="Cast">
      <CastPreview cast={cast.slice(0, 12)} />

      <FullCastButton clickHandler={() => setIsPopupCardOpen(true)} />

      <PopupCard isOpen={isPopupCardOpen} setIsOpen={setIsPopupCardOpen}>
        <FullCast cast={cast} />
      </PopupCard>
    </Section>
  );
};

export default Cast;

const FullCastButton = ({ clickHandler }) => (
  <Button className={styles.button} onClick={clickHandler}>
    View full Cast & Crew
  </Button>
);

const CastPreview = ({ cast }) => (
  <ul className={styles.shortList}>
    {cast.map((person) => (
      <li key={person.id} style={{ marginRight: 40 }}>
        <PersonCard person={person} />
      </li>
    ))}
  </ul>
);

const FullCast = ({ cast }) => {
  return (
    <div>
      <h2>Full cast & crew</h2>
      <ul className={styles.shortList}>
        {cast.map((person) => (
          <li key={person.id} style={{ marginRight: 40 }}>
            <PersonCard person={person} />
          </li>
        ))}
      </ul>
    </div>
  );
};
