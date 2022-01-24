import { useState, useRef } from 'react';
import Section from '../../components/Section';
import { PrimaryButton } from '../../components/Button';
import CardList from '../../components/CardList';
import Modal from '../../components/Modal';
import PersonList from '../../components/PersonList';
import Crew from '../../components/Crew';
import styles from './CastSection.module.css';
import ButtonGroup from '../../components/ButtonGroup';

const CastSection = ({ cast, crew }) => {
  if (cast.length === 0) {
    return null;
  }

  return (
    <Section title="Cast">
      <CardList data={cast.slice(0, 16)} type="person" />
      <CastSection__Modal cast={cast} crew={crew} />
    </Section>
  );
};

export default CastSection;

const CastSection__Modal = ({ cast, crew }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCastDisplayed, setIsCastDisplayed] = useState(true);
  const childRef = useRef(null);

  const menuBar = (
    <ButtonGroup>
      <PrimaryButton
        onClick={() => {
          childRef.current.scrollTop = 0;
          setIsCastDisplayed(true);
        }}
      >
        Cast
      </PrimaryButton>
      <PrimaryButton
        onClick={() => {
          childRef.current.scrollTop = 0;
          setIsCastDisplayed(false);
        }}
      >
        Crew
      </PrimaryButton>
    </ButtonGroup>
  );

  return (
    <>
      <PrimaryButton
        onClick={() => setIsModalOpen(true)}
        style={{ marginTop: 'max(1rem, 1vw)' }}
      >
        View full Cast & Crew
      </PrimaryButton>
      {isModalOpen && (
        <Modal
          forwardedRef={childRef}
          closeCallback={() => setIsModalOpen(false)}
          barContent={menuBar}
        >
          <CastAndCrew
            cast={cast}
            crew={crew}
            isCastDisplayed={isCastDisplayed}
          />
        </Modal>
      )}
    </>
  );
};

const CastAndCrew = ({ cast, crew, isCastDisplayed }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Full Cast & Crew</h2>
      <div className={styles.main}>
        <div className={!isCastDisplayed ? styles.hide : null}>
          <h3 className={styles.subtitle}>Cast</h3>
          <PersonList people={cast} />
        </div>

        <div className={isCastDisplayed ? styles.hide : null}>
          <h3 className={styles.subtitle}>Crew</h3>
          <Crew crew={crew} />
        </div>
      </div>
    </div>
  );
};
