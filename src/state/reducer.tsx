import { StateActionTypes } from 'src/constants';
import { IAppContextProps } from './interface';

export const appReducer = (state: IAppContextProps, action: any) => {
  switch (action.type) {
    case StateActionTypes.headerInfo: {
      return {
        ...state,
        headerInfo: action.headerInfo,
      };
    }
    default:
      return state;
  }
};
