import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import Router from './router';
import serviceWorker from './config/serviceWorker';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Rubik');
  body {
    /* font-family: 'Rubik', sans-serif; */
    display: flex;
    background-color: white;
    margin: 0px !important;
    padding: 0px !important;
  }
`;

const Theme = {
  primary: '#1e74ff',
};

ReactDOM.render(
  <ThemeProvider theme={Theme}>
    <div>
      <GlobalStyle />
      <Router />
    </div>
  </ThemeProvider>,
  document.getElementById('root'),
);

serviceWorker();
