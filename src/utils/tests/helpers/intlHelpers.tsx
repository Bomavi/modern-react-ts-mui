import { ReactElement } from 'react';
import { IntlProvider } from 'react-intl';

import { Locales, translations } from 'localization';

const defaultLocale = Locales.EN;

interface IntelProps {
  locale?: Locales;
}

const withIntl = (node: React.ReactElement) => ({
  locale = defaultLocale,
}: IntelProps): ReactElement => (
  <IntlProvider locale={locale} messages={translations[locale]}>
    {node}
  </IntlProvider>
);

export { withIntl };
