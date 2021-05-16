import React from 'react';
import { GetSearchDocument, SearchType } from 'types/schema';
import { act } from 'react-dom/test-utils';
import IssueSearchResponse from '../../../../__mocks__/issue-search.json';
import routeData from 'react-router';
import renderPageEl from 'src/testUtils/tests-page-render';
import Home from '..';

const mockLocation = {
  pathname: '/',
  hash: '',
  search: '',
  state: '',
};

const mocks = [
  {
    request: {
      query: GetSearchDocument,
      variables: {
        first: 15,
        type: 'ISSUE',
        query: ' type:issue language:all state:open',
      },
    },
    result: IssueSearchResponse,
  },
];

beforeEach(() => {
  jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation);
});

const setup = () => renderPageEl(<Home />, '/', '/', mocks);

async function wait(ms = 10) {
  await act(() => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  });
}

describe('testing Home', () => {
  it('renders home page', async () => {
    const { container } = setup();

    await wait();

    expect(container.textContent).toContain('Github');
    expect(container).toMatchSnapshot();
  });
});
