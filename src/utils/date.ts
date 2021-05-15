import formatDistanceToNow from 'date-fns/formatDistanceToNow';

/**
 * This function will return formatted date string
 * @param createdAt {string}
 * @returns {string} string with formatted date
 */
export const formatDistance = (createdAt: string): string =>
  !isNaN(Date.parse(createdAt))
    ? formatDistanceToNow(new Date(createdAt), { addSuffix: true })
    : '';
