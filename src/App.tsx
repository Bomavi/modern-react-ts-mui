import { FC } from 'react';

import CSSBaseline from '@material-ui/core/CssBaseline';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

import { lightTheme } from 'themes';
import { Router } from 'router';
import { Header } from 'components/layouts/Header';
import { Content } from 'components/layouts/Content';

const App: FC = () => {
  return (
    <div data-testid="App">
      <ThemeProvider theme={lightTheme}>
        <CSSBaseline />
        <Header />
        <Content>
          <Router />
        </Content>
      </ThemeProvider>
    </div>
  );
};

export { App };
