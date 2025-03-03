import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { PlayFill, StopFill } from 'react-bootstrap-icons';

interface AudioPlayerProps {
  url: string;
}

const AudioPlayer = ({ url }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleStop = () => {
    setIsPlaying(false);
  };

  return (
    <div className="mt-3">
      {isPlaying ? (
        <audio autoPlay src={url} />
      ) : null}
      <Button
        variant={isPlaying ? 'danger' : 'success'}
        onClick={isPlaying ? handleStop : handlePlay}
        style={{
          backgroundColor: isPlaying ? 'var(--secondary)' : 'var(--primary)',
          borderColor: isPlaying ? 'var(--secondary)' : 'var(--primary)',
        }}
      >
        {isPlaying ? <StopFill /> : <PlayFill />}
      </Button>
    </div>
  );
};

export default AudioPlayer;