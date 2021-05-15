import DataList from 'components/data-list';
import ErrorComponent from 'components/error-component';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useLocation } from 'react-router-dom';
import { PAGE_SIZE, StateActionTypes } from 'src/constants';
import { useStateValue } from 'src/state/context';
import { useGetIssueDetailsLazyQuery } from 'types/schema';
import { formatMessageText } from 'utils/messages';
import Description from './description';

const IssueDetail: React.FC = () => {
  const [lists, setList] = useState([]);
  const history = useHistory();
  const location = useLocation();
  const { repo, repoOwner, issueNumber } = useParams<Record<string, string | undefined>>();
  const [GetIssueDetailsQuery, { loading, data, error, fetchMore }] = useGetIssueDetailsLazyQuery({
    notifyOnNetworkStatusChange: true,
  });
  const { dispatch } = useStateValue();

  const queryVariables = {
    name: repo,
    owner: repoOwner,
    issueNumber: Number(issueNumber),
    first: PAGE_SIZE,
  };

  const routeBack = () => {
    if (location?.state?.['from'] === 'home') {
      history.goBack();
    } else {
      history.push('/');
    }
  };

  const loadMore = () => {
    fetchMore({
      variables: {
        ...queryVariables,
        after: data.repository.issue.comments.pageInfo.endCursor,
      },
    });
  };

  useEffect(() => {
    GetIssueDetailsQuery({
      variables: queryVariables,
    });
    dispatch({
      headerInfo: {
        title: `${repoOwner}/${repo}`,
        goBack: routeBack,
        backText: formatMessageText('searchLabel'),
      },
      type: StateActionTypes.headerInfo,
    });
  }, []);

  useEffect((): void => {
    if (data) {
      const result = data.repository?.issue?.comments?.edges.map(({ node }) => node) || [];
      setList(result);
    }
  }, [data]);

  if (error) {
    return <ErrorComponent errors={error} />;
  }

  return (
    <>
      {!loading && data?.repository?.issue && <Description data={data} />}
      <DataList
        data={lists}
        loadMore={loadMore}
        loading={loading || !data}
        showLoadMore={data?.repository?.issue?.comments?.pageInfo.hasNextPage}
        type={'comment'}
        loaderType={'content'}
        displayNoDataText={false}
      />
    </>
  );
};

export default IssueDetail;
