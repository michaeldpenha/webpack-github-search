import { BASE_FONT_SIZE } from '../constants';

/**
 * Funciton will return the size | padding | margin of the elements
 * @param size number
 * @returns {string} with rem
 */
export const getStylesSize = (size: number): string => {
  return `${size / BASE_FONT_SIZE}rem`;
};
