import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import home_en from './locales/en/home.json';
import home_vn from './locales/vn/home.json';

const languages = ['en', 'vn'];

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en', // use et if detected lng is not available
  saveMissing: true, // send not translated keys to endpoint
  debug: true,
  whitelist: languages,

  react: {
    useSuspense: false,
  },
  resources: {
    en: {
      home: home_en,
    },
    vn: {
      home: home_vn,
    },
  },
});

export default i18n;
