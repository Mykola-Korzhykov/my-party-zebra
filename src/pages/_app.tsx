import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import Head from 'next/head';

import axios from 'axios';
import api from '@shared/http';

import { Provider } from 'react-redux';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';

import store from '@store/store';

import IEnv from '@shared/interfaces/IEnv';
import IMeta from '@shared/interfaces/Data/IMeta';
import ILayout from '@shared/interfaces/Data/ILayout';
import ILocale from '@shared/interfaces/ILocale';
import MetaDTO from '@shared/dto/metaDTO';

import Layout from '@components/layout/Layout';

import '@styles/global.scss';

interface AppOwnProps {
  env: IEnv,
  props: {
    metaData: IMeta,
    layoutData: ILayout
    localesData: ILocale[]
  }
}

const CustomApp = ({Component, pageProps, env, props}: AppOwnProps & AppProps) => {
  const router = useRouter();

  const {locale, pathname} = router;
  const url = `${env.FRONTEND_URL}/${locale}${pathname}`;

  const {metaData, layoutData, localesData} = props;
  const {siteName, title, description, themeColor, preview, favicon, appleTouchIcon} = new MetaDTO(metaData);

  useEffect(() => {
    document.body.style.setProperty('--theme-color', themeColor);
  });

  return (
    <>
      <Head>
        {/* Theme Color */}
        <meta name="msapplication-navbutton-color" content={themeColor} />
        <meta name="apple-mobile-web-app-status-bar-style" content={themeColor} />

        {/* Manifest Site */}
        <link rel="manifest" href="/favicons/manifest.json" />

        {/* Icons */}
        <link rel="apple-touch-icon" href={appleTouchIcon.url} />
        <link rel="shortcut icon" href={favicon.url} />
      </Head>

      <DefaultSeo
        title="App"
        titleTemplate={`%s | ${siteName}`}
        description={description}
        themeColor={themeColor}
        openGraph={{
          type: 'website',
          images: [{url: preview.url, alt: preview.alt}],
          title, description,
          locale, url, siteName
        }}
        twitter={{
          cardType: 'summary_large_image'
        }}
      />

      <Provider store={store}>
        <Layout data={{meta: metaData, layout: layoutData, locales: localesData}}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </>
  );
};

CustomApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  const appProps = await App.getInitialProps(context);

  const {router} = context;
  const {locale} = router;
  
  const locales = await axios.get(`${process.env.API_URL}/i18n/locales`);
  
  const localesData: ILocale[] = await locales.data;
  const metaData: IMeta = await api.get(`/meta?locale=${locale}`);
  const layoutData: ILayout = await api.get(`/layout?locale=${locale}`);
  
  return { ...appProps, env: process.env, props: {metaData, layoutData, localesData} }
}

export default CustomApp;