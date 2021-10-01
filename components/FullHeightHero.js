import React from 'react';

const FullHeightHero = ({ children, style }) => {
  return (
    <div style={{ ...style, height: '100%', width: '100%' }}>
      {children}
      <style global jsx>{`
        html,
        body,
        div#__next {
          height: 100%;
        }
      `}</style>
    </div>
  );
};

export default FullHeightHero;
