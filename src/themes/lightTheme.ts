import { createMuiTheme } from '@material-ui/core/styles';

import { defaultTheme } from './defaultTheme';
import { overrideTheme } from './overrideTheme';
import { themeColors } from './themeColors';

const lightTheme = createMuiTheme({
  ...defaultTheme,

  palette: {
    type: 'light',
    primary: {
      main: themeColors.black,
    },
    secondary: {
      main: themeColors.white,
    },
    success: {
      main: themeColors.green,
    },
    warning: {
      main: themeColors.yellow,
    },
    error: {
      main: themeColors.red,
    },
    text: {
      primary: themeColors.black,
      secondary: '#9B9B9B',
    },
    background: {
      paper: themeColors.white,
      default: themeColors.white,
    },
  },

  overrides: overrideTheme.overrides,
});

export { lightTheme };
