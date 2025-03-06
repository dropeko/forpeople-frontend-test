import { vi, describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import RadioCard from '../components/RadioCard';
import { Radio } from '../utils/types/types'; 
import '@testing-library/jest-dom/vitest';


vi.mock('@mui/icons-material/Home', () => ({
  default: () => <span>HomeIcon</span>,
}));
vi.mock('@mui/icons-material/Favorite', () => ({
  default: () => <span>FavoriteIcon</span>,
}));
vi.mock('@mui/icons-material/Edit', () => ({
  default: () => <span>EditIcon</span>,
}));
vi.mock('@mui/icons-material/Delete', () => ({
  default: () => <span>DeleteIcon</span>,
}));

vi.mock('../components/AudioPlayer', () => ({
  default: () => <div>AudioPlayer</div>,
}));

describe('RadioCard Component', () => {
  const mockRadio: Radio = {
    name: 'Test Radio',
    country: 'Test Country',
    language: 'Test Language',
    url: 'http://test.url',
    url_resolved: 'http://test.url/resolved',
    homepage: 'http://test.homepage',
    favicon: 'http://test.favicon',
  };

  const mockOnAddFavorite = vi.fn();
  const mockOnRemoveFavorite = vi.fn();
  const mockOnEditFavorite = vi.fn();

  it('renders correctly with all props', () => {
    render(
      <RadioCard
        radio={mockRadio}
        onAddFavorite={mockOnAddFavorite}
        onRemoveFavorite={mockOnRemoveFavorite}
        onEditFavorite={mockOnEditFavorite}
      />
    );

    expect(screen.getByText('Test Radio')).toBeInTheDocument();
    expect(screen.getByText('Test Country - Test Language')).toBeInTheDocument();
    expect(screen.getByText('FavoriteIcon')).toBeInTheDocument();
    expect(screen.getByText('Rádio Page')).toBeInTheDocument();
    expect(screen.getByText('Edit')).toBeInTheDocument();
    expect(screen.getByText('Remove')).toBeInTheDocument();
  });

  it('calls onAddFavorite when the favorite button is clicked', () => {
    render(
      <RadioCard
        radio={mockRadio}
        onAddFavorite={mockOnAddFavorite}
      />
    );

    const favoriteButton = screen.getByText('FavoriteIcon');
    fireEvent.click(favoriteButton);
    expect(mockOnAddFavorite).toHaveBeenCalledTimes(1);
  });

  it('calls onEditFavorite when the edit button is clicked', () => {
    render(
      <RadioCard
        radio={mockRadio}
        onEditFavorite={mockOnEditFavorite}
      />
    );

    const editButton = screen.getByText('EditIcon');
    fireEvent.click(editButton);
    expect(mockOnEditFavorite).toHaveBeenCalledTimes(1);
  });

  it('calls onRemoveFavorite when the remove button is clicked', () => {
    render(
      <RadioCard
        radio={mockRadio}
        onRemoveFavorite={mockOnRemoveFavorite}
      />
    );

    const removeButton = screen.getByText('DeleteIcon');
    fireEvent.click(removeButton);
    expect(mockOnRemoveFavorite).toHaveBeenCalledTimes(1);
  });
});