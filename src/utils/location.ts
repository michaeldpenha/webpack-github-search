import { History, Location } from 'history';

/**
 * This function will update the url params without refresh
 * @param location location object
 * @param value which needs to be updated
 * @param history history object
 * @param key param key
 * @param append whether to append or to delete
 * @return {void}
 */

export const updaeUrlQueryParams = (
  location: Location,
  value: string,
  history: History,
  key: string,
  append?: boolean,
) => {
  const params: URLSearchParams = new URLSearchParams(location.search);
  params.delete(key);
  if (append) {
    params.append(key, value);
  }
  history.replace({
    search: params.toString(),
  });
};
