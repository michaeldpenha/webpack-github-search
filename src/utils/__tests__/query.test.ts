import { prepareSearchQuery } from 'utils/query';

describe('Query utils', () => {
  it('return a query search string with repo', () => {
    jest.spyOn(URLSearchParams.prototype, 'get').mockImplementation(
      (key) =>
        ({
          search: 'text',
          repo: 'facebook/react',
        }[key] || ''),
    );

    expect(prepareSearchQuery(new URLSearchParams())).toBe(
      ' type:issue language:all state:open in:title,body text repo:facebook/react',
    );
  });
});
