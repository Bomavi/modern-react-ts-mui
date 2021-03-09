import { ReactElement } from 'react';

import { ThemeProvider } from '@material-ui/core/styles';

import { lightTheme } from 'themes';

const withTheme = (component: ReactElement): ReactElement => {
  return <ThemeProvider theme={lightTheme}>{component}</ThemeProvider>;
};

export { withTheme };
