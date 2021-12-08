import React from 'react';
import PersonCard from './PersonCard';

import styles from './styles/CastAndCrew.module.css';

const CastAndCrew = ({ credits }) => {
  console.log(credits);
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Cast & crew</h2>
      <div className={styles.main} style={{ color: 'red' }}>
        <Cast cast={credits.cast} />
        <Crew crew={credits.crew} />
      </div>
    </div>
  );
};

export default CastAndCrew;

const Cast = ({ cast }) => {
  if (!Array.isArray(cast) || !cast.length) return null;
  return (
    <div className={styles.cast}>
      <h3 className={styles.title}>Cast</h3>
      <ul className={styles.castList}>
        {cast.map((person) => (
          <PersonCard key={person.credit_id} {...person} />
        ))}
      </ul>
    </div>
  );
};

const Crew = ({ crew }) => {
  if (!Array.isArray(crew) || !crew.length) return null;

  const { primary, secondary } = sortCrew(crew);

  return (
    <div className={styles.crew}>
      <h3 className={styles.title}>Crew</h3>
      <PrimaryCrew primary={primary} />
      {/*       <ul className={styles.castList}>
        {secondary.map((person) => (
          <li key={person.id + person.job}>
            {person.name} - {person.job}
          </li>
        ))}
      </ul> */}
    </div>
  );
};

const PrimaryCrew = ({ primary }) => {
  const crew = [
    {
      name: 'Director',
      arr: primary['Director'],
    },
    {
      name: 'Writer',
      arr: primary['Screenplay'],
    },
    {
      name: 'Editor',
      arr: primary['Editor'],
    },
    {
      name: 'Cinematography',
      arr: primary['Director of Photography'],
    },
    {
      name: 'Music',
      arr: primary['Original Music Composer'],
    },
    {
      name: 'Production Design',
      arr: primary['Production Design'],
    },
    {
      name: 'Art Direction',
      arr: primary['Art Direction'],
    },
    {
      name: 'Costumes',
      arr: primary['Costume Design'],
    },
  ];

  return (
    <>
      {crew.map(
        (type) =>
          type.arr.length > 0 && (
            <p key={type.name}>
              {type.name}
              {': '}
              {type.arr.map((person) => (
                <PersonCard
                  key={person.credit_id}
                  cardType="horizontal"
                  {...person}
                />
              ))}
            </p>
          )
      )}
    </>
  );
};

const sortCrew = (crew) => {
  const primary = {
    'Editor': [],
    'Director': [],
    'Screenplay': [],
    'Art Direction': [],
    'Costume Design': [],
    'Production Design': [],
    'Director of Photography': [],
    'Original Music Composer': [],
  };

  const secondary = {
    'Art': [],
    'Crew': [],
    'Sound': [],
    'Camera': [],
    'Actors': [],
    'Writing': [],
    'Editing': [],
    'Lighting': [],
    'Directing': [],
    'Production': [],
    'Visual Effects': [],
    'Costume & Make-Up': [],
  };

  crew.forEach((e) => {
    if (e.job in primary) {
      primary[e.job].push(e);
    } else {
      secondary[e.department].push(e);
    }
  });
  return { primary, secondary };
};
