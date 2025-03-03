import { useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap';

interface SearchBarProps {
  onSearch: (term: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <InputGroup className="mb-2 mt-2 w-50 p-1">
      <Form.Control
        type="text"
        placeholder="Pesquisar por nome da rádio"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ backgroundColor: 'var(--light)', color: 'var(--white)' }}
      />
      <Button
        variant="primary"
        onClick={handleSearch}
        style={{ backgroundColor: 'var(--primary)', borderColor: 'var(--primary)' }}
      >
        Pesquisar
      </Button>
    </InputGroup>
  );
};

export default SearchBar;