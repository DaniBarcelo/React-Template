import i18n from 'i18next'
import Backend from 'i18next-xhr-backend'
import { initReactI18next } from 'react-i18next'

import detector from "i18next-browser-languagedetector"

//Import any language file with an alias
import en from './en.json'
import es from './es.json'

//add all the languages to the bundle
const resources = {
  en: { translation: en },
  es: { translation: es }
};
 
i18n
  .use(detector) //detect browser language
  .use(Backend) // XHR requests
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    backend: {
      loadPath: "./{{lng}}.json"
    },
    //lng: "es",
    fallbackLng: "es", // use en if detected lng is not available
    keySeparator: false, //'.',
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react: {
      wait: true,
      useSuspense: false //   <---- this will do the magic
    }
  });

export default i18n