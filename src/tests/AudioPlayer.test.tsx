import { render, screen, fireEvent, act } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';
import AudioPlayer from '../components/AudioPlayer';
import '@testing-library/jest-dom/vitest';

vi.mock('react-bootstrap-icons', () => ({
  PlayFill: () => <span>PlayFill</span>,
  StopFill: () => <span>StopFill</span>,
}));

describe('AudioPlayer Component', () => {
  const mockUrl = 'http://test.audio.url';

  it('renders correctly with the play button', () => {
    render(<AudioPlayer url={mockUrl} />);

    expect(screen.getByText('PlayFill')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('audio-player-button-stopped');
  });

  it('starts playing audio when the play button is clicked', () => {
    render(<AudioPlayer url={mockUrl} />);

    const playButton = screen.getByText('PlayFill');
    act(() => {
      fireEvent.click(playButton);
    });

    expect(screen.getByText('StopFill')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('audio-player-button-playing');
  });

  it('stops playing audio when the stop button is clicked', () => {
    render(<AudioPlayer url={mockUrl} />);

    const playButton = screen.getByText('PlayFill');
    act(() => {
      fireEvent.click(playButton);
    });

    const stopButton = screen.getByText('StopFill');
    act(() => {
      fireEvent.click(stopButton);
    });

    expect(screen.getByText('PlayFill')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('audio-player-button-stopped');
  });

  it('stops playing when another audio starts playing', () => {
    render(<AudioPlayer url={mockUrl} />);

    const playButton = screen.getByText('PlayFill');
    act(() => {
      fireEvent.click(playButton); // Inicia a reprodução
    });

    const event = new CustomEvent('audioPlay', { detail: { id: 'another-player-id' } });
    act(() => {
      window.dispatchEvent(event);
    });

    expect(screen.getByText('PlayFill')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('audio-player-button-stopped');
  });

  it('stops playing when the audio ends', () => {
    render(<AudioPlayer url={mockUrl} />);

    const playButton = screen.getByText('PlayFill');
    act(() => {
      fireEvent.click(playButton);
    });

    const audioElement = screen.getByTestId('audio-element');
    act(() => {
      fireEvent.ended(audioElement);
    });

    expect(screen.getByText('PlayFill')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('audio-player-button-stopped');
  });
});