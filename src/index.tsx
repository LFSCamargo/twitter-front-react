import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import Router from '~/router';
import { client } from '~/config';
import { DarkTheme, GlobalStyle } from '~/design';
import serviceWorker from '~/config/serviceWorker';
import { ApolloProvider } from '@apollo/client';
import { ThemeSwitcherProvider } from './stores';

const App = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <div>
        <GlobalStyle />
        <Router />
      </div>
    </ThemeProvider>
  );
};

ReactDOM.render(
  <ApolloProvider client={client}>
    <ThemeSwitcherProvider>
      <App />
    </ThemeSwitcherProvider>
  </ApolloProvider>,
  document.getElementById('root'),
);

serviceWorker();
