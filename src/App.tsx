import { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import useRadioStore from './store/useRadioStore';
import HomePage from './pages/HomePage';
import FavoritesPage from './pages/FavoritesPage';
import { API_BASE_URL } from './utils/constants/baseUrl';

function App() {
  const setAllRadios = useRadioStore((state) => state.setAllRadios);
  const setIsLoading = useRadioStore((state) => state.setIsLoading);

  useEffect(() => {
    const fetchRadios = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(API_BASE_URL);

        const filteredRadios = response.data.map((radio: any) => ({
          stationuuid: radio.stationuuid,
          name: radio.name,
          url: radio.url,
          url_resolved: radio.url_resolved,
          homepage: radio.homepage,
          favicon: radio.favicon,
          country: radio.country,
          language: radio.language,
          votes: radio.votes,
          codec: radio.codec,
          bitrate: radio.bitrate,
        }));
        setAllRadios(filteredRadios);
      } catch (error) {
        console.error('Erro ao carregar rádios:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRadios();
  }, [setAllRadios, setIsLoading]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </Router>
  );
}

export default App;