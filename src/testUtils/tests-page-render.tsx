import { MockedProvider } from '@apollo/react-testing';
import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import { Router, MemoryRouter, Route } from 'react-router-dom';
import { StateProvider } from 'src/state/context';
import { appReducer } from 'src/state/reducer';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';
import { createMemoryHistory } from 'history';
import { IAppContextProps } from 'src/state/interface';

const history = createMemoryHistory();

const appContext: IAppContextProps = {
  headerInfo: {
    title: '',
  },
};

const renderPageEl = (Component: JSX.Element, route: string, routePath: string, mocks) =>
  render(
    <ThemeProvider theme={theme}>
      <MockedProvider mocks={mocks}>
        <Router history={history}>
          <StateProvider initialState={appContext} reducer={appReducer}>
            <MemoryRouter initialEntries={[route]}>
              <Route path={routePath}>{Component}</Route>
            </MemoryRouter>
          </StateProvider>
        </Router>
      </MockedProvider>
    </ThemeProvider>,
  );

export default renderPageEl;
export { fireEvent, waitFor };
