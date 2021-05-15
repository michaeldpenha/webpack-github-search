import styled from 'styled-components';
import { getStylesSize } from 'utils/styles';

export const HeaderDiv = styled.header`
  width: 100%;
  height: ${getStylesSize(40)};
  background-color: ${(props) => props.theme.colors.primary};
  display: flex;
  padding: 0 ${getStylesSize(20)};
  align-items: center;

  & h1 {
    color: ${(props) => props.theme.colors.secondary};
    font-size: ${getStylesSize(15)};
    flex: 1;
    text-align: center;
  }
`;

export const IconDiv = styled.div`
  cursor: pointer;
  display: flex;
  & p {
    margin-left: ${getStylesSize(5)};
  }
`;
