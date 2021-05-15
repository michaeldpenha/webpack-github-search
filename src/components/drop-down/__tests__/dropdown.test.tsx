import React from 'react';
import { act } from 'react-dom/test-utils';
import { STATUS_OPTIONS } from 'src/constants';
import { IDropDown, IDropDownData } from 'src/interface';
import renderEl, { fireEvent } from 'src/testUtils/tests-render';
import DropDown from '..';

const setup = ({ data }: IDropDown) => renderEl(<DropDown data={data} defaultValue="Open" />);

describe('Drop Down component', () => {
  it('renders the dropdwon component', () => {
    const { getByTestId, queryByTestId } = setup({
      data: STATUS_OPTIONS,
    });
    const dropDownEl = getByTestId('drop-down-selected-value');

    expect(getByTestId('drop-down-container')).toBeVisible();
    expect(dropDownEl).toHaveTextContent('Open');

    fireEvent.click(dropDownEl);
    expect(queryByTestId('drop-down-list')).toBeInTheDocument();
    fireEvent.click(queryByTestId('drop-down-1'));

    expect(dropDownEl).toHaveTextContent('Closed');
    expect(queryByTestId('drop-down-list')).not.toBeInTheDocument();

    expect(dropDownEl).toMatchSnapshot();
  });
});
