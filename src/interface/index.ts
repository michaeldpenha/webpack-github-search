import { ReactChild, ReactNode, ReactElement } from 'react';

export type TuppleType = 'issue' | 'comment' | 'repo';
export type LoaderType = 'content' | 'list';
export type Typename = 'Repository' | 'Issue' | 'IssueComment';

export interface IData {
  id: string;
  __typename?: Typename | string;
  bodyHTML?: string;
  createdAt?: string;
  author?: IActor;
  owner?: IActor;
  nameWithOwner?: string;
  closed?: boolean;
  closedAt?: string;
  number?: number;
  repository?: IRepo;
  title?: string;
  body?: string;
}

export interface IRepo {
  id: string;
  name: string;
  owner: IActor;
  nameWithOwner: string;
}

export interface IActor {
  login: string;
  avatarUrl: string;
}

export interface ITuppleLoaderTypes {
  type: TuppleType;
  loaderType: LoaderType;
  displayNoDataText?: boolean;
  noDataFoundText?: string;
}

export interface ILists extends ITuppleLoaderTypes {
  data: IData[];
  loading: boolean;
  showLoadMore?: boolean;
  loadMore?: () => void;
  onItemClick?: (data: IData) => void;
}

export interface ITupple {
  data: IData;
  onTuppleClick?: (data: IData) => void;
  type?: TuppleType;
}

export interface ILayout {
  children: ReactChild | ReactNode | ReactElement;
}

export interface IDropDownData {
  label: string;
  value: string;
}

export interface IDropDown {
  data: IDropDownData[];
  defaultValue?: string;
  onSelectionChange?: (data: IDropDownData) => void;
}

export interface ISearch {
  defaultValue: string;
  autoComplete?: string;
  placeholder?: string;
  onInputChange?: (e: string) => void;
  onFocus?: (val: boolean) => void;
  onClick?: () => void;
}

export interface ILookUpData {
  id: string;
  nameWithOwner: string;
  name: string;
}

export interface ILookUp extends ITuppleLoaderTypes {
  data: IData[];
  defaultValue: string;
  loadMore: () => void;
  showMore: boolean;
  loading?: boolean;
  onClick?: (item?: IData) => void;
  onChange?: (val: string) => void;
  placeholder?: string;
}

export interface ILoader {
  display: boolean;
  type: LoaderType;
}
