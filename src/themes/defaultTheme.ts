import { createMuiTheme } from '@material-ui/core/styles';

// !NOTE usage: { propName: defaultTheme.propName }
export const defaultTheme = createMuiTheme({
  props: {
    MuiButton: {
      disableElevation: true,
    },
  },
  sizes: {
    header: {
      height: 143,
    },
    content: 780,
    contentPadding: 15,
  },
  zIndex: {
    modal: 999,
  },
});

defaultTheme.typography = {
  ...defaultTheme.typography,

  //   fontFamily: 'Proxima Nova Regular',
  fontSize: 16,
  [defaultTheme.breakpoints.down('sm')]: {
    fontSize: 14,
  },

  body1: {
    fontSize: 16,
    letterSpacing: 0,
    [defaultTheme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },

  body2: {
    fontSize: 14,
    letterSpacing: 0,
    [defaultTheme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },

  h2: {
    // fontFamily: 'Proxima Nova Bold',
    fontSize: 32,
    [defaultTheme.breakpoints.down('sm')]: {
      fontSize: 20,
    },
  },

  h3: {
    // fontFamily: 'Proxima Nova Bold',
    fontSize: 20,
    [defaultTheme.breakpoints.down('sm')]: {
      fontSize: 18,
    },
  },

  h4: {
    // fontFamily: 'Proxima Nova Bold',
    fontSize: 18,
    [defaultTheme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },

  h5: {
    // fontFamily: 'Proxima Nova SemiBold',
    fontSize: 18,
    [defaultTheme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },

  h6: {
    // fontFamily: 'Proxima Nova SemiBold',
    fontSize: 16,
    [defaultTheme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },

  button: {
    // fontFamily: 'Proxima Nova Bold',
    fontSize: 16,
    textTransform: 'none',
  },
};
