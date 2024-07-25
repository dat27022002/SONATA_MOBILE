import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../locales/translationEN.json';
import translationVI from '../locales/translationVI.json';
import translationKO from '../locales/translationKO.json';

import 'intl-pluralrules';

// the translations
const resources = {
    en: { translation: translationEN },
    vi: { translation: translationVI },
    ko: { translation: translationKO },
};

i18n.use(initReactI18next).init({
    comcompatibilityJSON: 'v3',
    resources,
    fallbackLng: 'en',
    lng: 'en',
    debug: false,
    interpolation: {
        escapeValue: false, // not needed for react as it escapes by default
    },
});

export default i18n;
