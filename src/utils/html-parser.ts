import parse from 'html-react-parser';

/**
 * This function will parse Html string and will return HTML elements using html-react-parser
 * @param val
 * @returns {element | string}
 */
export const parseHTML = (val: string): string | JSX.Element | JSX.Element[] => parse(val);
