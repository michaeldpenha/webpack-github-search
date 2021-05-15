import React from 'react';
import { act, render, screen } from '@testing-library/react';
import App from '../app';
import { MockedProvider } from '@apollo/react-testing';

it('renders without crashing', () => {
  act(() => {
    render(
      <MockedProvider>
        <App />
      </MockedProvider>,
    );
  });

  const el = screen.getByTestId('header-title');
  expect(el).toBeInTheDocument();
});
