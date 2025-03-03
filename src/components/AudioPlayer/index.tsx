import { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';
import { PlayFill, StopFill } from 'react-bootstrap-icons';
import './style.css';

interface AudioPlayerProps {
  url: string;
}

const AudioPlayer = ({ url }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const playerId = useRef(Math.random().toString(36).substr(2, 9));

  const handlePlay = () => {
    const event = new CustomEvent('audioPlay', { detail: { id: playerId.current } });
    window.dispatchEvent(event);
    setIsPlaying(true);
  };

  const handleStop = () => {
    setIsPlaying(false);
  };

  useEffect(() => {
    const onAudioPlay = (e: CustomEvent) => {
      if (e.detail.id !== playerId.current && isPlaying) {
        handleStop();
      }
    };

    window.addEventListener('audioPlay', onAudioPlay as EventListener);
    return () => {
      window.removeEventListener('audioPlay', onAudioPlay as EventListener);
    };
  }, [isPlaying]);

  return (
    <div className="audio-player-container">
      {isPlaying && (
        <audio autoPlay src={url} onEnded={handleStop} ref={audioRef} />
      )}
      <Button
        variant={isPlaying ? 'danger' : 'success'}
        onClick={isPlaying ? handleStop : handlePlay}
        className={`audio-player-button ${isPlaying ? 'audio-player-button-playing' : 'audio-player-button-stopped'}`}
      >
        {isPlaying ? <StopFill /> : <PlayFill />}
      </Button>
    </div>
  );
};

export default AudioPlayer;
