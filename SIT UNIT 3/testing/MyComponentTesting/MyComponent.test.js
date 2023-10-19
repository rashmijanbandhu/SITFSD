import React from 'react';
import { render, screen } from '@testing-library/react';
import MyComponent from './MyComponent'; // Import your component

// Test case: Render MyComponent and check if it contains a specific text
test('renders MyComponent with a specific text', () => {
  render(<MyComponent />);
  const textElement = screen.getByText('Hello, World!');
  expect(textElement).toBeInTheDocument();
});