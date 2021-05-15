import { formatDistance } from 'utils/date';

const dateCalculator = (minutes: number): string => {
  const currentTime = new Date().getTime();
  const date: string = new Date(currentTime - 60000 * minutes).toString();
  return formatDistance(date);
};

describe('Date utils', () => {
  it('returns with the difference of minutes ago', () => {
    expect(dateCalculator(5)).toBe('5 minutes ago');
  });

  it('returns with the difference of hours ago', () => {
    expect(dateCalculator(120)).toContain('2 hours ago');
  });

  it('returns with the difference of days ago', () => {
    expect(dateCalculator(60 * 26)).toContain('1 day ago');
  });

  it('returns with the difference of months ago', () => {
    expect(dateCalculator(60 * 24 * 31)).toContain('1 month ago');
  });

  it('returns with the difference of years ago', () => {
    expect(dateCalculator(60 * 24 * 31 * 12)).toContain('1 year ago');
  });

  it('return Invalid time value when random string is passed', () => {
    expect(formatDistance('test')).toBe('');
  });
});
