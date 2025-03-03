import { useState } from 'react';
import useRadioStore from '../store/useRadioStore';
import RadioList from '../components/RadioList';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';

const FavoritesPage = () => {
  const { favoriteRadios, removeFavorite, editFavorite } = useRadioStore();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const filteredFavorites = searchTerm
    ? favoriteRadios.filter((radio) =>
        radio.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : favoriteRadios;

  return (
    <div className="p-1 d-flex w-100 min-vh-100">
      <Sidebar />
      <div className="w-100 d-flex flex-column bg-body">
        <Header />
        <h2 style={{ color: 'var(--light)' }}>Favorite Radios</h2>
        <SearchBar onSearch={handleSearch} />
        <div className="flex-grow-1">
          <RadioList
            radios={filteredFavorites}
            onRemoveFavorite={removeFavorite}
            onEditFavorite={editFavorite}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default FavoritesPage;
