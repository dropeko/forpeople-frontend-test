import { useState } from 'react';
import useRadioStore from '../store/useRadioStore';
import RadioList from '../components/RadioList';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
  const allRadios = useRadioStore((state) => state.allRadios);
  const addFavorite = useRadioStore((state) => state.addFavorite);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredRadios = searchTerm
    ? allRadios.filter((radio) =>
        radio.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        radio.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        radio.language.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allRadios;

  return (
    <div
      className="d-flex w-100"
      style={{ height: '100vh', overflow: 'hidden' }}
    >
      <Sidebar />
      <div
        className="w-100 d-flex flex-column bg-body"
        style={{ height: '100vh' }}
      >
        <Header />
        <SearchBar onSearch={handleSearch} />
        <div className="flex-grow-1" style={{ overflowY: 'auto' }}>
          <RadioList radios={filteredRadios} onAddFavorite={addFavorite} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
