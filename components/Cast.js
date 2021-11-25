import React, { useEffect, useState } from 'react';
import PersonCard from './PersonCard';
import PopupCard from './PopupCard';
import Section from './Section';
import Button from './Button';
import { CardCarousel } from './Carousel';
import styles from './styles/Cast.module.css';

const Cast = ({ cast }) => {
  const [isPopupCardOpen, setIsPopupCardOpen] = useState(false);

  useEffect(() => {
    setIsPopupCardOpen(false);
  }, [cast]);

  if (!cast) return null;
  return (
    <Section title="Cast">
      <Preview cast={cast.slice(0, 12)} />

      <FullButton clickHandler={() => setIsPopupCardOpen(true)} />

      <PopupCard isOpen={isPopupCardOpen} setIsOpen={setIsPopupCardOpen}>
        <Full cast={cast} />
      </PopupCard>
    </Section>
  );
};

export default Cast;

const FullButton = ({ clickHandler }) => (
  <Button className={styles.button} onClick={clickHandler}>
    View full Cast & Crew
  </Button>
);

const Preview = ({ cast }) => (
  <CardCarousel>
    {cast.map((person) => (
      <div key={person.id}>
        <PersonCard person={person} />
      </div>
    ))}
  </CardCarousel>
);

const Full = ({ cast }) => {
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
