import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders C button', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/C/i);
  expect(linkElement).toBeInTheDocument();
});
