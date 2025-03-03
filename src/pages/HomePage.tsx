import { useState } from 'react';
import useRadioStore from '../store/useRadioStore';
import useApi from '../hooks/useApi';
import RadioList from '../components/RadioList';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const HomePage = () => {
  const allRadios = useRadioStore((state) => state.allRadios);
  const addFavorite = useRadioStore((state) => state.addFavorite);
  const [searchTerm, setSearchTerm] = useState('');
  const { makeRequest, data: searchResults, loading, error } = useApi<any[]>();

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    makeRequest(`https://de1.api.radio-browser.info/json/stations/search?name=${term}&limit=1`);
  };

  return (
    <>
      <div className="p-1 d-flex w-100 min-vh-100">
        <Sidebar />
        <div className=' w-100 d-flex flex-column bg-body'>
        <Header/>
        <SearchBar onSearch={handleSearch} />
        <div className="flex-grow-1">
          {loading && <p style={{ color: 'var(--dark)' }}>Carregando...</p>}
          {error && <p style={{ color: 'var(--dark)' }}>Erro: {error}</p>}
          <RadioList
            radios={searchTerm ? searchResults || [] : allRadios}
            onAddFavorite={addFavorite}
          />
        </div>
        <Footer/>
        </div>
      </div>
    </>
  );
};

export default HomePage;