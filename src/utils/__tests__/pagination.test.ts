import { mergeData } from 'utils/pagination';

const oldData = {
  totalCount: 2,
  edges: [
    {
      cursor: 'Y3Vyc29yOjI=',
      node: {
        __typename: 'IssueComment',
        id: 'MDEyOklzc3VlQ29tbWVudDgzMjg5MzkxOQ==',
        author: {
          login: 'bvaughn',
          avatarUrl:
            'https://avatars.githubusercontent.com/u/29597?u=417a1ec63c2396239beb9453aafdd54275c94765&v=4',
        },
        createdAt: '2021-05-05T17:59:09Z',
        bodyHTML:
          '<p><a class="user-mention" data-hovercard-type="user" data-hovercard-url="/users/dharapx/hovercard" data-octo-click="hovercard-link-click" data-octo-dimensions="link_type:self" href="https://github.com/dharapx">@dharapx</a> Sorry you hit this problem</p>\n<p>Unfortunately though, it doesn\'t look like this bug report has enough info for one of us to reproduce it.</p>\n<p>Please provide a CodeSandbox (<a rel="nofollow" href="https://codesandbox.io/s/new">https://codesandbox.io/s/new</a>), a link to a repository on GitHub, or provide a minimal code example that reproduces the problem. Screenshots or videos can also be helpful if they help provide context on how to repro the bug.</p>\n<p>Here are some tips for providing a minimal example: <a rel="nofollow" href="https://stackoverflow.com/help/mcve">https://stackoverflow.com/help/mcve</a></p>',
      },
    },
  ],
  pageInfo: {
    endCursor: 'MDEyOklzc3VlQ29tbWVudDgzMzUzNzgyOQ==',
    hasNextPage: true,
  },
};

const newData = {
  totalCount: 2,
  edges: [
    {
      cursor: 'Y3Vyc29yOjI=',
      node: {
        __typename: 'IssueComment',
        id: 'MDEyOklzc3VlQ29tbWVudDgzMzUzNzgyOQ==',
        author: {
          login: 'ZackeryBayle',
          avatarUrl: 'https://avatars.githubusercontent.com/u/8448004?v=4',
        },
        createdAt: '2021-05-06T13:48:29Z',
        bodyHTML:
          '<p>Project: <a href="https://github.com/ZackeryBayle/TrollyReactJS">https://github.com/ZackeryBayle/TrollyReactJS</a><br>\nBack end: <a href="https://github.com/ZackeryBayle/TrollyCRM">https://github.com/ZackeryBayle/TrollyCRM</a></p>\n<p>While working on the project doing some code splitting.</p>\n<p><code> Update existing issue: Error: "Cannot add node "1" because a node with that id is already in the Store." Uncaught Error: Cannot add node "1" because a node with that id is already in the Store.</code><br>\nI am pretty new so please forgive the crazy mess you are about to witness.</p>',
      },
    },
  ],
  pageInfo: {
    endCursor: 'MDEyOklzc3VlQ29tbWVudDgzMzUzNzgyOQ==',
    hasNextPage: false,
  },
};

describe('Pagination utils', () => {
  it('should merge the new array arrays', () => {
    const newVal = JSON.parse(JSON.stringify(newData));

    const { edges, totalCount, pageInfo } = mergeData(undefined, newVal);

    expect(edges.length).toEqual(1);
    expect(pageInfo.hasNextPage).toEqual(false);
    expect(totalCount).toEqual(2);
  });

  it('should merge two arrays', () => {
    const newVal = JSON.parse(JSON.stringify(newData));
    const oldVal = JSON.parse(JSON.stringify(oldData));
    const { edges, totalCount, pageInfo } = mergeData(oldVal, newVal);

    expect(edges.length).toEqual(2);
    expect(pageInfo.hasNextPage).toEqual(false);
    expect(totalCount).toEqual(2);
  });
});
