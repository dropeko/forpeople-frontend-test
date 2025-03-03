import { useState } from 'react';
import RadioCard from '../RadioCard';
import { Radio } from '../../utils/types/types';
import { Pagination } from 'react-bootstrap';

interface RadioListProps {
  radios: Radio[];
  onAddFavorite?: (radio: Radio) => void;
  onRemoveFavorite?: (stationuuid: string) => void;
  onEditFavorite?: (stationuuid: string, updatedRadio: Partial<Radio>) => void;
}

const RadioList = ({ radios, onAddFavorite, onRemoveFavorite, onEditFavorite }: RadioListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const radiosPerPage = 7;
  const totalPages = Math.ceil(radios.length / radiosPerPage);

  const startIndex = (currentPage - 1) * radiosPerPage;
  const endIndex = startIndex + radiosPerPage;
  const paginatedRadios = radios.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className='d-flex flex-column p-1'>
      {paginatedRadios.map((radio) => (
        <RadioCard
          key={radio.stationuuid}
          radio={radio}
          onAddFavorite={onAddFavorite ? () => onAddFavorite(radio) : undefined}
          onRemoveFavorite={onRemoveFavorite ? () => onRemoveFavorite(radio.stationuuid) : undefined}
          onEditFavorite={onEditFavorite ? () => onEditFavorite(radio.stationuuid, radio) : undefined}
        />
      ))}
      {totalPages > 1 && (
        <Pagination className="mt-3 justify-content-center">
          <Pagination.Prev
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          />
          {pageNumbers.map((pageNumber) => (
            <Pagination.Item
              key={pageNumber}
              active={pageNumber === currentPage}
              onClick={() => handlePageChange(pageNumber)}
            >
              {pageNumber}
            </Pagination.Item>
          ))}
          <Pagination.Next
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          />
        </Pagination>
      )}
    </div>
  );
};

export default RadioList;
