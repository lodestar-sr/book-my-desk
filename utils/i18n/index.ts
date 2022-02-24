import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import dz from './dz';
import nl from './nl';

const resources = {
  en: {
    translation: en,
  },
  dz: {
    translation: dz,
  },
  nl: {
    translation: nl,
  },
};

i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    resources,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {});

export default i18n;
