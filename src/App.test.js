import React from 'react';
import { render } from '@testing-library/react';
import App from "./App";

// https://testing-library.com/docs/react-testing-library/api#render
test('renders facebook link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Facebook/i);
  expect(linkElement).toBeInTheDocument();
});
