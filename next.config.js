/** @type {import('next').NextConfig} */

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

  return {
    reactStrictMode: true,
    swcMinify: true,
    i18n: {
      locales: localesCodes,
      defaultLocale: defaultLocaleCode,
      localeDetection: false
    },
    env: {
      API_URL: process.env.API_URL,
      UPLOADS_URL: process.env.UPLOADS_URL
    }
  }
}

module.exports = getConfig();