import { GetServerSideProps } from 'next';
import App, { AppContext, AppInitialProps, AppProps } from 'next/app'
import Head from 'next/head';
import api from '@shared/http';

import '../styles/globals.css'
import MetaDTO from '@shared/dto/metaDto';

type AppOwnProps = {metaData: any}

const CustomApp = ({Component, pageProps, metaData}: any) => {
  const {title, description, themeColor, url,
         preview, favicon, 
         appleTouchIcon, appleTouchIcon152, appleTouchIcon167} = new MetaDTO(metaData);

  return (
    <>
      <Head>
        {/* Meta base */}
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="theme-color" content={themeColor} />
        <meta name="msapplication-navbutton-color" content={themeColor} />
        <meta name="apple-mobile-web-app-status-bar-style" content={themeColor} />

        {/* Open Graph meta */}
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={preview.url} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Twitter meta */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={preview.url} />

        {/* Favicon */}
        <link rel="apple-touch-icon" href={appleTouchIcon.url} />
        <link rel="apple-touch-icon" href={appleTouchIcon152.url} sizes="152x152" />
        <link rel="apple-touch-icon" href={appleTouchIcon167.url} sizes="167x167" />
        <link rel="apple-touch-icon" href={appleTouchIcon.url} sizes="180x180" />
        <link rel="shortcut icon" href={favicon.url} />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

CustomApp.getInitialProps = async (
  context: AppContext
): Promise<AppOwnProps & AppInitialProps> => {
  const appProps = await App.getInitialProps(context);

  const {router} = context;
  const {locale} = router;

  const metaData = await api.get(`/meta?locale=${locale}`);
  
  return { ...appProps, metaData }
}

export default CustomApp;