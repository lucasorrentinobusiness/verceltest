import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

const name = 'Elkjop next ECOM';

export default function Layout({ children }) {
  return (

     <div className={styles.container}>
      <Head>
	<script src="https://cdn.signalfx.com/o11y-gdi-rum/latest/splunk-otel-web.js" crossorigin="anonymous"></script>
	<script>
	   SplunkRum.init({
	      realm: 'eu1',
	      rumAccessToken: 'UguMGKzi8yrquTbVeoGd9Q',
	      applicationName: 'verceltest',
	      version: 'latest',
	      deploymentEnvironment: 'test'
	   });
	</script>
        <title>Elkjop Next App</title>
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
