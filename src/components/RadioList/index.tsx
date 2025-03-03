// src/components/RadioList.tsx
import RadioCard from '../RadioCard';
import { Radio } from '../../utils/types/types';

interface RadioListProps {
  radios: Radio[];
  onAddFavorite?: (radio: Radio) => void;
  onRemoveFavorite?: (stationuuid: string) => void;
  onEditFavorite?: (stationuuid: string, updatedRadio: Partial<Radio>) => void;
}

const RadioList = ({ radios, onAddFavorite, onRemoveFavorite, onEditFavorite }: RadioListProps) => {
  return (
    <div className='d-flex flex-column p-1'>
      {radios.map((radio) => (
        <RadioCard
          key={radio.stationuuid}
          radio={radio}
          onAddFavorite={onAddFavorite ? () => onAddFavorite(radio) : undefined}
          onRemoveFavorite={onRemoveFavorite ? () => onRemoveFavorite(radio.stationuuid) : undefined}
          onEditFavorite={onEditFavorite ? () => onEditFavorite(radio.stationuuid, radio) : undefined}
        />
      ))}
    </div>
  );
};

export default RadioList;