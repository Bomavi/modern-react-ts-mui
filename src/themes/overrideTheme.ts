import { Overrides } from '@material-ui/core/styles/overrides';
import { createMuiTheme } from '@material-ui/core/styles';

import { defaultTheme } from './defaultTheme';
import { themeColors } from './themeColors';

// ! NOTE usage: { overrides: overrideTheme.overrides }
export const overrideTheme = createMuiTheme({
  ...defaultTheme,

  overrides: {
    MuiContainer: {
      root: {
        '&.MuiContainer-maxWidthMd': {
          maxWidth:
            defaultTheme.sizes.content + defaultTheme.sizes.contentPadding * 2,
          paddingLeft: defaultTheme.sizes.contentPadding,
          paddingRight: defaultTheme.sizes.contentPadding,
        },
        '&.MuiContainer-maxWidthSm': {
          maxWidth: '100%',
          paddingLeft: 15,
          paddingRight: 15,
        },
      },
    },
    MuiButton: {
      root: {
        borderRadius: 0,
        '&.MuiButton-contained': {
          height: 44,
          paddingLeft: 50,
          paddingRight: 50,
        },
        '&.MuiButton-contained:hover': {
          backgroundColor: themeColors.black,
        },
        [defaultTheme.breakpoints.down('xs')]: {
          '&.MuiButton-contained': {
            paddingLeft: 30,
            paddingRight: 30,
          },
        },
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: themeColors.white,
        color: themeColors.black,
      },
      rounded: {
        borderRadius: 0,
      },
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 0,
        '& input::placeholder': {
          opacity: 0.9,
        },
        '& input:-webkit-autofill': {
          '-webkit-transition-delay': '99999s',
        },
        '& input:-webkit-autofill:active': {
          '-webkit-transition-delay': '99999s',
        },
        '& input:-webkit-autofill:focus': {
          '-webkit-transition-delay': '99999s',
        },
        '& input:-webkit-autofill:hover': {
          '-webkit-transition-delay': '99999s',
        },
      },
    },
  } as Overrides,
});
