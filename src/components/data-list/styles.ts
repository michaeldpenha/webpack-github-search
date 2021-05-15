import styled from 'styled-components';
import { getStylesSize } from 'utils/styles';
import { fontWeightRegular } from 'src/styles/mixins';

export const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
  & button {
    ${fontWeightRegular}
    line-height: 1.5;
    color: ${(props) => props.theme.colors.surface};
    background-color: ${(props) => props.theme.colors.buttonColor};
    border-color: ${(props) => props.theme.colors.buttonColor};
    border: 1px solid ${(props) => props.theme.colors.transparent};
    border-radius: 0.2rem;
    margin: ${getStylesSize(7.5)} 0;
    padding: ${getStylesSize(2)} ${getStylesSize(5)};
    cursor: pointer;
  }
`;
