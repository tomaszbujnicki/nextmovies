import React, { useEffect, useState } from 'react';
import Section from '../components/Section';
import Button from './../components/Button';
import styles from './styles/Recommendations.module.css';
import Link from 'next/link';

const Recommendations = ({ data }) => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const list = isCollapsed ? data.slice(0, 4) : data;

  useEffect(() => {
    setIsCollapsed(true);
  }, [data]);

  if (!list) return null;
  return (
    <Section title="Recommendations">
      <MyList list={list}></MyList>
      {isCollapsed && (
        <ViewMoreButton clickHandler={() => setIsCollapsed(false)} />
      )}
    </Section>
  );
};

export default Recommendations;

const ViewMoreButton = ({ clickHandler }) => (
  <Button className={styles.button} onClick={clickHandler}>
    View more
  </Button>
);

const MyList = ({ list }) => {
  console.log(list);
  if (!Array.isArray(list)) return null;
  return (
    <div>
      <ul style={{ color: 'var(--violet)' }}>
        {list.map((movie) => (
          <li key={movie.id}>
            <Link href={`/movie/${movie.id}`}>
              <a>{movie.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
