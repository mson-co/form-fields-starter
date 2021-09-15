import { render, screen } from '@testing-library/react';
import App from './App';

test('renders form', async () => {
  render(<App />);
  const fullNameElement = await screen.findByLabelText(/Full Name/i);
  expect(fullNameElement).toBeInTheDocument();
});
