import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Script from 'next/script';

const name = 'Elkjop next ECOM';

export default function Layout({ children }) {
  return (

     <div className={styles.container}>
      <Head>
        <title>Elkjop Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
       <Script
	        src="https://cdn.signalfx.com/o11y-gdi-rum/latest/splunk-otel-web.js"
	        strategy="lazyOnload"
	        onLoad={() =>
	          console.log(`script loaded correctly, window.FB has been populated`)
	        }
	/>
      <main>
        <h1 className={styles.title}>
          <a href="https://www.elkjop.no">{name}!</a>
        </h1>
	
	<div>{children}</div>

      </main>
    </div>
 );
}
