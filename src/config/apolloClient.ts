import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: 'http://localhost:8000/graphql',
});

const authLink = setContext((_, { headers }) => {
  if (!localStorage.getItem('token')) {
    return {
      ...headers,
    };
  }
  return {
    headers: {
      ...headers,
      Authorization: localStorage.getItem('token'),
    },
  };
});

export const client = new ApolloClient({
  link: ApolloLink.from([authLink.concat(httpLink)]),
  cache: new InMemoryCache(),
});
