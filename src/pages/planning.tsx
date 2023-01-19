import { useEffect } from 'react'
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import MetaHead from '@components/MetaHead'
import api from '@shared/http';
import UploadDTO from '@shared/dto/uploadDTO'

import themeColors from '@data/themeColors';

import Breadcrumbs from '@components/ui/Breadcrumbs/Breadcrumbs'
import Screen from '@components/screens/global/Screen/Screen'
import Services from '@components/screens/home/Services/Services'
import SomeList from '@components/screens/global/SomeList/SomeList'
import Gallery from '@components/screens/global/Gallery/Gallery'
import Offer from '@components/screens/global/Offer/Offer'
import Guarantees from '@components/screens/global/Guarantees/Guarantees'
import Reviews from '@components/screens/global/Reviews/Reviews'
import Faq from '@components/screens/global/Faq/Faq'
import getFullTitle from '@helpers/getFullTitle'

export const getStaticProps: GetStaticProps = async ({locale}) => {
  const pageContent = await api.get(`/page-planning?locale=${locale}`);
  const someList = await api.get(`/some-list-button?locale=${locale}`);
  const offer = await api.get(`/offer?locale=${locale}`);
  const guarantees = await api.get(`/guarantee?locale=${locale}`);
  const reviews = await api.get(`/review?locale=${locale}`);
  const faq = await api.get(`/faq?locale=${locale}`);

  return {props: {content: pageContent, someList, offer, guarantees, reviews, faq}};
}

const Planning: NextPage<any> = ({content, someList, offer, guarantees, reviews, faq}) => {
  const {meta, screen, planning, gallery} = content;
  const {title, colorTitle, colorTitlePlace, description} = screen;

  const fullTitle = getFullTitle(title, colorTitle, colorTitlePlace);

  const themeColor = meta.theme.color;
  const themeColorHEX = themeColors[themeColor];

  useEffect(() => {
    document.body.style.setProperty('--theme-color', themeColorHEX);
  });

  return (
   <>
    <MetaHead pageTitle={meta.pageTitle} title={fullTitle} description={description} themeColor={themeColorHEX} preview={new UploadDTO(meta.preview)} />

    <Breadcrumbs pageTitle={meta.pageTitle} previousPageTitle={meta.previousPageTitle} />
    <Screen data={screen} themeColor={themeColor} />
    <Gallery data={gallery} />
    <SomeList data={planning} buttons={someList.buttons} />
    <Offer data={offer.content} />
    <Guarantees data={guarantees} />
    <Reviews data={reviews} />
    <Faq data={faq} themeColor={themeColor} />
    <Offer data={offer.content} />
   </>
  )
}

export default Planning;