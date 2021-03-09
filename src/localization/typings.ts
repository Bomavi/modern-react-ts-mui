export enum Locales {
  EN = 'en',
}

export type TranslationsMap = {
  [key in Locales]: {
    [key: string]: string;
  };
};
