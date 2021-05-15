import React from 'react';
import renderEl from 'src/testUtils/tests-render';
import ErrorComponent from '..';

const errors = {
  message: '',
  name: '',
  networkError: '',
  extraInfo: {},
  graphQLErrors: [
    {
      path: ['repository'],
      locations: [
        {
          line: 2,
          column: 3,
        },
      ],
      message: "Could not resolve to a Repository with the name 'und/react'.",
    },
  ],
};

const setup = ({ errors }) => renderEl(<ErrorComponent errors={errors} />);

describe('Error component', () => {
  it('renders the component wihtout crashing', () => {
    const { getByTestId } = setup({
      errors,
    });

    const el = getByTestId('error-0');
    expect(el).toHaveTextContent("Could not resolve to a Repository with the name 'und/react'.");

    expect(el).toMatchSnapshot();
  });
});
