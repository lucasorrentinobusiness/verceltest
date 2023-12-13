import Link from 'next/link';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../components/layout';

export default function FirstPost() {
  return (
   <Layout>
      <h1>Ciao again!</h1>
      <h2>
        <Link href="/">Go back home</Link>
      </h2>
   </Layout>
  );
}