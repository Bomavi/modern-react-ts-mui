import { Locales, TranslationsMap } from './typings';
import en from './messages/en.json';

const defaultLanguage = Locales.EN;

const translations: TranslationsMap = {
  en,
};

export { translations, defaultLanguage };
