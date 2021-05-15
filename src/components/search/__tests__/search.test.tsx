import { cleanup, fireEvent } from '@testing-library/react';
import React from 'react';
import renderEl from 'src/testUtils/tests-render';
import Search from '..';

const setup = () => {
  const onInputChange = jest.fn();
  const onFocus = jest.fn();
  const onInputClick = jest.fn();
  const el = renderEl(
    <Search defaultValue={'test'} onInputChange={onInputChange} onFocus={onFocus} />,
  );
  return {
    ...el,
    onInputChange,
    onFocus,
  };
};

beforeEach(cleanup);

describe('Search component', () => {
  it('render the compoenent', () => {
    const { getByTestId } = setup();

    expect(getByTestId('search')).toHaveValue('test');
  });

  it('should trigger the change event', () => {
    const { getByTestId, onInputChange, onFocus } = setup();
    const el = getByTestId('search');

    fireEvent.change(el, { target: { value: '23' } });
    expect(el).toHaveValue('23');
    expect(onInputChange).toHaveBeenCalled();

    fireEvent.focus(el);
    expect(onFocus).toHaveBeenCalled();

    fireEvent.click(el);
    expect(onInputChange).toHaveBeenCalled();
  });
});
