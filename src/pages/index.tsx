import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MetaHead from '@components/MetaHead'
import api from '@shared/http';

import FirstScreen from '@components/screens/home/FirstScreen/FirstScreen';

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const pageContent = await api.get(`/page-home?locale=${locale}`);
  return {props: {content: pageContent}};
}

const Home: NextPage<any> = ({content}) => {
  const {pageTitle, firstScreen} = content;

  return (
   <>
    <NextSeo title={pageTitle} openGraph={{title: firstScreen.title, description: firstScreen.description}} />
    <FirstScreen data={firstScreen} />
   </>
  )
}

export default Home;