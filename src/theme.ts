import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

export const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        // primary: {
        //   main: '#ff5252',
        // }
      },
      // spacing: (factor) => `${0.25 * factor}rem`
    },
    dark: {
      palette: {
        // primary: {
        //   main: '#fff',
        // },
      },
      // spacing: (factor) => `${0.25 * factor}rem`
    },
  },
});