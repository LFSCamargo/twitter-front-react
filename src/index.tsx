import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Router from '~/router';
import { Theme, GlobalStyle } from '~/design';
import serviceWorker from '~/config/serviceWorker';

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
