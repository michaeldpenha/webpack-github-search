export const PAGE_SIZE = 15;
export const BASE_FONT_SIZE = 10;

export const STATUS_OPTIONS = [
  {
    label: 'Open',
    value: 'open',
  },
  {
    label: 'Closed',
    value: 'closed',
  },
];

export const DEFAULT_ISSUE_SEARCH_QUERY = {
  type: 'issue',
  language: 'all',
  state: 'open',
};

export const DEFAULT_REPO_SEARCH_QUERY = {
  language: 'all',
};

export enum ROUTER {
  home = '/',
  issueDetail = '/:repoOwner/:repo/issues/:issueNumber',
  other = '*',
}

export enum StateActionTypes {
  headerInfo = 'HEADER_INFO',
}
