import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import Home from '../../pages/Home';

describe('Home', () => {
  it('renders home page text', () => {
    render(<Home />);
    expect(screen.getByText('Home')).toBeInTheDocument();
  });

  it('has correct styling classes', () => {
    const { container } = render(<Home />);
    const homeDiv = container.firstChild as Element;
    expect(homeDiv).toHaveClass(
      'flex',
      'items-center',
      'justify-center',
      'flex-1'
    );
  });
});
