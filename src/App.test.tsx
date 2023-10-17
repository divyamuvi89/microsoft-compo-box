import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App component', () => {
  render(<App />);
  const headerElement = screen.getByText(/Choose a fruit/i); 
  expect(headerElement).toBeInTheDocument();
});
