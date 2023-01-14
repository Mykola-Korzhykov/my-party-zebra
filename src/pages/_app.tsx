import { GetServerSideProps } from 'next';
import { useEffect } from 'react';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import Head from 'next/head';
import AOS from 'aos';

import { hotjar } from 'react-hotjar'
import { GoogleAnalytics } from "nextjs-google-analytics";
import { Analytics } from '@vercel/analytics/react';

import axios from 'axios';
import api from '@shared/http';

import { Provider } from 'react-redux';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';

import store from '@store/store';

import IEnv from '@shared/interfaces/IEnv';
import IMeta from '@shared/interfaces/Data/IMeta';
import ILayout from '@shared/interfaces/Data/Layout/ILayout';
import ILocale from '@shared/interfaces/ILocale';
import MetaDTO from '@shared/dto/metaDTO';

import Layout from '@components/layout/Layout';

import themeColors from '@data/themeColors';

import 'aos/dist/aos.css';
import '@styles/global.scss';
import Script from 'next/script';

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
  const {siteName, title, description, theme, preview, favicon, appleTouchIcon} = new MetaDTO(metaData);

  const themeColorHEX = themeColors[theme.color];

  useEffect(() => {
    hotjar.initialize(parseInt(env.HJID), parseInt(env.HJSV), true);

    AOS.init({once: true});
    localStorage.removeItem('selectedPrograms');
    localStorage.removeItem('isDecor');
  }, []);

  return (
    <>
      <Head>
        {/* Theme Color */}
        <meta name="msapplication-navbutton-color" content={themeColorHEX} />
        <meta name="apple-mobile-web-app-status-bar-style" content={themeColorHEX} />

        {/* Manifest Site */}
        <link rel="manifest" href="/favicons/manifest.json" />

        {/* Icons */}
        <link rel="apple-touch-icon" href={appleTouchIcon.url} />
        <link rel="shortcut icon" href={favicon.url} />

        {/* Fonts */}
        <link rel="preload" href="/fonts/Zebra-Regular.woff2" as="font" type="font/woff2" crossOrigin="true" />
        <link rel="preload" href="/fonts/Zebra-Medium.woff2" as="font" type="font/woff2" crossOrigin="true" />
        <link rel="preload" href="/fonts/Zebra-Bold.woff2" as="font" type="font/woff2" crossOrigin="true" />
      </Head>

      <Script id="google-tag-manager" strategy="afterInteractive">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-K8RW5WL');`}
      </Script>

      <DefaultSeo
        title="App"
        titleTemplate={`%s | ${siteName}`}
        description={description}
        themeColor={themeColorHEX}
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
          <GoogleAnalytics trackPageViews />
          <Analytics />
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