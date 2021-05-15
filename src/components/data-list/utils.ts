import CommentTupple from 'components/tupple/comment-tupple';
import IssueTupple from 'components/tupple/issue-tupple';
import RepoTupple from 'components/tupple/repo-tupple';
import { ITupple, TuppleType } from 'src/interface';

// export const tuppleSelector = (type: Typename): React.FC<ITupple> => {
//   return {
//     IssueComment: CommentTupple,
//     Issue: IssueTupple,
//     Repository: RepoTupple,
//   }[type];
// };

export const tuppleSelector = (type: TuppleType): React.FC<ITupple> => {
  return {
    comment: CommentTupple,
    issue: IssueTupple,
    repo: RepoTupple,
  }[type];
};
