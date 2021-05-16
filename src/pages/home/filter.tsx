import React, { useEffect, useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import DropDown from 'components/drop-down';
import { History, Location } from 'history';
import { PAGE_SIZE, STATUS_OPTIONS } from 'src/constants';
import { IData, IDropDownData } from 'src/interface';
import Search from 'components/search';
import { updaeUrlQueryParams } from 'utils/location';
import LookUp from 'components/look-up';
import { SearchType, useGetSearchLazyQuery } from 'types/schema';
import { DropDownContainer, LookUpContainer, Row, SearchContainer, Label } from './styles';
import { formatMessageText } from 'utils/messages';

const Filter: React.FC = () => {
  const history: History = useHistory();
  const location: Location = useLocation();
  const [search, setSearch] = useState<string>('');
  const [repoList, setRepoList] = useState([]);
  const [getSearch, { loading, data, fetchMore }] = useGetSearchLazyQuery({
    notifyOnNetworkStatusChange: true,
  });

  const queryVariable = {
    first: PAGE_SIZE,
    type: SearchType.Repository,
  };

  const params: URLSearchParams = new URLSearchParams(location.search);
  const issueState: string | undefined = params.get('state');
  const searchQuery: string | undefined = params.get('search');
  const repo: string | undefined = params.get('repo');

  const onStatusChange = (data: IDropDownData): void => {
    const { value } = data;
    updaeUrlQueryParams(location, value, history, 'state', true);
  };

  const onInputChange = (value: string) => {
    updaeUrlQueryParams(location, value, history, 'search', !!value.length);
  };

  const onRepoCLick = (item?: IData) => {
    const value = item?.nameWithOwner || '';
    updaeUrlQueryParams(location, value, history, 'repo', !!value.length);
  };

  const loadMore = () => {
    fetchMore({
      variables: {
        ...queryVariable,
        query: `language:all in:title ${search}`,
        after: data.search.pageInfo.endCursor,
      },
    });
  };

  const onRepoSearch = (value: string) => {
    getSearch({
      variables: {
        ...queryVariable,
        query: `language:all in:title ${value}`,
      },
    });
    setSearch(value);
  };

  useEffect(() => {
    if (data) {
      const result = data.search.edges.map(({ node }) => node) || [];
      setRepoList(result);
    }
  }, [data]);

  const filterDefaultValue = {
    status: issueState
      ? STATUS_OPTIONS.find((option: IDropDownData) => option.value === issueState)?.label
      : 'Open',
    search: searchQuery || '',
    repo: repo ? repo.split('/')[1] : '',
  };

  return (
    <Row>
      <SearchContainer>
        <Label>{formatMessageText('searchLabel')}</Label>
        <Search
          onInputChange={onInputChange}
          defaultValue={filterDefaultValue['search']}
          placeholder={formatMessageText('issueSearch')}
        />
      </SearchContainer>
      <LookUpContainer>
        <Label>{formatMessageText('repositoryLabel')}</Label>
        <LookUp
          onChange={onRepoSearch}
          data={repoList}
          loading={loading || data?.search?.edges.length !== repoList.length}
          onClick={onRepoCLick}
          defaultValue={filterDefaultValue['repo']}
          loadMore={loadMore}
          showMore={data?.search?.pageInfo.hasNextPage}
          type={'repo'}
          loaderType={'list'}
          noDataFoundText={formatMessageText('noRepositoryFound')}
          placeholder={formatMessageText('repoSearch')}
        />
      </LookUpContainer>
      <DropDownContainer>
        <Label>{formatMessageText('stateLabel')}</Label>
        <DropDown
          data={STATUS_OPTIONS}
          defaultValue={filterDefaultValue['status'] || 'Open'}
          onSelectionChange={onStatusChange}
        />
      </DropDownContainer>
    </Row>
  );
};

export default Filter;
