interface MuiThemeSizes {
  header: {
    height: number;
  };
  content: number;
  contentPadding: number;
}

declare type MUIThemeType = 'light' | 'dark';

declare global {
  declare module '@material-ui/core/styles/createMuiTheme' {
    interface Theme {
      sizes: MuiThemeSizes;
    }

    interface ThemeOptions {
      sizes: MuiThemeSizes;
    }
  }
}
