import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MetaHead from '@components/MetaHead'
import api from '@shared/http';

import FirstScreen from '@components/screens/home/FirstScreen/FirstScreen';
import Services from '@components/screens/home/Services/Services'
import SomeList from '@components/ui/SomeList/SomeList'

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const pageContent = await api.get(`/page-home?locale=${locale}`);
  const someList = await api.get(`/some-list-button?locale=${locale}`);

  return {props: {content: pageContent, someList}};
}

const Home: NextPage<any> = ({content, someList}) => {
  const {pageTitle, firstScreen, services, features} = content;

  return (
   <>
    <NextSeo title={pageTitle} openGraph={{title: firstScreen.title, description: firstScreen.description}} />

    <FirstScreen data={firstScreen} />
    <Services data={services} />
    <SomeList data={features} buttons={someList.buttons} />
   </>
  )
}

export default Home;