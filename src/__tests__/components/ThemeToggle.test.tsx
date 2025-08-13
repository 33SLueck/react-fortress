import { render, screen, fireEvent, act } from '@testing-library/react';
import { describe, it, expect, beforeEach } from 'vitest';

import ThemeToggle from '../../components/ThemeToggle';

describe('ThemeToggle', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('renders with sun emoji in light mode', () => {
    render(<ThemeToggle />);
    expect(screen.getByText('☀️')).toBeInTheDocument();
  });

  it('renders with moon emoji in dark mode', () => {
    document.documentElement.classList.add('dark');
    render(<ThemeToggle />);
    expect(screen.getByText('🌙')).toBeInTheDocument();
  });

  it('toggles theme when clicked', async () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /toggle theme/i });

    // Initially should be light mode
    expect(screen.getByText('☀️')).toBeInTheDocument();
    expect(document.documentElement.classList.contains('dark')).toBe(false);

    // Click to toggle to dark mode
    await act(async () => {
      fireEvent.click(button);
    });

    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('theme')).toBe('dark');
  });

  it('has proper accessibility attributes', () => {
    render(<ThemeToggle />);
    const button = screen.getByRole('button', { name: /toggle theme/i });
    expect(button).toHaveAttribute('aria-label', 'Toggle theme');
  });
});
