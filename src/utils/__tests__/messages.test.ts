import { MESSAGES } from 'src/messages';
import { formatMessageText, issueCountText } from 'utils/messages';

describe('Messages utils', () => {
  it('return a no data found label', () => {
    const formatMessage: string = formatMessageText('noDataFound');

    expect(formatMessage).toBe(MESSAGES.noDataFound);
  });

  it('return a dynamic string', () => {
    const formatMessage: string = formatMessageText('commentTitle', ['test', '6 hours ago']);

    expect(formatMessage).toBe('test commented 6 hours ago');
  });

  it('returns a total count text', () => {
    jest.spyOn(URLSearchParams.prototype, 'get').mockImplementation((key) => '');

    const message: string = issueCountText(new URLSearchParams(), 10);

    expect(message).toBe(
      formatMessageText('issueCount', ['10', formatMessageText('githubRepos'), 'open']),
    );
  });
});
