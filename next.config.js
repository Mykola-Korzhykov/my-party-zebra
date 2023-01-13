/** @type {import('next').NextConfig} */
const path = require('path');

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true
});

const getLocales = async () => {
  const response = await fetch(`${process.env.API_URL}/i18n/locales`);
  return await response.json();
}

const getLocalesCodes = (locales) => {
  const codes = [];
  locales.forEach(({code}) => (codes.push(code)));
  return codes;
}

const getDefaultLocale = (locales) => locales.filter(({isDefault}) => isDefault)[0].code;

const getConfig = async () => {
  const localesList = await getLocales();
  const localesCodes = await getLocalesCodes(localesList);
  const defaultLocaleCode = await getDefaultLocale(localesList);

  return withPWA({
    reactStrictMode: false,
    swcMinify: true,
    images: {domains: ['localhost', 'panel.mypartyzebra.com', 'mypartyzebra.com']},
    i18n: {
      locales: localesCodes,
      defaultLocale: defaultLocaleCode,
      localeDetection: false
    },
    env: {
      FRONTEND_URL: process.env.FRONTEND_URL,
      API_URL: process.env.API_URL,
      UPLOADS_URL: process.env.UPLOADS_URL,
      MAP_ACCESS_TOKEN: process.env.MAP_ACCESS_TOKEN,
      TG_BOT_TOKEN: process.env.TG_BOT_TOKEN,
      TG_CHAT_ID: process.env.TG_CHAT_ID
    },
    webpack: (config, { buildId, dev, isServer, defaultLoaders }) => {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@resources': path.resolve(__dirname, 'src/styles/resources'),
        '@variables': path.resolve(__dirname, 'src/styles/resources/variables'),
        '@mixins': path.resolve(__dirname, 'src/styles/resources/mixins'),
        '@rfs': path.resolve(__dirname, 'node_modules/rfs/scss')
      }

      return config;
    }
  })
}

module.exports = getConfig();