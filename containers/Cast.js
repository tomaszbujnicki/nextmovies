import React, { useState } from 'react';
import PersonCard from '../components/PersonCard';
import PopUp from '../components/PopUp';
import Button from './../components/Button';

const Cast = ({ cast }) => {
  const shortCast = cast.slice(0, 12);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  if (!cast) return null;
  return (
    <div style={{ padding: 40 }}>
      <h2 style={{ fontSize: 32, paddingLeft: 40 }}>Cast</h2>
      <ul
        style={{
          display: 'flex',
          width: '100%',
          overflow: 'auto',
          padding: 20,
        }}
      >
        {shortCast.map((person) => (
          <li key={person.id} style={{ marginRight: 40 }}>
            <PersonCard person={person} />
          </li>
        ))}
        <li
          style={{
            flexBasis: '185px',
            height: 278,
            flexShrink: 0,
            display: 'flex',
            background: 'gray',
            borderRadius: '1rem',
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 40,
          }}
        >
          <Button
            style={{
              fontSize: 24,
              textAlign: 'center',
              width: '100%',
              height: '100%',
            }}
            onClick={() => setIsPopupOpen(true)}
          >
            View full
            <br />
            <span style={{ fontWeight: 700, fontSize: 32 }}>Cast</span>
          </Button>
        </li>
      </ul>
      <PopUp isOpen={isPopupOpen} setIsOpen={setIsPopupOpen}>
        <h2>Hello World!</h2>
      </PopUp>
    </div>
  );
};

export default Cast;
