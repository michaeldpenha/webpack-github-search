import Search from 'components/search';
import React, { useRef, useState } from 'react';
import { IData, ILookUp } from 'src/interface';
import { LookUpContainer, LookUpContainerItems } from './styles';
import DataList from 'components/data-list';
import { useEventListener } from 'src/hooks/event-listener';
import { formatMessageText } from 'utils/messages';

/**
 * This component renders the lookup component which helps filtering the list
 * @component
 * @example
 * <LookUp data=[{id: 1, name: 'Michael'}] type={'repo'} loading={false} loadMore={()=>{}} showMore={true} />
 */
const LookUp: React.FC<ILookUp> = (props) => {
  const {
    data,
    loading,
    defaultValue,
    loadMore,
    showMore,
    onClick,
    onChange,
    type,
    loaderType,
    noDataFoundText,
    placeholder,
  } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>(defaultValue);

  const ref = useRef<HTMLHeadingElement>(null);
  const onFocus = (val: boolean): void => {
    setIsOpen(val);
  };

  const onInputChange = (val: string): void => {
    onChange?.(val);
    setSearch(val);
    if (!val.length) {
      onClick?.();
    }
  };

  const onListItemClick = (item: IData) => {
    onClick?.(item);
    setIsOpen(false);
  };

  const onSearchClick = () => {
    setIsOpen(true);
  };

  const onDocumentClick = (ev: MouseEvent) => {
    const el = ev.target as HTMLDocument;
    if (!ref?.current?.contains(el)) {
      setIsOpen(false);
    }
  };

  useEventListener('mousedown', onDocumentClick, document);

  return (
    <LookUpContainer>
      <Search
        defaultValue={defaultValue}
        onFocus={onFocus}
        onInputChange={onInputChange}
        placeholder={placeholder}
        autoComplete="off"
        onClick={onSearchClick}
      />
      {isOpen && (
        <LookUpContainerItems ref={ref}>
          {!search.length ? (
            <p>{formatMessageText('lookUpDefaultText')}</p>
          ) : (
            <DataList
              data={data}
              loadMore={loadMore}
              loading={loading}
              showLoadMore={showMore}
              onItemClick={onListItemClick}
              type={type}
              loaderType={loaderType}
              noDataFoundText={noDataFoundText}
            />
          )}
        </LookUpContainerItems>
      )}
    </LookUpContainer>
  );
};

export default LookUp;
