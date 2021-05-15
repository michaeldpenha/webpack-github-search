import React, { useRef, useState } from 'react';
import { useEventListener } from 'src/hooks/event-listener';
import { IDropDown, IDropDownData } from 'src/interface';
import {
  DropDownContainer,
  DropDownHeader,
  DropDownListContainer,
  DropDownList,
  ListItem,
} from './styles';

/**
 * This component will render dropdown element
 * @component
 * @example
 * <DropDown data=[{name: 'Michael'}] onSelectionChange={() => {}}/>
 */
const DropDown: React.FC<IDropDown> = (props) => {
  const { data, defaultValue, onSelectionChange } = props;
  const ref = useRef<HTMLHeadingElement>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(defaultValue || '');

  const toggling = () => setIsOpen(!isOpen);

  const onSelection = (data: IDropDownData) => () => {
    const { label } = data;
    setSelectedOption(label);
    setIsOpen(false);
    onSelectionChange?.(data);
  };

  const onDocumentClick = (ev: MouseEvent) => {
    const el = ev.target as HTMLDocument;
    if (!ref?.current?.contains(el)) {
      setIsOpen(false);
    }
  };

  useEventListener('mousedown', onDocumentClick, document);

  const items = data.map((option: IDropDownData, index: number) => (
    <ListItem
      onClick={onSelection(option)}
      key={`${option.value}_${index}`}
      data-testid={`drop-down-${index}`}
    >
      {option.label}
    </ListItem>
  ));

  return (
    <DropDownContainer data-testid="drop-down-container">
      <DropDownHeader onClick={toggling} data-testid="drop-down-selected-value">
        {selectedOption}
      </DropDownHeader>
      {isOpen && (
        <DropDownListContainer ref={ref} data-testid="drop-down-list">
          <DropDownList>{items}</DropDownList>
        </DropDownListContainer>
      )}
    </DropDownContainer>
  );
};

export default DropDown;
