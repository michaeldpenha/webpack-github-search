import { DEFAULT_ISSUE_SEARCH_QUERY } from 'src/constants';
import { MESSAGES } from 'src/messages';

/**
 * Thei function will fetch the value from message mapping and it will return the value based on key
 * @param key Message key
 * @param values dynamic values
 * @returns {string}
 */

export const formatMessageText = (key: string, values?: string[]): string => {
  const localeText: string = MESSAGES[key] || '';
  if (!values?.length) {
    return localeText;
  }

  return values.reduce(
    (result: string, value: string, index: number) => result.replace(`{${index}}`, value),
    localeText,
  );
};

export const issueCountText = (params: URLSearchParams, count: number): string => {
  const repo: string = params.get('repo') || formatMessageText('githubRepos');
  const state: string = params.get('state') || DEFAULT_ISSUE_SEARCH_QUERY.state;
  return formatMessageText('issueCount', [String(count), repo, state]);
};
