import styled from 'styled-components';
import { getStylesSize } from 'utils/styles';

export const ErrorLabel = styled.div`
  margin-left: ${getStylesSize(10)};
`;

export const ErrorUlBlock = styled.ul`
  border: 1px solid ${(props) => props.theme.colors.primary};
  padding: ${getStylesSize(25)};
  margin-top: ${getStylesSize(10)};
  color: ${(props) => props.theme.colors.errorColor};
`;

export const ErrorHeader = styled.header`
  display: flex;
`;
