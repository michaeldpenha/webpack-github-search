import { ApolloProvider } from '@apollo/client';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import { apolloClient } from './utils/apollo-client';

ReactDOM.render(
  <ApolloProvider client={apolloClient}>
    <App />
  </ApolloProvider>,
  document.getElementById('root'),
);
