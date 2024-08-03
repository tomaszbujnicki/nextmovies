import React from 'react';
import NextHead from 'next/head';

const Head = ({ title, fullTitle = 'NextMovies' }) => {
  const pageTitle = title ? `${title} - NextMovies` : fullTitle;
  return (
    <NextHead>
      <title>{pageTitle}</title>
    </NextHead>
  );
};

export default Head;
