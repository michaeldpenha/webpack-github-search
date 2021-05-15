import { parseHTML } from 'utils/html-parser';

describe('html parser', () => {
  it('should return string', () => {
    expect(parseHTML('test')).toBe('test');
  });

  it('should return div element', () => {
    expect(parseHTML('<div>test</div>')).toMatchSnapshot();
  });
});
