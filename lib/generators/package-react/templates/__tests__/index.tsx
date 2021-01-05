import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import <%= packageName %> from '../index';

afterEach(cleanup);

test('<%= packageName %> render', () => {
  const { asFragment, getByText, container } = render(<<%= packageName %> />);
  expect(asFragment()).toMatchSnapshot();
  expect(getByText('Click me')).toBeInTheDocument();

  const button = getByText('Click me');
  fireEvent.click(button);
  expect(container.querySelector('p').textContent).toEqual('You clicked 1 times')

});
