import { cleanup } from '@testing-library/react';
import { ILists } from 'src/interface';
import { formatMessageText } from 'utils/messages';
import DataList from '..';
import React from 'react';
import commentsData from '../../../../__mocks__/comments.json';
import renderEl from 'src/testUtils/tests-render';

const commentsResponse = commentsData.data.repository.issue.comments.edges.map(({ node }) => node);

const setup = ({
  data,
  loading = true,
  showLoadMore = false,
  type,
  loaderType,
  displayNoDataText = true,
  noDataFoundText = 'noDataFound',
}) => {
  const loadMore = jest.fn();
  const onItemClick = jest.fn();
  const el = renderEl(
    <DataList
      data={data}
      loading={loading}
      showLoadMore={showLoadMore}
      type={type}
      loaderType={loaderType}
      loadMore={loadMore}
      onItemClick={onItemClick}
      displayNoDataText={displayNoDataText}
      noDataFoundText={formatMessageText(noDataFoundText)}
    />,
  );

  return {
    ...el,
    loadMore,
    onItemClick,
  };
};

afterEach(cleanup);

describe('Data list component', () => {
  it('should render the list component', () => {
    const slicedData = commentsResponse.slice(0, 15);
    const { getByTestId, loadMore, queryByTestId } = setup({
      data: slicedData,
      loading: false,
      type: 'comment',
      showLoadMore: true,
      displayNoDataText: false,
      loaderType: 'list',
    });
    const loadMoreEl = getByTestId('load-more-comment');
    expect(loadMoreEl).toBeVisible();
    expect(queryByTestId('loader-comment')).not.toBeInTheDocument();

    getByTestId('load-more-comment').click();
    expect(loadMore).toHaveBeenCalled();
  });

  it('should render no data found', () => {
    const data = [];
    const { getByTestId } = setup({
      data,
      loading: false,
      type: 'issue',
      showLoadMore: false,
      displayNoDataText: true,
      loaderType: 'content',
      noDataFoundText: 'noIssueFound',
    });

    const noDataFoundEl = getByTestId('no-data-found');
    expect(noDataFoundEl).toHaveTextContent(formatMessageText('noIssueFound'));
  });
});
