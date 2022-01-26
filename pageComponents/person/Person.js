import Head from '../../components/Head';
import Image from '../../components/Image';
import styles from './Person.module.css';
import Paragraph from '../../components/Paragraph';
import CardList from '../../components/CardList';

const Person = ({ data }) => {
  console.log(data);

  const popularMovieCredits = getPopularCredits(
    data.movie_credits,
    data.known_for_department
  );
  const popularTvCredits = getPopularCredits(
    data.tv_credits,
    data.known_for_department
  );

  return (
    <>
      <Head title={data.name} />

      <div className={styles.root}>
        <div className={styles.PersonalInfoContainer}>
          <Poster data={data} />
          <PersonalInfo data={data} />
        </div>

        <div className={styles.MainInfoContainer}>
          <Header>
            <Title title={data.name} />
            <Subtitle subtitle={data.known_for_department} />
          </Header>

          {data.biography && (
            <Section>
              <Heading heading="Biography" />
              <Paragraph text={data.biography} />
            </Section>
          )}

          {popularMovieCredits && (
            <Section>
              <Heading heading="Popular Movies" />
              <CardList data={popularMovieCredits} type="movie" />
            </Section>
          )}

          {popularTvCredits && (
            <Section>
              <Heading heading="Popular TV-Shows" />
              <CardList data={popularTvCredits} type="tv" />
            </Section>
          )}
        </div>
      </div>
    </>
  );
};

export default Person;

const Poster = ({ data }) => {
  return (
    <div className={styles.Poster}>
      <Image
        id={data.profile_path}
        placeholder={`profile${data.gender}.svg`}
        size="h632"
        width={281}
        height={421}
        media="tmdb"
        layout="responsive"
        className={styles.Image}
        priority
      />
    </div>
  );
};

const Header = ({ children }) => (
  <header className={styles.header}>{children}</header>
);
const Title = ({ title }) => <h1 className={styles.title}>{title}</h1>;
const Subtitle = ({ subtitle }) => (
  <span className={styles.subtitle}>{subtitle}</span>
);
const Section = ({ children }) => (
  <section className={styles.section}>{children}</section>
);
const Heading = ({ heading }) => <h2 className={styles.heading}>{heading}</h2>;

const PersonalInfo = ({ data }) => (
  <div className={styles.PersonalInfo}>
    <dl className={styles.PersonalInfoList}>
      {data.birthday && (
        <>
          <dt>Birthday</dt>
          <dd>{data.birthday}</dd>
        </>
      )}
      {data.deathday && (
        <>
          <dt>Deathday</dt>
          <dd>{data.deathday}</dd>
        </>
      )}
      {data.place_of_birth && (
        <>
          <dt>Place of Birth</dt>
          <dd>{data.place_of_birth}</dd>
        </>
      )}
    </dl>
  </div>
);

const getPopularCredits = (credits, department) => {
  const isActor = department === 'Acting';
  const productions = isActor ? credits.cast : credits.crew;

  const uniqProductions = [
    ...new Map(productions.map((v) => [v.id, v])).values(),
  ];

  const popularProductions = uniqProductions.sort(
    (a, b) => b.popularity - a.popularity
  );

  return popularProductions.length > 0
    ? popularProductions.slice(0, 12)
    : undefined;
};
