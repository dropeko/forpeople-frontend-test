import { Card, Button } from 'react-bootstrap';
import { Radio } from '../../utils/types/types';
import AudioPlayer from '../AudioPlayer';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import './style.css';

interface RadioCardProps {
  radio: Radio;
  onAddFavorite?: () => void;
  onRemoveFavorite?: () => void;
  onEditFavorite?: () => void;
}

const RadioCard = ({ radio, onAddFavorite, onRemoveFavorite, onEditFavorite }: RadioCardProps) => {
  return (
    <Card className="mb-1 radio-card-container">
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-1 radio-card-left">
            <div className='pb-1'>
              <AudioPlayer url={radio.url_resolved || radio.url} />
            </div>
            {radio.favicon && (
              <img
                src={radio.favicon}
                alt={radio.name}
                className="rounded-circle radio-card-img pt-1 me-1 mt-1 ms-1"
              />
            )}
            <div className="radio-card-info">
              <Card.Title className="radio-card-title">{radio.name}</Card.Title>
              <Card.Text className="radio-card-text">
                {radio.country} - {radio.language}
              </Card.Text>
            </div>
          </div>

          <div className="d-flex gap-1 radio-card-buttons">
            {onAddFavorite && (
              <Button onClick={onAddFavorite} className="radio-card-btn-favorite">
                <FavoriteIcon />
                <span className="radio-card-btn-text">Favorite</span>
              </Button>
            )}
            <Button
              onClick={() => window.open(radio.homepage, '_blank')}
              className="radio-card-btn-home"
            >
              <HomeIcon style={{ color: 'white' }} />
              <span className="radio-card-btn-text">Rádio Page</span>
            </Button>
            {onEditFavorite && (
              <Button onClick={onEditFavorite} className="radio-card-btn-edit">
                <EditIcon />
                <span className="radio-card-btn-text">Edit</span>
              </Button>
            )}
            {onRemoveFavorite && (
              <Button onClick={onRemoveFavorite} className="radio-card-btn-remove">
                <DeleteIcon />
                <span className="radio-card-btn-text">Remove</span>
              </Button>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RadioCard;