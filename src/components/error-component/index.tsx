import React from 'react';
import { ApolloError } from '@apollo/client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { ErrorUlBlock, ErrorLabel, ErrorHeader } from './styles';

interface IProps {
  errors: ApolloError;
}

/**
 * This component will render the list of all the errors
 * @component
 * @example
 * <ErrorComponent errors={{graphQlErrors:[{message:'error'}]}}/>
 */
const ErrorComponent: React.FC<IProps> = (props) => {
  const listOfErros = props.errors.graphQLErrors;
  const errorMessages = listOfErros.map((error: Error, index: number) => {
    const { message } = error;
    return (
      <li key={`${message}_${index}`} data-testid={`error-${index}`}>
        {message}
      </li>
    );
  });

  return (
    <>
      <ErrorHeader>
        <FontAwesomeIcon icon={faExclamationTriangle} color={'#ff3333'} size={'lg'} />
        <ErrorLabel>
          <strong>Errors!</strong>
        </ErrorLabel>
      </ErrorHeader>
      <ErrorUlBlock>{errorMessages}</ErrorUlBlock>
    </>
  );
};

export default ErrorComponent;
