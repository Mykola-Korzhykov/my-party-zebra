import { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

import api from '@shared/http';

export const getServerSideProps: GetServerSideProps = async ({locale}) => {
  const pageContent = await api.get(`/page-home?locale=${locale}`);
  return {props: {content: pageContent}};
}

const Home: NextPage<any> = ({content}) => {
  const {pageTitle, firstScreen} = content;

  return (
    <div className={styles.container}>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {firstScreen.title} <a href="https://instagram.com/">{firstScreen.colorTitle}</a>
        </h1>

        <p className={styles.description}>
          {firstScreen.description}
        </p>
      </main>
    </div>
  )
}

export default Home;