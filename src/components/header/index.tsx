import React from 'react';
import { useStateValue } from 'src/state/context';
import { HeaderDiv, IconDiv } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

/**
 * This component will render the header of the application
 * @component
 * @example
 * <Header />
 */
const Header: React.FC = () => {
  const { state } = useStateValue();
  const { headerInfo } = state;
  const { goBack, title, backText } = headerInfo;

  return (
    <HeaderDiv>
      {goBack && (
        <IconDiv onClick={goBack}>
          <FontAwesomeIcon icon={faChevronLeft} />
          <p>{backText || ''}</p>
        </IconDiv>
      )}
      <h1 data-testid="header-title">{title}</h1>
    </HeaderDiv>
  );
};

export default Header;
