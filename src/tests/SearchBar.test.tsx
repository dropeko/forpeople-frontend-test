import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import SearchBar from '../components/SearchBar';
import '@testing-library/jest-dom/vitest';

vi.mock('@mui/icons-material/Search', () => ({
  default: () => <span data-testid="search-icon">SearchIcon</span>,
}));

describe('SearchBar Component', () => {
  const mockOnSearch = vi.fn();

  it('renders the search bar correctly', () => {
    render(<SearchBar onSearch={mockOnSearch} />);

    expect(screen.getByTestId('search-icon')).toBeInTheDocument();

    const inputElement = screen.getByPlaceholderText('Search for name, country or language');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass('searchbar-input');
  });

  it('updates the search term when typing in the input', () => {
    render(<SearchBar onSearch={mockOnSearch} />);

    const inputElement = screen.getByPlaceholderText('Search for name, country or language');

    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(inputElement).toHaveValue('test');
  });

  it('calls onSearch when the input value changes', () => {
    render(<SearchBar onSearch={mockOnSearch} />);

    const inputElement = screen.getByPlaceholderText('Search for name, country or language');

    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(mockOnSearch).toHaveBeenCalledWith('test');
  });

  it('displays the correct placeholder', () => {
    render(<SearchBar onSearch={mockOnSearch} />);

    const inputElement = screen.getByPlaceholderText('Search for name, country or language');
    expect(inputElement).toBeInTheDocument();
  });

  it('renders the search icon', () => {
    render(<SearchBar onSearch={mockOnSearch} />);

    const searchIcon = screen.getByTestId('search-icon');
    expect(searchIcon).toBeInTheDocument();
  });
});