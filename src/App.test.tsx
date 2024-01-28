import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
<<<<<<< HEAD
=======
  expect(linkElement).toBeInTheDocument();
>>>>>>> 21d7be62d554915787485641c4ea1187492767dd
});
