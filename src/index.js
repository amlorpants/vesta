import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material';
const rootel = document.getElementById('root');

const theme = createTheme({
  typography: {
    fontFamily: ['Roboto', 'DM Serif Display', 'Inter'].join(','),
  },
});

function render() {
  ReactDOM.render(
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>,
    rootel
  );
}

if (module.hot) {
  module.hot.accept('./App', function () {
    setTimeout(render + 200);
  });
}

render();
