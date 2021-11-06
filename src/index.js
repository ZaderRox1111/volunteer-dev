import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './views/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#e91e63',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
  typography: { 
    useNextVariants: true
  }
});

ReactDOM.render(
  <ThemeProvider theme = { theme }>
    <BrowserRouter>
      <App /> {/* The various pages will be displayed by the `Main` component. */}
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
