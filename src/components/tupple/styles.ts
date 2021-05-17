import styled from 'styled-components';
import { getStylesSize } from 'utils/styles';
import { fontWeightSemiBold, mixinLineClamp } from 'src/styles/mixins';

export const IssueTuppleContainer = styled.div`
  cursor: pointer;
  margin-top: ${getStylesSize(10)};
  border: 1px solid ${(props) => props.theme.colors.border};

  & header {
    padding: 0 ${getStylesSize(5)};
    ${fontWeightSemiBold}
    ${mixinLineClamp(2)}
    font-size: ${getStylesSize(10)};
    background-color: ${(props) => props.theme.colors.titleBackground};
    line-height: ${getStylesSize(20)};

    @media (max-width: 420px) {
      line-height: ${getStylesSize(15)};
    }
  }

  & article {
    padding: ${getStylesSize(5)} ${getStylesSize(5)} 0;
    ${mixinLineClamp(3)}
    font-size: ${getStylesSize(9)};
    border-top: 1px solid ${(props) => props.theme.colors.border};
  }

  & footer {
    padding: ${getStylesSize(3)};
    border-top: 1px solid ${(props) => props.theme.colors.border};
    font-size: ${getStylesSize(7)};
    margin-top: ${getStylesSize(5)};
  }
`;

export const CommentTuppleContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${getStylesSize(10)};
  border: 1px solid ${(props) => props.theme.colors.border};

  & header {
    display: flex;
    flex-direction: row;
    padding: ${getStylesSize(5)};
    font-size: ${getStylesSize(8)};
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    background-color: ${(props) => props.theme.colors.titleBackground};
    align-items: center;
    img {
      width: ${getStylesSize(15)};
      border-radius: 50%;
      margin-right: ${getStylesSize(8)};
    }
  }

  & article {
    padding: ${getStylesSize(20)};
    font-size: ${getStylesSize(9)};
    word-wrap: break-word;

    & pre {
      overflow: auto;
      background-color: ${(props) => props.theme.colors.titleBackground};
      padding: ${getStylesSize(2)};
    }
  }
`;

export const RepoTuppleContainer = styled.div`
  cursor: pointer;
  & p {
    display: flex;
    flex-direction: row;
    padding: ${getStylesSize(5)};
    font-size: ${getStylesSize(8)};
    border-bottom: 1px solid ${(props) => props.theme.colors.border};
    background-color: ${(props) => props.theme.colors.titleBackground};
    align-items: center;
    word-break: break-word;
    img {
      width: ${getStylesSize(15)};
      border-radius: 50%;
      margin-right: ${getStylesSize(8)};
    }
  }
`;
