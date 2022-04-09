import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

 body, html {
   height: 100%;
   width: 100%;
 }
`;

export default GlobalStyles;
