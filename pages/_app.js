import Head from 'next/head';
import Menu from '../containers/Menu';

import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <Component {...pageProps} />

      <Menu />
    </div>
  );
}

export default MyApp;
