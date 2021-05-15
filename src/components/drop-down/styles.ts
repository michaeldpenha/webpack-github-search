import styled from 'styled-components';
import { getStylesSize } from 'utils/styles';

export const DropDownContainer = styled.div`
  position: relative;
`;

export const DropDownHeader = styled.div`
  padding: ${getStylesSize(5)};
  font-size: ${getStylesSize(8)};
  color: ${(props) => props.theme.colors.secondary};
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.primary};
  cursor: pointer;
`;

export const DropDownListContainer = styled.div`
  position: absolute;
  width: 100%;
`;

export const DropDownList = styled.ul`
  padding: 0;
  margin: 0;
  background: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.primary};
  font-size: ${getStylesSize(8)};
  cursor: pointer;
`;

export const ListItem = styled.li`
  list-style: none;
  padding: ${getStylesSize(3)};
  &:not(:last-child) {
    border-bottom: 1px solid ${(props) => props.theme.colors.primary};
  }
`;
