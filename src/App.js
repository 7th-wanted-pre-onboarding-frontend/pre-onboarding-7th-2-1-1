import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './components/GlobalStyle';
import Router from './components/Router';
import theme from './utils/constants/theme';

function App() {
  return (
    <div className='App'>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Router />
      </ThemeProvider>
    </div>
  );
}

export default App;
