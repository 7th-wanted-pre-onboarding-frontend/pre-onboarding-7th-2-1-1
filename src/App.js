import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import Router from './components/Router';
import CarsProvider from './utils/contexts/CarProvider';
import theme from './utils/constants/theme';

function App() {
  return (
    <div className='App'>
      <HelmetProvider>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <CarsProvider>
            <Router />
          </CarsProvider>
        </ThemeProvider>
      </HelmetProvider>
    </div>
  );
}

export default App;
