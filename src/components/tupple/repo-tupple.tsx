import React from 'react';
import { ITupple } from 'src/interface';
import { RepoTuppleContainer } from './styles';

/**
 * Component wil render comment tupple
 * @component
 * @example
 * <RepoTupple data={{owner:'Michael'}} />
 */
const RepoTupple: React.FC<ITupple> = ({ data, onTuppleClick }) => {
  const { nameWithOwner, owner, id } = data;
  const { avatarUrl } = owner;

  const onClick = () => {
    onTuppleClick?.(data);
  };

  return (
    <RepoTuppleContainer onClick={onClick} data-testid={`repo-tupple-${id}`}>
      <p>
        <img src={avatarUrl} alt="avatar" data-testid={`repo-tupple-image-${id}`} />
        {nameWithOwner}
      </p>
    </RepoTuppleContainer>
  );
};

export default RepoTupple;
