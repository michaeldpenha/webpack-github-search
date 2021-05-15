import React, { useEffect } from 'react';
import { StateActionTypes } from 'src/constants';
import { useStateValue } from 'src/state/context';
import { formatMessageText } from 'utils/messages';
import Filter from './filter';
import List from './list';

const Home: React.FC = () => {
  const { dispatch } = useStateValue();

  useEffect(() => {
    dispatch({
      headerInfo: {
        title: formatMessageText('homeLabel'),
      },
      type: StateActionTypes.headerInfo,
    });
  }, []);

  return (
    <>
      <Filter />
      <List />
    </>
  );
};

export default Home;
