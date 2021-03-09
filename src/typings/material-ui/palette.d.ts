// import { TypeText } from '@material-ui/core/styles/createPalette';

interface MuiThemeLinkPalette {
  primary: string;
  secondary: string;
}

interface MuiThemeButtonPalette {
  inactive: string;
  hover: string;
}

declare module '@material-ui/core/styles/createPalette' {
  interface TypeText {
    accent?: string;
  }

  interface Palette {
    text: MuiThemeTextPalette;
    link: MuiThemeLinkPalette;
    button: MuiThemeButtonPalette;
  }

  interface PaletteOptions {
    text: MuiThemeTextPalette;
    link: MuiThemeLinkPalette;
    button: MuiThemeButtonPalette;
  }
}
