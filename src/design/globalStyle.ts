import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Rubik');

  * {
    margin: 0px;
    padding: 0px;
  }
  
  body {
    display: flex;
    background-color: white;
  }
`;
