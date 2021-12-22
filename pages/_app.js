import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useRef } from 'react';
import Menu from '../components/Menu';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const ref = useRef(null);

  useEffect(() => {
    const handleRouteChange = () => ref.current.scrollIntoView();

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <div className="app" id="app">
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <main>
        <div className="page" ref={ref}>
          <Component {...pageProps} />
        </div>
      </main>

      <nav>
        <Menu />
      </nav>
    </div>
  );
}

export default MyApp;
