import Head from 'next/head';
import React from 'react';
import Menu from '../components/Menu';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className="app" id="app">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <Component {...pageProps} />
      </main>

      <nav>
        <Menu />
      </nav>
    </div>
  );
}

export default MyApp;
