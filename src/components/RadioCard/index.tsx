import { Card, Button } from 'react-bootstrap';
import { Radio } from '../../utils/types/types';
import AudioPlayer from '../AudioPlayer';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

interface RadioCardProps {
  radio: Radio;
  onAddFavorite?: () => void;
  onRemoveFavorite?: () => void;
  onEditFavorite?: () => void;
}

const RadioCard = ({ radio, onAddFavorite, onRemoveFavorite, onEditFavorite }: RadioCardProps) => {
  return (
    <Card className="mb-1" style={{ backgroundColor: 'var(--light)' }}>
      <Card.Body>
        <div className="d-flex justify-content-between align-items-center">
          <div className="d-flex align-items-center gap-3">
            <AudioPlayer url={radio.url_resolved || radio.url} />
            {radio.favicon && (
              <img
                src={radio.favicon}
                alt={radio.name}
                className="rounded-circle"
                style={{ width: '50px', height: '50px' }}
              />
            )}
            <div>
              <Card.Title style={{ color: 'var(--white)' }}>{radio.name}</Card.Title>
              <Card.Text style={{ color: 'var(--white)' }}>
                {radio.country} - {radio.language}
              </Card.Text>
            </div>
          </div>

          <div className="d-flex gap-1 align-items-center">
            <Button
              onClick={() => window.open(radio.homepage, '_blank')}
              style={{ backgroundColor: 'var(--primary)', borderColor: 'var(--primary)' }}
            >
              <HomeIcon />
              Visitar Homepage
            </Button>
            {onAddFavorite && (
              <Button
                onClick={onAddFavorite}
                style={{ backgroundColor: 'var(--secondary)', borderColor: 'var(--secondary)' }}
              >
                <FavoriteIcon />
                Adicionar Favorito
              </Button>
            )}
            {onEditFavorite && (
              <Button
                onClick={onEditFavorite}
                style={{ backgroundColor: 'var(--secondary)', borderColor: 'var(--secondary)' }}
              >
                <EditIcon />
                Editar
              </Button>
            )}
            {onRemoveFavorite && (
              <Button
                onClick={onRemoveFavorite}
                style={{ backgroundColor: 'var(--primary)', borderColor: 'var(--secondary)' }}
              >
                <DeleteIcon />
                Remover
              </Button>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};

export default RadioCard;