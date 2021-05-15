import React from 'react';
import { ITupple } from 'src/interface';
import { formatDistance } from 'utils/date';
import { CommentTuppleContainer } from './styles';
import { parseHTML } from 'utils/html-parser';
import { formatMessageText } from 'utils/messages';

/**
 * Component wil render comment tupple
 * @component
 * @example
 * <CommentTupple data={{author:'Michael'}} />
 */
const CommentTupple: React.FC<ITupple> = (props) => {
  const { data } = props;
  const { author, createdAt, bodyHTML } = data;
  const formatDate = formatDistance(createdAt);
  const headerTitle = formatMessageText('commentTitle', [author?.login, formatDate]);

  return (
    <CommentTuppleContainer>
      <header>
        <img src={author?.avatarUrl} alt="avatar" />
        {headerTitle}
      </header>
      <article>{bodyHTML ? parseHTML(bodyHTML) : formatMessageText('noContentAvailable')}</article>
    </CommentTuppleContainer>
  );
};

export default CommentTupple;
