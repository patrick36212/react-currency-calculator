import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
