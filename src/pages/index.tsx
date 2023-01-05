import { useEffect } from 'react'
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MetaHead from '@components/MetaHead'
import api from '@shared/http';

import themeColors from '@data/themeColors';

import FirstScreen from '@components/screens/home/FirstScreen/FirstScreen';
import Services from '@components/screens/home/Services/Services'
import SomeList from '@components/screens/global/SomeList/SomeList'
import Gallery from '@components/screens/global/Gallery/Gallery'
import AgeGroups from '@components/screens/home/AgeGroups/AgeGroups'
import Offer from '@components/screens/global/Offer/Offer'
import Guarantees from '@components/screens/global/Guarantees/Guarantees'
import Reviews from '@components/screens/global/Reviews/Reviews'
import Faq from '@components/screens/global/Faq/Faq'

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const pageContent = await api.get(`/page-home?locale=${locale}`);
  const someList = await api.get(`/some-list-button?locale=${locale}`);
  const gallery = await api.get(`/gallery?locale=${locale}`);
  const offer = await api.get(`/offer?locale=${locale}`);
  const guarantees = await api.get(`/guarantee?locale=${locale}`);
  const reviews = await api.get(`/review?locale=${locale}`);
  const faq = await api.get(`/faq?locale=${locale}`);

  return {props: {content: pageContent, someList, gallery, offer, guarantees, reviews, faq}};
}

const Home: NextPage<any> = ({content, someList, gallery, offer, guarantees, reviews, faq}) => {
  const {meta, firstScreen, services, features, ageGroups} = content;

  const themeColor = meta.theme.color;
  const themeColorHEX = themeColors[themeColor];

  useEffect(() => {
    document.body.style.setProperty('--theme-color', themeColorHEX);
  });

  return (
   <>
    <NextSeo title={meta.pageTitle} openGraph={{title: firstScreen.title, description: firstScreen.description}} />

    <FirstScreen data={firstScreen} />
    <Services data={services} />
    <SomeList data={features} buttons={someList.buttons} />
    <Gallery data={gallery} />
    <AgeGroups data={ageGroups} />
    <Offer data={offer.content} />
    <Guarantees data={guarantees} />
    <Reviews data={reviews} />
    <Faq data={faq} themeColor={themeColor} />
    <Offer data={offer.content} />
   </>
  )
}

export default Home;