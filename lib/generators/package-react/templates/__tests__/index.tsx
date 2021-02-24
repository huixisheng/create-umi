import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import <%= name %> from '../index';

afterEach(cleanup);

test('<%= name %> render', () => {
  const { asFragment, getByText, container } = render(<<%= name %> />);
  expect(asFragment()).toMatchSnapshot();
  expect(getByText('Click me')).toBeInTheDocument();

  const button = getByText('Click me');
  fireEvent.click(button);
  expect(container.querySelector('p').textContent).toEqual('You clicked 1 times')

});
