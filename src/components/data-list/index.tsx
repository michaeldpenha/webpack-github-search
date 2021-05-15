import React from 'react';
import { ILists, IData } from 'src/interface';
import NoData from 'components/no-data';
import Loader from 'components/loader';
import { formatMessageText } from 'utils/messages';
import { ButtonBlock } from './styles';
import { tuppleSelector } from './utils';

/**
 * This component will render lists of data
 * it support 3 types of tupples 'repo | comments | issue'
 * and also loader type 'content | list'
 * @component
 * @example
 * <DataList data=[{id: '1', name: 'Michael'}] loading={false} showloadMore={true} type={'repo'} loaderType={'list'} />
 */
const DataList: React.FC<ILists> = (props) => {
  const {
    data,
    loading,
    loadMore,
    onItemClick,
    showLoadMore,
    type,
    loaderType,
    displayNoDataText = true,
    noDataFoundText = '',
  } = props;

  const onClick = (item: IData): void => {
    onItemClick?.(item);
  };

  const showMore = () => {
    loadMore?.();
  };

  const Component = tuppleSelector(type);
  const tupples = data.map((item: IData, index: number) => {
    //const Component = tuppleSelector(item['__typename']);
    return (
      <Component key={`${item.id}_${index}`} data={item} onTuppleClick={onClick} type={type} />
    );
  });

  return (
    <>
      {!data.length && !loading && displayNoDataText && <NoData text={noDataFoundText} />}
      {tupples}
      {showLoadMore && !loading && (
        <ButtonBlock>
          <button type="button" onClick={showMore} data-testid={`load-more-${type}`}>
            {formatMessageText('loadMore')}
          </button>
        </ButtonBlock>
      )}
      {<Loader display={loading} type={loaderType} data-testid={`loader-${type}`} />}
    </>
  );
};

export default DataList;
