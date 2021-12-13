import Head from '../../components/Head';
import Image from '../../components/Image';
import Hero from '../../components/Hero';
import styles from './Person.module.css';

const Person = ({ data }) => {
  console.log(data);
  const sorted = data.combined_credits.cast.sort(
    (a, b) => b.popularity - a.popularity
  );
  /* 
  popularity: 18.618
​​​
poster_path: "/cwNeP2fz0vqNhmKIcSgLD0xc6g2.jpg"
​​​
release_date: "2003-09-26"
​​​
title: "The Rundown"
​​​
video: false
​​​
vote_average: 6.4
​​​
vote_count: 1497
  */
  console.log(sorted);

  return (
    <>
      <Head title={data.name} />

      <Hero style={{ display: 'flex' }}>
        <PersonalInfo data={data} />
        <MainInfo data={data} />
      </Hero>
    </>
  );
};

export default Person;

const PersonalInfo = ({ data }) => {
  return (
    <div className="" style={{ padding: 50, width: '30%' }}>
      <Poster data={data} />
    </div>
  );
};

const MainInfo = ({ data }) => {
  return (
    <div className="" style={{ paddingTop: '5rem' }}>
      <h1 className={styles.name}>{data.name}</h1>
      <p className={styles.job}>{data.known_for_department}</p>
      {data.biography && (
        <>
          <h2>Biography</h2>
          <p>{data.biography}</p>
        </>
      )}
    </div>
  );
};

const Poster = ({ data }) => {
  return (
    <div
      style={{
        padding: 20,
        width: 321,
        border: '1px solid var(--primary)',
        borderRadius: 50,
        display: 'inline-block',
      }}
    >
      <Image
        id={data.profile_path}
        placeholder={`profile${data.gender}.svg`}
        size="h632"
        width={281}
        height={421}
        media="tmdb"
        className={styles.Image}
      />
    </div>
  );
};
