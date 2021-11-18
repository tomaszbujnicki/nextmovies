import Head from 'next/head';
import VerticalMenu from '../containers/VerticalMenu';

import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Component {...pageProps} />

      <VerticalMenu />
    </>
  );
}

export default MyApp;
