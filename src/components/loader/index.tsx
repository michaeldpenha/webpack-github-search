import React from 'react';
import { ILoader } from 'src/interface';
import { ListBlock } from './styles';
import CustomContentLoader from './custom-content-loader';

/**
 * This component wil help in rendering content or list loader based on type
 * @component
 * @example
 * <Loader type={'list'} display={true}/>
 */
const Loader: React.FC<ILoader> = (props) => {
  const { display, type } = props;

  const Loader = {
    content: <CustomContentLoader />,
    list: <ListBlock />,
  }[type];

  return <>{display && Loader}</>;
};

export default Loader;
