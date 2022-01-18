import PersonList from './PersonList';
import styles from './styles/Crew.module.css';

const Crew = ({ crew }) => {
  if (!Array.isArray(crew) || !crew.length) return null;

  const { primary, secondary } = sortCrew(crew);

  return (
    <div className={styles.root}>
      <CrewList crew={primary} />
      <CrewList crew={secondary} />
    </div>
  );
};
const CrewList = ({ crew }) => {
  return (
    <div className={styles.primaryContainer}>
      {crew.map(
        (type) =>
          type.arr.length > 0 && (
            <section key={type.name} className={styles.section}>
              <h4 className={styles.sectionTitle}>{type.name}</h4>
              <PersonList people={type.arr} />
            </section>
          )
      )}
    </div>
  );
};
const sortCrew = (crew) => {
  const main = {
    'Editor': [],
    'Director': [],
    'Screenplay': [],
    'Art Direction': [],
    'Costume Design': [],
    'Production Design': [],
    'Director of Photography': [],
    'Original Music Composer': [],
  };

  const rest = {
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
    if (e.job in main) {
      main[e.job].push(e);
    } else {
      rest[e.department].push(e);
    }
  });

  const primary = [
    { name: 'Direction', arr: main['Director'] },
    { name: 'Screenplay', arr: main['Screenplay'] },
    { name: 'Film Editing', arr: main['Editor'] },
    { name: 'Cinematography', arr: main['Director of Photography'] },
    { name: 'Music', arr: main['Original Music Composer'] },
    { name: 'Production Design', arr: main['Production Design'] },
    { name: 'Art Direction', arr: main['Art Direction'] },
    { name: 'Costumes', arr: main['Costume Design'] },
  ];

  const secondary = [
    { name: 'Writing', arr: rest['Writing'] },
    { name: 'Production', arr: rest['Production'] },
    { name: 'Directing', arr: rest['Directing'] },
    { name: 'Camera', arr: rest['Camera'] },
    { name: 'Lighting', arr: rest['Lighting'] },
    { name: 'Sound', arr: rest['Sound'] },
    { name: 'Editing', arr: rest['Editing'] },
    { name: 'Visual Effects', arr: rest['Visual Effects'] },
    { name: 'Costume & Make-Up', arr: rest['Costume & Make-Up'] },
    { name: 'Art', arr: rest['Art'] },
    { name: 'Actors', arr: rest['Actors'] },
    { name: 'Crew', arr: rest['Crew'] },
  ];
  return { primary, secondary };
};

export default Crew;
