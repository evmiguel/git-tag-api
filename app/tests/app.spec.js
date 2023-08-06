import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from '../components/App';


global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ created_at: '2023-08-06T12:12:00Z' }),
  })
);

beforeEach(() => {
  fetch.mockClear();
});

test('renders input, button, and heading with initial state', () => {
  render(<App />);
  const inputElement = screen.getByPlaceholderText(
    'Search for a tag in the blockapps/strato-getting-started repository'
  );
  const buttonElement = screen.getByText('Get Tag Creation Date');
  const headingElement = screen.getByText('Creation date:');

  expect(inputElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();
  expect(headingElement).toBeInTheDocument();
  expect(headingElement).toHaveTextContent('Creation date:');
});
