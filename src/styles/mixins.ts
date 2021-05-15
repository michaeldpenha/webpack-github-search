export const mixinLineClamp = (lines: number): string => `
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: ${lines};
    -webkit-box-orient: vertical;
    word-wrap: break-word;
    overflow: hidden;
`;

export const fontWeightRegular = 'font-weight: 400;';
export const fontWeightSemiBold = 'font-weight: 600;';
export const fontWeightBold = 'font-weight: 700;';
