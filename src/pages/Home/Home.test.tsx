import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Component', () => {
  it('renders welcome message', () => {
    render(<Home />);
    expect(screen.getByText('Welcome to AG Grid Testing App')).toBeInTheDocument();
  });

  it('renders description text', () => {
    render(<Home />);
    expect(
      screen.getByText('This is a testing ground for AG Grid, Axios, and TypeScript')
    ).toBeInTheDocument();
  });
});