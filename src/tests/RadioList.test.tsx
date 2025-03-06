import { render, screen, fireEvent } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import RadioList from '../components/RadioList';
import { Radio } from '../utils/types/types';
import '@testing-library/jest-dom/vitest';

vi.mock('../components/RadioCard', () => ({
  default: ({ radio, onAddFavorite, onRemoveFavorite, onEditFavorite }: any) => (
    <div
      data-testid="radio-card"
      onClick={() => {
        if (onAddFavorite) onAddFavorite(radio);
        if (onRemoveFavorite) onRemoveFavorite(radio.stationuuid);
        if (onEditFavorite) onEditFavorite(radio.stationuuid, radio);
      }}
    >
      {radio.name}
    </div>
  ),
}));

describe('RadioList Component', () => {
  const mockRadios: Radio[] = Array.from({ length: 10 }, (_, index) => ({
    stationuuid: `uuid-${index}`,
    name: `Radio ${index + 1}`,
    country: 'Test Country',
    language: 'Test Language',
    url: `http://test.url/${index}`,
    url_resolved: `http://test.url/resolved/${index}`,
    homepage: `http://test.homepage/${index}`,
    favicon: `http://test.favicon/${index}`,
  }));

  const mockOnAddFavorite = vi.fn();
  const mockOnRemoveFavorite = vi.fn();
  const mockOnEditFavorite = vi.fn();

  it('renders the list of radios correctly', () => {
    render(
      <RadioList
        radios={mockRadios}
        onAddFavorite={mockOnAddFavorite}
        onRemoveFavorite={mockOnRemoveFavorite}
        onEditFavorite={mockOnEditFavorite}
      />
    );

    expect(screen.getAllByTestId('radio-card')).toHaveLength(6);
    expect(screen.getByText('Radio 1')).toBeInTheDocument();
    expect(screen.getByText('Radio 6')).toBeInTheDocument();
  });

  it('renders pagination when there are multiple pages', () => {
    render(
      <RadioList
        radios={mockRadios}
        onAddFavorite={mockOnAddFavorite}
        onRemoveFavorite={mockOnRemoveFavorite}
        onEditFavorite={mockOnEditFavorite}
      />
    );

    expect(screen.getByRole('list')).toBeInTheDocument();
    expect(screen.getByText('1')).toBeInTheDocument();
    expect(screen.getByText('2')).toBeInTheDocument();
  });

  it('changes page when a pagination item is clicked', () => {
    render(
      <RadioList
        radios={mockRadios}
        onAddFavorite={mockOnAddFavorite}
        onRemoveFavorite={mockOnRemoveFavorite}
        onEditFavorite={mockOnEditFavorite}
      />
    );

    const page2Button = screen.getByText('2');
    fireEvent.click(page2Button);

    expect(screen.getByText('Radio 7')).toBeInTheDocument();
    expect(screen.getByText('Radio 10')).toBeInTheDocument();
  });

  it('does not render pagination when there is only one page', () => {
    const singlePageRadios = mockRadios.slice(0, 5);
    render(
      <RadioList
        radios={singlePageRadios}
        onAddFavorite={mockOnAddFavorite}
        onRemoveFavorite={mockOnRemoveFavorite}
        onEditFavorite={mockOnEditFavorite}
      />
    );

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  it('calls onAddFavorite when a radio is added to favorites', () => {
    render(
      <RadioList
        radios={mockRadios}
        onAddFavorite={mockOnAddFavorite}
      />
    );

    const radioCard = screen.getByText('Radio 1');
    fireEvent.click(radioCard);

    expect(mockOnAddFavorite).toHaveBeenCalledWith(mockRadios[0]);
  });

  it('calls onRemoveFavorite when a radio is removed from favorites', () => {
    render(
      <RadioList
        radios={mockRadios}
        onRemoveFavorite={mockOnRemoveFavorite}
      />
    );

    const radioCard = screen.getByText('Radio 1');
    fireEvent.click(radioCard);

    expect(mockOnRemoveFavorite).toHaveBeenCalledWith(mockRadios[0].stationuuid);
  });

  it('calls onEditFavorite when a radio is edited', () => {
    render(
      <RadioList
        radios={mockRadios}
        onEditFavorite={mockOnEditFavorite}
      />
    );

    const radioCard = screen.getByText('Radio 1');
    fireEvent.click(radioCard);

    expect(mockOnEditFavorite).toHaveBeenCalledWith(mockRadios[0].stationuuid, mockRadios[0]);
  });
});