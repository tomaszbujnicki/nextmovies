import { Analytics } from '@vercel/analytics/react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';
import Menu from '../components/Menu';
import SearchBar from '../components/SearchBar';
import '../styles/styles.scss';

function MyApp({ Component, pageProps }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const router = useRouter();
  const ref = useRef(null);

  useEffect(() => {
    const handleRouteChange = () => {
      ref.current.scrollIntoView();
      setIsSearchOpen(false);
    };

    router.events.on('routeChangeComplete', handleRouteChange);

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <div className="app" id="app">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <main>
          <SearchBar
            isOpen={isSearchOpen}
            closeCallback={() => setIsSearchOpen(false)}
          />

          <div className="page" ref={ref}>
            <Component {...pageProps} />
          </div>
        </main>

        <nav>
          <Menu setIsSearchOpen={setIsSearchOpen} />
        </nav>
      </div>
      <Analytics />
    </>
  );
}

export default MyApp;
