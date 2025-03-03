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

  // Agora, handleSearch apenas atualiza o estado de busca
  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  // Filtra as rádios com base em "name", "country" e "language"
  const filteredRadios = searchTerm
    ? allRadios.filter((radio) =>
        radio.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        radio.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
        radio.language.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : allRadios;

  return (
    <div className="p-1 d-flex w-100 min-vh-100">
      <Sidebar />
      <div className="w-100 d-flex flex-column bg-body">
        <Header />
        <SearchBar onSearch={handleSearch} />
        <div className="flex-grow-1">
          <RadioList
            radios={filteredRadios}
            onAddFavorite={addFavorite}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
