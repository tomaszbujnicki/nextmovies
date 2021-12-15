import { useState } from 'react';
import Section from '../../components/Section';
import { PrimaryButton } from '../../components/Button';
import CardList from '../../components/CardList';
import Modal from '../../components/Modal';
import Cast from '../../components/Cast';
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

  return (
    <>
      <PrimaryButton
        onClick={() => setIsModalOpen(true)}
        style={{ marginTop: '1rem' }}
      >
        View full Cast & Crew
      </PrimaryButton>
      {isModalOpen && (
        <Modal closeCallback={() => setIsModalOpen(false)}>
          <CastAndCrew credits={credits} />
        </Modal>
      )}
    </>
  );
};

const CastAndCrew = ({ credits }) => {
  const [isCastDisplayed, setIsCastDisplayed] = useState(true);
  return (
    <div className={styles.root}>
      <h2 className={styles.title}>Full Cast & Crew</h2>
      <div className={styles.main}>
        <ButtonGroup>
          <PrimaryButton onClick={() => setIsCastDisplayed(true)}>
            Cast
          </PrimaryButton>
          <PrimaryButton onClick={() => setIsCastDisplayed(false)}>
            Crew
          </PrimaryButton>
        </ButtonGroup>
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
