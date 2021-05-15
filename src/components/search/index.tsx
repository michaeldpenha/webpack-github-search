import React, { SyntheticEvent, useEffect, useState } from 'react';
import { useDebounce } from 'use-debounce';
import { ISearch } from 'src/interface';
import { Input } from './styles';

/**
 * Compoennet will render the input component to search for the text in the list
 * @component
 * @example
 * <Search onInputChange={() => {}} defaultValue='search'>
 */
const Search: React.FC<ISearch> = (props) => {
  const { defaultValue, placeholder = '', autoComplete = 'on', onInputChange, onFocus } = props;
  const [value, setValue] = useState(defaultValue || '');
  const [query] = useDebounce(value, 500);

  const onChange = (e: SyntheticEvent) => {
    const el = e.target as HTMLInputElement;
    const value: string = el.value;
    setValue(value);
  };

  const onInputClick = (e: SyntheticEvent) => {
    onChange(e);
    onFocus?.(true);
  };

  const elementFocus = () => {
    onFocus?.(true);
  };

  useEffect(() => {
    onInputChange?.(query);
  }, [query]);

  return (
    <Input
      name="search"
      type="search"
      onChange={onChange}
      value={value}
      onFocus={elementFocus}
      placeholder={placeholder}
      autoComplete={autoComplete}
      onClick={onInputClick}
      data-testid="search"
    />
  );
};

export default Search;
