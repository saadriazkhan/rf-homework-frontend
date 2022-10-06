import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders navbar', () => {
  render(<App />);
  const headerElement = screen.getByText(/Test suites/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders container', () => {
  const { container: app } = render(<App />);

  const container = app.getElementsByClassName('container');

  expect(container.length).toBe(1);
});