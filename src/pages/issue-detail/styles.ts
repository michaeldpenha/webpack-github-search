import styled from 'styled-components';
import { getStylesSize } from 'utils/styles';

interface IStatus {
  state: boolean;
}

export const IssueTitle = styled.h2`
  font-size: ${getStylesSize(15)};
`;

export const IssueTags = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${getStylesSize(5)};
`;

export const IssueDate = styled.p`
  font-size: ${getStylesSize(8)};
`;

export const IssueStatus = styled.p<IStatus>`
  font-size: ${getStylesSize(8)};
  color: ${(props) => (props.state ? '#FF0000' : '#008000')};
  margin-right: ${getStylesSize(5)};
`;
