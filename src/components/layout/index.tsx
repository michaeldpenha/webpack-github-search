import React from 'react';
import { ILayout } from 'src/interface';
import { LayoutDiv } from './styles';

/**
 * This component will render the layout of the application
 * @component
 * @example
 * <Layout><Home /></Layout>
 */
const Layout: React.FC<ILayout> = (props) => {
  const { children } = props;

  return <LayoutDiv>{children}</LayoutDiv>;
};

export default Layout;
