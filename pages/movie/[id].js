import Head from '../../components/Head';
import Link from 'next/link';
import getData from '../../adapters/getData';
import redirect from '../../utilities/redirect';
import ProductionInfo from '../../components/ProductionInfo';
import CastAndCrew from '../../components/CastAndCrew';
import Reviews from '../../components/Reviews';
import Details from '../../components/Details';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import Button from '../../components/Button';
import CardList from '../../components/CardList';
import styles from './movie.module.css';
import Modal from '../../components/Modal';
import { useEffect, useState } from 'react';

export async function getServerSideProps(context) {
  const id = context.params.id;

  const data = await getData(
    `movie/${id}`,
    '&append_to_response=credits,videos,recommendations,images&include_image_language=null'
  );

  if (data) {
    return { props: { data } };
  }

  return redirect();
}

const Movie = ({ data }) => {
  console.log(data);
  return (
    <>
      <Head title={`${data.title} (${data.release_date?.slice(0, 4)})`} />

      <Hero
        img={data.backdrop_path}
        style={{
          display: 'flex',
          alignItems: 'flex-end',
        }}
      >
        <ProductionInfo movie={data} />
      </Hero>

      <Section title="Details">
        <Details />
      </Section>

      <Section title="Videos">
        <CardList
          data={data.videos?.results
            .map((video) => ({
              ...video,
              videoKey: video.key,
            }))
            .reverse()}
          type="video"
        />
      </Section>

      <CastSection credits={data.credits} />

      <Section title="Reviews">
        <Reviews />
      </Section>

      <Section title="Similar Movies">
        <CardList data={data.recommendations?.results} type="production" />
      </Section>
    </>
  );
};

export default Movie;

const CastSection = ({ credits }) => {
  return (
    <Section title="Cast">
      <CardList data={credits.cast} type="person" />
      <CastSection__Modal credits={credits} />
    </Section>
  );
};

const CastSection__Modal = ({ credits }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Button className={styles.button} onClick={() => setIsModalOpen(true)}>
        View full Cast & Crew
      </Button>
      {isModalOpen && (
        <Modal closeCallback={() => setIsModalOpen(false)}>
          <CastAndCrew credits={credits} />
        </Modal>
      )}
    </>
  );
};
