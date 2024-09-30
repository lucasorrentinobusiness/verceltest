import Head from 'next/head';
import Link from 'next/link';
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
