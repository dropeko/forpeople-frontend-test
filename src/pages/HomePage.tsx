import { useState, useEffect } from 'react';
import useRadioStore from '../store/useRadioStore';
import RadioList from '../components/RadioList';
import SearchBar from '../components/SearchBar';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar';
import Spinner from 'react-bootstrap/Spinner';

const HomePage = () => {
  const allRadios = useRadioStore((state) => state.allRadios);
  const isLoading = useRadioStore((state) => state.isLoading);
  const addFavorite = useRadioStore((state) => state.addFavorite);
  const setFavoriteRadios = useRadioStore((state) => state.setFavoriteRadios);
  const [searchTerm, setSearchTerm] = useState('');
 
  const addFavoriteWrapper = (radio: any) => {
    addFavorite(radio);
    const currentFavorites = useRadioStore.getState().favoriteRadios;
    localStorage.setItem('favoriteRadios', JSON.stringify(currentFavorites));
  };

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

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favoriteRadios');
    
    if (storedFavorites) {
      setFavoriteRadios(JSON.parse(storedFavorites));
    }
  }, [setFavoriteRadios]);

  return (
    <div className="d-flex" style={{ height: '100vh', overflow: 'hidden' }}>
      <Sidebar />
      <div className="w-100 d-flex flex-column bg-body" style={{ height: '100vh' }}>
        <Header />
        <SearchBar onSearch={handleSearch} />
        <div className="flex-grow-1" style={{ overflowY: 'auto' }}>
          {isLoading ? (
              <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: '100%' }}>
                <Spinner animation="border" role="status" className='home-spinner' />
                  <span className='home-spinner-text'>Searching the GOAT radios...</span>
              </div>
            ) : (
              <div className='home-radio-list'>
                <RadioList radios={filteredRadios} onAddFavorite={addFavoriteWrapper} />
              </div>
            )}
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
