import { ReactNode } from 'react';

export interface IHeaderInfo {
  title: string;
  goBack?: () => void;
  backText?: string;
}

export interface IAppContextProps {
  headerInfo?: IHeaderInfo;
}

export interface IAppStateContext {
  reducer: (state: IAppContextProps, action: Record<string, unknown>) => IAppContextProps | any;
  initialState: IAppContextProps;
  children: ReactNode;
}
