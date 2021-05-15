import React, { createContext, useContext, useReducer } from 'react';
import { IAppStateContext, IHeaderInfo } from './interface';

interface initialState {
  state: {
    headerInfo?: IHeaderInfo;
  };
  dispatch: ({ type }: { type: string; headerInfo?: IHeaderInfo }) => void;
}

export const StateContext = createContext({} as initialState);

export const StateProvider = (props: IAppStateContext) => {
  const { reducer, initialState, children } = props;
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <StateContext.Provider value={value}>{children}</StateContext.Provider>;
};

export const useStateValue = () => useContext(StateContext);
