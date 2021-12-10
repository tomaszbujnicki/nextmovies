import React, { useState } from 'react';
import { PrimaryButton } from './Button';
import Cast from './Cast';
import Crew from './Crew';

import styles from './styles/CastAndCrew.module.css';

const CastAndCrew = ({ credits }) => {
  const [isCastDisplayed, setIsCastDisplayed] = useState(true);
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Full Cast & Crew</h2>
      <div className={styles.main}>
        <PrimaryButton onClick={() => setIsCastDisplayed(true)}>
          Cast
        </PrimaryButton>
        <PrimaryButton onClick={() => setIsCastDisplayed(false)}>
          Crew
        </PrimaryButton>
        {isCastDisplayed && (
          <div>
            <h3 className={styles.subtitle}>Cast</h3>
            <Cast cast={credits.cast} />
          </div>
        )}
        {!isCastDisplayed && (
          <div>
            <h3 className={styles.subtitle}>Crew</h3>
            <Crew crew={credits.crew} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CastAndCrew;
