import React from 'react';
import { IData, ITupple } from 'src/interface';
import { IssueTuppleContainer } from './styles';
import { formatDistance } from 'utils/date';
import { formatMessageText } from 'utils/messages';
/**
 * Component wil render comment tupple
 * @component
 * @example
 * <IssueTupple data={{title:'Michael'}} />
 */
const IssueTupple: React.FC<ITupple> = ({ data, onTuppleClick }) => {
  const { title, body, author, closed, createdAt, closedAt, id } = data;
  const issueState: 'opened' | 'closed' = closed ? 'closed' : 'opened';
  const dateCreation: string = closed ? formatDistance(closedAt) : formatDistance(createdAt);

  const onClick = () => {
    onTuppleClick?.(data);
  };

  const footerText = formatMessageText('issueFooterText', [
    author?.login,
    formatMessageText(issueState),
    dateCreation,
  ]);

  return (
    <IssueTuppleContainer onClick={onClick} data-testid={`issue-tupple-${id}`}>
      <header data-testid={`issue-tupple-header-${id}`}>{title}</header>
      <article data-testid={`issue-tupple-article-${id}`}>
        {body || formatMessageText('noContentAvailable')}
      </article>
      <footer data-testid={`issue-tupple-footer-${id}`}>{footerText}</footer>
    </IssueTuppleContainer>
  );
};

export default IssueTupple;
