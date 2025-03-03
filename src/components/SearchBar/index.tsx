import { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    onSearch(term);
  };

  return (
    <InputGroup className="mb-2 mt-2 w-50 p-1 rounded-1">
      <Form.Control
        type="text"
        placeholder="Pesquisar por nome, país ou idioma"
        value={searchTerm}
        onChange={handleInputChange}
        style={{ backgroundColor: 'var(--light)', color: 'var(--white)' }}
      />
      <SearchIcon style={{ color: 'var(--primary)', fontWeight: 'bold', width: '3.75rem' }} />
    </InputGroup>
  );
};

export default SearchBar;
