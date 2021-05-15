import { MESSAGES } from 'src/messages';
import { formatMessageText } from 'utils/messages';

describe('Messages utils', () => {
  it('return a no data found label', () => {
    const formatMessage: string = formatMessageText('noDataFound');

    expect(formatMessage).toBe(MESSAGES.noDataFound);
  });

  it('return a dynamic string', () => {
    const formatMessage: string = formatMessageText('commentTitle', ['test', '6 hours ago']);

    expect(formatMessage).toBe('test commented 6 hours ago');
  });
});
