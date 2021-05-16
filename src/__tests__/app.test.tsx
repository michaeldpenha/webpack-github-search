import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from '../app';
import { MockedProvider } from '@apollo/react-testing';
import { Router } from 'react-router-dom';
import { StateProvider } from 'src/state/context';
import { IAppContextProps } from 'src/state/interface';
import { appReducer } from 'src/state/reducer';
import { createMemoryHistory } from 'history';
import renderEl from 'src/testUtils/tests-render';
import { apolloClient } from 'utils/apollo-client';

const history = createMemoryHistory();

const appContext: IAppContextProps = {
  headerInfo: {
    title: '',
  },
};

const setup = () => {
  const el = renderEl(
    <Router history={history}>
      <MockedProvider>
        <StateProvider initialState={appContext} reducer={appReducer}>
          <App />
        </StateProvider>
      </MockedProvider>
    </Router>,
  );

  return el;
};

describe('Aplication Test', () => {
  it('renders without crashing', () => {
    act(() => {
      setup();
    });

    const el = screen.getByTestId('header-title');
    expect(el).toBeInTheDocument();
  });

  it('should render home page when bad route is passed', () => {
    history.push('/test');

    act(() => {
      setup();
    });
    expect(screen.getByTestId('drop-down-container')).toBeInTheDocument();
  });
});
