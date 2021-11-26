import Head from '../../components/Head';
import getData from '../../adapters/getData';
import redirect from '../../utilities/redirect';
import Image from '../../components/Image';
import styles from './person.module.css';

export async function getServerSideProps(context) {
  const id = context.params.id;

  const data = await getData(
    `person/${id}`,
    '&append_to_response=combined_credits,external_ids,images'
  );

  if (data) {
    return { props: { data } };
  }

  return redirect();
}

const Person = ({ data }) => {
  console.log(data);
  return (
    <>
      <Head title={data.name} />

      <div className={styles.main}>
        <PersonPoster data={data} />
        <h1>{data.name}</h1>
      </div>
    </>
  );
};

export default Person;

const PersonPoster = ({ data }) => {
  return (
    <div
      style={{
        padding: 20,
        border: '1px solid var(--violet)',
        borderRadius: 50,
      }}
    >
      <Image
        id={data.profile_path}
        placeholder={`profile${data.gender}`}
        size="h632"
        width={421}
        height={632}
        media="tmdb"
        style={{ borderRadius: 40, overflow: 'hidden' }}
      />
    </div>
  );
};
