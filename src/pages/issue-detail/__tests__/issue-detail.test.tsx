import React from 'react';
import IssueDetail from '..';
import { GetIssueDetailsDocument } from 'types/schema';
import { act } from 'react-dom/test-utils';
import IssueDetailResponse from '../../../../__mocks__/issue-detail.json';
import routeData from 'react-router';
import renderPageEl from 'src/testUtils/tests-page-render';
import { cleanup } from '@testing-library/react';

const mockLocation = {
  pathname: '/facebook/react/issues/21510',
  hash: '',
  search: '',
  state: '',
};

const mocks = [
  {
    request: {
      query: GetIssueDetailsDocument,
      variables: {
        name: 'react',
        owner: 'facebook',
        issueNumber: 21510,
        first: 15,
      },
    },
    result: IssueDetailResponse,
  },
];

beforeEach(() => {
  jest.spyOn(routeData, 'useLocation').mockReturnValue(mockLocation);
});

afterEach(cleanup);

const setup = () => {
  const el = renderPageEl(
    <IssueDetail />,
    '/facebook/react/issues/21510',
    '/:repoOwner/:repo/issues/:issueNumber',
    mocks,
  );

  return el;
};

async function wait(ms = 0) {
  await act(() => {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  });
}

describe('testing issue detail', () => {
  it('renders issue detail', async () => {
    const { container } = setup();

    await wait();

    expect(container.textContent).toMatch('bvaughn');
    expect(container).toMatchSnapshot();
  });
});
