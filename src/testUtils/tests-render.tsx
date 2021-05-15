import { fireEvent, render, waitFor } from '@testing-library/react';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme';

const renderEl = (Component: JSX.Element) =>
  render(<ThemeProvider theme={theme}>{Component}</ThemeProvider>);

export default renderEl;
export { fireEvent, waitFor };
