import CommentTupple from 'components/tupple/comment-tupple';
import React from 'react';
import { GetIssueDetailsQuery } from 'types/schema';
import { formatDistance } from 'utils/date';
import { IssueTitle, IssueDate, IssueTags, IssueStatus } from './styles';

interface IDecsciption {
  data: GetIssueDetailsQuery;
}

const Description: React.FC<IDecsciption> = (props) => {
  const { data } = props;
  const issue = data?.repository?.issue;
  const { author, title, closed, closedAt, createdAt, bodyHTML, id, comments } = issue;
  const date = closed ? closedAt : createdAt;
  const issueState = closed ? 'Closed' : 'Opened';
  const commentData = {
    author,
    id,
    bodyHTML,
    createdAt,
  };

  return (
    <>
      <IssueTitle>{title}</IssueTitle>
      <IssueTags>
        <IssueStatus state={closed}>{issueState}</IssueStatus>
        <IssueDate>{`Created by ${author?.login} ${formatDistance(date)}. ${
          comments.totalCount
        } comments`}</IssueDate>
      </IssueTags>
      <CommentTupple data={commentData} />
    </>
  );
};

export default Description;
