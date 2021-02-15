import React from 'react';
import reactDom from 'react-dom';
import { RouterApp } from './RouterApp';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3378af',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
  },
});


reactDom.render(

   <ThemeProvider theme={theme}>
      <RouterApp />
   </ThemeProvider>,
   document.getElementById('root')
);