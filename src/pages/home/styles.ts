import styled from 'styled-components';
import { getStylesSize } from 'utils/styles';

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Column = styled.div`
  flex: 1 0 0%;
  padding: 0 ${getStylesSize(15)};
`;

export const DropDownContainer = styled(Column)`
  padding-right: 0;
`;

export const SearchContainer = styled(Column)`
  padding-left: 0;
`;

export const LookUpContainer = styled(Column)``;

export const Label = styled.label`
  font-weight: 400;
  font-size: ${getStylesSize(10)};
`;

export const ListContainer = styled.main`
  padding-top: ${getStylesSize(7)};

  & strong {
    font-size: ${getStylesSize(9)};
  }
`;
