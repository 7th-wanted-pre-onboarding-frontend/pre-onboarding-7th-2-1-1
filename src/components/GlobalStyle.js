import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}
  body {
    font-family: 'Inter', sans-serif;
  }
  * {
    box-sizing: border-box;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
