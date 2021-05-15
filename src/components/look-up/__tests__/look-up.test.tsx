import React from 'react';
import renderEl, { fireEvent } from 'src/testUtils/tests-render';
import LookUp from '..';
import repo from '../../../../__mocks__/repo.json';

const response = repo.data.search.edges.map(({ node }) => node);

const setup = () => {
  const loadMore = jest.fn();
  const onChange = jest.fn();
  const onClick = jest.fn();
  const el = renderEl(
    <LookUp
      data={response}
      showMore={true}
      loadMore={loadMore}
      onChange={onChange}
      onClick={onClick}
      type={'repo'}
      loaderType={'list'}
      defaultValue={'test'}
    />,
  );
  return {
    ...el,
    loadMore,
    onChange,
    onClick,
  };
};

describe('Look up comeponent', () => {
  it('should render look up', () => {
    const { getByTestId, onChange, onClick } = setup();

    const searchEl = getByTestId('search');

    fireEvent.change(searchEl, { target: { value: '23' } });
    expect(onChange).toHaveBeenCalled();
    fireEvent.focus(searchEl);
    fireEvent.click(searchEl);

    const tuppleElement = getByTestId('repo-tupple-MDEwOlJlcG9zaXRvcnk2ODQzNzc5MQ==');
    fireEvent.click(tuppleElement);

    expect(onClick).toHaveBeenCalled();
  });
});
