import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import Router from './components/Router';
import CarsProvider from './utils/contexts/CarProvider';
import theme from './utils/constants/theme';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <CarsProvider>
          <Router />
        </CarsProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
