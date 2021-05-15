import React from 'react';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import { GlobalStyle } from './styles/global';
import Header from 'components/header';
import Layout from 'components/layout';
import Routes from 'components/router';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import { StateProvider } from './state/context';
import { appReducer } from './state/reducer';
import { IAppContextProps } from './state/interface';

const history = createBrowserHistory({
  basename: '/',
});

const App: React.FC = () => {
  const appContext: IAppContextProps = {
    headerInfo: {
      title: '',
    },
  };

  return (
    <Router history={history}>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StateProvider initialState={appContext} reducer={appReducer}>
          <Header />
          <Layout>
            <Routes />
          </Layout>
        </StateProvider>
      </ThemeProvider>
    </Router>
  );
};

export default App;
