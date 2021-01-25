import { render, screen } from '@testing-library/react';
import CalcApp from './CalcApp';

test('renders learn react link', () => {
  render(<CalcApp />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
