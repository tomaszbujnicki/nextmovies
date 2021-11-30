import React from 'react';
import PersonCard from './PersonCard';
import Section from './Section';
import Button from './Button';
import { CardCarousel } from './Carousel';
import { usePopup } from '../context/PopupProvider';
import styles from './styles/Cast.module.css';

const Cast = ({ cast }) => {
  const { setValue } = usePopup();

  if (!Array.isArray(cast) || !cast.length) return null;

  return (
    <Section title="Cast">
      <Preview cast={cast.slice(0, 12)} />

      <Button
        className={styles.button}
        onClick={() => setValue(<Popup cast={cast} />)}
      >
        View full Cast & Crew
      </Button>
    </Section>
  );
};

export default Cast;

const Preview = ({ cast }) => (
  <CardCarousel>
    {cast.map((person) => (
      <div key={person.id}>
        <PersonCard person={person} />
      </div>
    ))}
  </CardCarousel>
);

const Popup = ({ cast }) => {
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
