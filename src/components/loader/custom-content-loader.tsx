import React from 'react';
import ContentLoader from 'react-content-loader';
import { LoaderBlock } from './styles';

interface IProps {
  numberLines?: number;
}

/**
 * This component will render the custom content loader
 * @component
 * @example
 * <CustomContentLoader />
 */
const CustomContentLoader: React.FC<IProps> = (props) => {
  const { numberLines = 3 } = props;
  const defaultArray: Array<string> = new Array(numberLines).fill(' ');
  return (
    <>
      {defaultArray.map((_, i) => (
        <LoaderBlock key={`block_${i}`}>
          <ContentLoader
            speed={2}
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            width={'90vw'}
          >
            {defaultArray.map((_, i) => {
              return (
                <rect
                  x="10"
                  y={i * 20 + 20}
                  rx="5"
                  ry="5"
                  width="100%"
                  height="12"
                  key={`rect_${i}`}
                />
              );
            })}
          </ContentLoader>
        </LoaderBlock>
      ))}
    </>
  );
};

export default CustomContentLoader;
