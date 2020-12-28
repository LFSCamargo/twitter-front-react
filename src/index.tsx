import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Router from '~/router';
import { client } from '~/config';
import { Theme, GlobalStyle } from '~/design';
import serviceWorker from '~/config/serviceWorker';
import { ApolloProvider } from '@apollo/client';

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={Theme}>
      <div>
        <GlobalStyle />
        <Router />
      </div>
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);

serviceWorker();
