import { fontWeightRegular } from 'src/styles/mixins';
import styled from 'styled-components';
import { getStylesSize } from 'utils/styles';

export const Input = styled.input`
  display: block;
  width: 100%;
  ${fontWeightRegular};
  color: ${(props) => props.theme.colors.plainText};
  background-color: ${(props) => props.theme.colors.surface};
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: ${getStylesSize(5)};
  font-size: ${getStylesSize(8)};
`;
