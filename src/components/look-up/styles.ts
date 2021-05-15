import styled from 'styled-components';
import { getStylesSize } from 'utils/styles';

export const LookUpContainer = styled.div`
  position: relative;
`;

export const LookUpContainerItems = styled.div`
  position: absolute;
  width: 100%;
  background: ${(props) => props.theme.colors.surface};
  height: ${getStylesSize(100)};
  overflow: auto;
  border: 1px solid ${(props) => props.theme.colors.primary};
`;

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.primary};
  font-size: ${getStylesSize(8)};
  cursor: pointer;
`;

export const DropDownListItem = styled.li`
  list-style: none;
  padding: ${getStylesSize(3)};
  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  }
`;
