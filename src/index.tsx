import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import registerServiceWorker from './registerServiceWorker';
import Router from './Routing/Router';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Rubik');
  body {
    font-family: 'Rubik', sans-serif;
    display: flex;
    flex: 1;
    background-color: white;
  }
`;

const Theme = {
  primary: '#1e74ff',
}

ReactDOM.render(
  (
    <ThemeProvider theme={Theme}>
      <div>
        <GlobalStyle />
        <Router />
      </div>
    </ThemeProvider>
  ),
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
