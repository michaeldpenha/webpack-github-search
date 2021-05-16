import { DEFAULT_ISSUE_SEARCH_QUERY } from 'src/constants';

/**
 * Funciton will return query string which will be used in search query
 * @param params URL search query object
 * @returns {string} query string
 */
export const prepareSearchQuery = (params: URLSearchParams): string => {
  const queryParams = {
    type: DEFAULT_ISSUE_SEARCH_QUERY.type,
    language: params.get('langauge') || DEFAULT_ISSUE_SEARCH_QUERY.language,
    state: params.get('state') || DEFAULT_ISSUE_SEARCH_QUERY.state,
  };

  if (params.get('search')) {
    queryParams['in'] = `title,body ${params.get('search')}`;
  }

  if (params.get('repo')) {
    queryParams['repo'] = params.get('repo');
  }

  return Object.keys(queryParams).reduce(
    (prev: string, key: string) => `${prev} ${key}:${queryParams[key]}`,
    '',
  );
};
