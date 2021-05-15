import { MESSAGES } from 'src/messages';

export const formatMessageText = (key: string, values?: string[]): string => {
  const localeText: string = MESSAGES[key];
  if (!values?.length) {
    return localeText;
  }

  return values.reduce(
    (result: string, value: string, index: number) => result.replace(`{${index}}`, value),
    localeText,
  );
};
