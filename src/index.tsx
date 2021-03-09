import { StrictMode } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { IntlProvider } from 'react-intl';

import { defaultLanguage, translations } from 'localization';

import { App } from './App';
import reportWebVitals from './reportWebVitals';

render(
  <StrictMode>
    <IntlProvider
      locale={defaultLanguage}
      messages={translations[defaultLanguage]}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </IntlProvider>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
