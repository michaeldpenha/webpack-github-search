import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import * as _ from 'lodash';
import { History, Location } from 'history';
import { PAGE_SIZE } from 'src/constants';
import { SearchType, useGetSearchLazyQuery } from 'types/schema';
import DataList from 'components/data-list';
import { IData } from 'src/interface';
import { prepareSearchQuery } from 'utils/query';
import { ListContainer } from './styles';
import ErrorComponent from 'components/error-component';
import { formatMessageText, issueCountText } from 'utils/messages';

const List: React.FC = () => {
  const [getSearch, { loading, data, error, fetchMore }] = useGetSearchLazyQuery({
    notifyOnNetworkStatusChange: true,
  });
  const [lists, setList] = useState([]);
  const [fetchPreviousVariables, setVariables] = useState({});
  const history: History = useHistory();
  const location: Location = useLocation();
  const params: URLSearchParams = new URLSearchParams(location.search);

  const queryVariables = {
    first: PAGE_SIZE,
    type: SearchType.Issue,
    query: prepareSearchQuery(params),
  };

  const loadMore = (): void => {
    fetchMore({
      variables: {
        ...queryVariables,
        after: data.search.pageInfo.endCursor,
      },
    });
  };

  const onClick = (data: IData): void => {
    const {
      number,
      repository: { nameWithOwner },
    } = data;

    history.push({
      pathname: `/${nameWithOwner}/issues/${number}`,
      state: {
        from: 'home',
      },
    });
  };

  useEffect((): void => {
    if (!_.isEqual(queryVariables, fetchPreviousVariables)) {
      getSearch({
        variables: queryVariables,
      });
      setList([]);
      setVariables(queryVariables);
    }
  }, [location]);

  useEffect((): void => {
    if (data) {
      const result = data.search?.edges.map(({ node }) => node) || [];
      setList(result);
    }
  }, [data]);

  if (error) {
    return <ErrorComponent errors={error} />;
  }

  return (
    <ListContainer>
      {!loading && <strong>{issueCountText(params, data?.search?.['issueCount'] || 0)}</strong>}
      <DataList
        data={lists}
        loadMore={loadMore}
        loading={loading || data?.search?.edges.length !== lists.length}
        onItemClick={onClick}
        showLoadMore={data?.search?.pageInfo?.hasNextPage}
        type="issue"
        loaderType="content"
        noDataFoundText={formatMessageText('noIssueFound')}
      />
    </ListContainer>
  );
};

export default List;
