import Head from 'next/head';
import React from 'react';
import Menu from '../components/Menu';
import Popup from '../components/Popup';
import { PopupProvider } from '../context/PopupProvider';
import '../styles/styles.scss';

const popupContent = <div>Tomek</div>;
const PopupContext = React.createContext(popupContent);

function MyApp({ Component, pageProps }) {
  return (
    <PopupProvider>
      <div className="app">
        <Head>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>

        <main>
          <Component {...pageProps} />
        </main>

        <nav>
          <Menu />
        </nav>

        <Popup />
      </div>
    </PopupProvider>
  );
}

export default MyApp;
