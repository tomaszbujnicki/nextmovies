import React from 'react';
import PersonCard from '../components/PersonCard';

const Cast = ({ cast }) => {
  const shortCast = cast.slice(0, 8);

  if (!cast) return null;
  return (
    <div>
      <ul style={{ display: 'flex', flexWrap: 'wrap' }}>
        {shortCast.map((person) => (
          <li key={person.id}>
            <PersonCard person={person} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;
