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
	 <Script
	        src="https://connect.facebook.net/en_US/sdk.js"
	        strategy="lazyOnload"
	        onLoad={() =>
	          console.log(`script loaded correctly, window.FB has been populated`)
	        }
	      />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>
          <a href="https://www.elkjop.no">{name}!</a>
        </h1>
	
	<div>{children}</div>

      </main>
    </div>
 );
}
