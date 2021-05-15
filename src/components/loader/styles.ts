import styled from 'styled-components';
import { BulletList } from 'react-content-loader';

import { getStylesSize } from 'utils/styles';

export const LoaderBlock = styled.div`
  border: 1px solid ${(props) => props.theme.colors.border};
  padding: 0 ${getStylesSize(10)};
  height: ${getStylesSize(60)};
  margin-top: ${getStylesSize(10)};
`;

export const ListBlock = styled(BulletList)`
  padding: 0 ${getStylesSize(10)};
  width: 90%;
`;
