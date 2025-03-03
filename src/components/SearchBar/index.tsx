import { useState } from 'react';
import { Form, InputGroup } from 'react-bootstrap';
import SearchIcon from '@mui/icons-material/Search';
import './style.css';

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
    <div className="searchbar-container">
      <InputGroup className="mb-2 mt-2 rounded-1">
        <Form.Control
          type="text"
          placeholder="Search for name, country or language"
          value={searchTerm}
          onChange={handleInputChange}
          className="searchbar-input"
        />
      </InputGroup>
      <SearchIcon className="searchbar-icon" />
    </div>
  );
};

export default SearchBar;
