import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './App';
import { theme } from './assets/styles/theme';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { BrowserRouter } from 'react-router-dom';
import './assets/styles/fonts.css';
import 'font-awesome/css/font-awesome.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Provider store={store} >
          <App />
        </Provider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
