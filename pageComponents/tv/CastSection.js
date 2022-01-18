import { useState, useRef } from 'react';
import Section from '../../components/Section';
import { PrimaryButton } from '../../components/Button';
import CardList from '../../components/CardList';
import Modal from '../../components/Modal';
import PersonList from '../../components/PersonList';
import Crew from '../../components/Crew';
import styles from './CastSection.module.css';
import ButtonGroup from '../../components/ButtonGroup';

export const CastSection = ({ credits }) => {
  return (
    <Section title="Cast">
      <CardList data={credits.cast.slice(0, 16)} type="person" />
      <CastSection__Modal credits={credits} />
    </Section>
  );
};
const CastSection__Modal = ({ credits }) => {
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
        style={{ marginTop: '1rem' }}
      >
        View full Cast & Crew
      </PrimaryButton>
      {isModalOpen && (
        <Modal
          forwardedRef={childRef}
          closeCallback={() => setIsModalOpen(false)}
          barContent={menuBar}
        >
          <CastAndCrew credits={credits} isCastDisplayed={isCastDisplayed} />
        </Modal>
      )}
    </>
  );
};

const CastAndCrew = ({ credits, isCastDisplayed }) => {
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Full Cast & Crew</h2>
      <div className={styles.main}>
        <div className={!isCastDisplayed ? styles.hide : null}>
          <h3 className={styles.subtitle}>Cast</h3>
          <PersonList people={credits.cast} />
        </div>

        <div className={isCastDisplayed ? styles.hide : null}>
          <h3 className={styles.subtitle}>Crew</h3>
          <Crew crew={credits.crew} />
        </div>
      </div>
    </div>
  );
};
