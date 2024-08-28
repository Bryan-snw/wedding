import '../styles/globals.css'
import Head from "next/head";
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/aos@2.3.4/dist/aos.js';
    script.onload = () => {
      AOS.init();
    };
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <Head>
        <title>Kevin & Gisela</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
