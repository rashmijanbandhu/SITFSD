// ExampleComponent.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import ExampleComponent from './ExampleComponent';

let container;

beforeEach(() => {
  container = render(<ExampleComponent />);
});

afterEach(() => {
  container.unmount();
});

test('renders loading text initially', () => {
  const loadingText = screen.getByText(/Loading.../i);
  expect(loadingText).toBeInTheDocument();
});
test('displays fetched data', async () => {
    const dataText = await screen.findByText(/Data:/i);
    expect(dataText).toBeInTheDocument();
  });