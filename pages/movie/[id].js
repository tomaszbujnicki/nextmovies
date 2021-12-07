import Head from '../../components/Head';
import Link from 'next/link';
import getData from '../../adapters/getData';
import redirect from '../../utilities/redirect';
import ProductionInfo from '../../components/ProductionInfo';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';
import Details from '../../components/Details';
import Hero from '../../components/Hero';
import Section from '../../components/Section';
import Button, { CloseButton } from '../../components/Button';
import CardList from '../../components/CardList';
import styles from './movie.module.css';
import Modal from '../../components/Modal';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

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
  const path = useRouter().asPath;
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    setIsModalOpen(false);
  }, [path]);

  return (
    <Section title="Cast">
      <CardList data={credits.cast} type="person" />

      <Button className={styles.button} onClick={() => setIsModalOpen(true)}>
        View full Cast & Crew
      </Button>
      {isModalOpen && (
        <Cast credits={credits} closeCallback={() => setIsModalOpen(false)} />
      )}
    </Section>
  );
};
