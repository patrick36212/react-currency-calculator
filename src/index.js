import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from './GlobalStyle';

import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} />
    <ThemeProvider >
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('calc')
);
