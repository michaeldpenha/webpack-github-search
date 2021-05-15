import React from 'react';
import renderEl, { fireEvent } from 'src/testUtils/tests-render';
import { formatDistance } from 'utils/date';
import { parseHTML } from 'utils/html-parser';
import IssueTupple from '../issue-tupple';
import RepoTupple from '../repo-tupple';

const setup = ({ data, Component }) => {
  const onTuppleClick = jest.fn();
  const el = renderEl(<Component data={data} onTuppleClick={onTuppleClick} />);
  return {
    ...el,
    onTuppleClick,
  };
};

describe('Tupple component', () => {
  it('should render repo component', () => {
    const { getByTestId, onTuppleClick } = setup({
      data: {
        id: 'MDEwOlJlcG9zaXRvcnkyMTM1NDI4ODc=',
        name: 'Jenkins_Upgradev3',
        nameWithOwner: 'anshulc55/Jenkins_Upgradev3',
        __typename: 'Repository',
        owner: {
          avatarUrl:
            'https://avatars.githubusercontent.com/u/15612383?u=2de2d038453a1769caffc028a724dcfca29e891f&v=4',
        },
      },
      Component: RepoTupple,
    });

    const el = getByTestId('repo-tupple-MDEwOlJlcG9zaXRvcnkyMTM1NDI4ODc=');

    fireEvent.click(el);
    expect(onTuppleClick).toHaveBeenCalled();

    const imgEl = getByTestId('repo-tupple-image-MDEwOlJlcG9zaXRvcnkyMTM1NDI4ODc=');
    expect(imgEl).toHaveAttribute(
      'src',
      'https://avatars.githubusercontent.com/u/15612383?u=2de2d038453a1769caffc028a724dcfca29e891f&v=4',
    );

    expect(el).toMatchSnapshot();
  });

  it('should render issue compoennt for open Issue', () => {
    const { getByTestId, onTuppleClick } = setup({
      data: {
        id: 'MDU6SXNzdWU4OTIwMTUyNDI=',
        bodyHTML: '<p>DISCORD</p>',
        title: 're',
        author: {
          avatarUrl: 'https://avatars.githubusercontent.com/u/58448036?v=4',
          login: 'NeonGamerBot-QK',
        },
        closed: false,
        closedAt: null,
        createdAt: '2021-05-14T15:25:13Z',
        body: 'DISCORD',
      },
      Component: IssueTupple,
    });

    const el = getByTestId('issue-tupple-MDU6SXNzdWU4OTIwMTUyNDI=');
    const headerEl = getByTestId('issue-tupple-header-MDU6SXNzdWU4OTIwMTUyNDI=');
    const articleEl = getByTestId('issue-tupple-article-MDU6SXNzdWU4OTIwMTUyNDI=');
    const footerEl = getByTestId('issue-tupple-footer-MDU6SXNzdWU4OTIwMTUyNDI=');

    fireEvent.click(el);
    expect(onTuppleClick).toHaveBeenCalled();
    expect(headerEl).toHaveTextContent('re');
    expect(articleEl).toHaveTextContent('DISCORD');
    expect(footerEl).toHaveTextContent(formatDistance('2021-05-14T15:25:13Z'));
  });
});
