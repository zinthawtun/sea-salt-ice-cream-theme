import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      50: '#e0f7fa',
      100: '#b2ebf2',
      200: '#80deea',
      300: '#4dd0e1',
      400: '#26c6da',
      500: '#00bcd4',
      600: '#00acc1',
      700: '#0097a7',
      800: '#00838f',
      900: '#006064'
    },
    secondary: {
      main: '#e0f7f',
    },
    success: {
      main: '#226d00'
    },
    error: {
      main: '#ba1a1a'
    },
    warning: {
      main: 'rgb(222, 246, 39)'
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  }
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      50: '#0c4a6e',
      100: '#075985',
      200: '#0369a1',
      300: '#0284c7',
      400: '#0ea5e9',
      500: '#38bdf8',
      600: '#7dd3fc',
      700: '#bae6fd',
      800: '#e0f2fe',
      900: '#f0f9ff',
    },
    secondary: {
      main: '#e0f7f',
    },
    success: {
      main: '#226d00'
    },
    error: {
      main: '#ba1a1a'
    },
    warning: {
      main: 'rgb(222, 246, 39)'
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  }
});

export { lightTheme, darkTheme };