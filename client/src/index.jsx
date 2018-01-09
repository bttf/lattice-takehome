import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider, withApollo } from 'react-apollo';
import App from './App';
import './index.scss';

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:3000/' }),
  cache: new InMemoryCache(),
});

const AppWithApollo = withApollo(App);

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppWithApollo />
  </ApolloProvider>,
  document.getElementById('root')
);
