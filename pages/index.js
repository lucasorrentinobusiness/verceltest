import Head from 'next/head';
import Link from 'next/link';
import Script from 'next/script';
import styles from '../styles/Home.module.css';
import Layout from '../components/layout';
import { getSortedPostsData } from '../lib/arraydata';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Dashboard() {
  return (
    <>
      <Script src="https://example.com/script.js" />
    </>
  )
}

export default function Home({ allPostsData }) {
  return (
   <Layout>
     <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              Title: {title}
              <br />
              Id: {id}
              <br />
              Date: {date}
            </li>
          ))}
        </ul>

     <p>
      Link module used <Link href="/posts/post">here!</Link>
     </p>
   </Layout>
  );
}
