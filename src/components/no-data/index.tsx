import React from 'react';
import { NoDataContainer } from './styles';

interface IProps {
  text: string;
}

/**
 * Component for showing nodata text
 * @component
 * @example
 * (<NoData text='No data found' />)
 */
const NoData: React.FC<IProps> = (props) => {
  const { text } = props;
  return <NoDataContainer data-testid={'no-data-found'}>{text}</NoDataContainer>;
};

export default NoData;
