import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import SearchBar from '../SearchBar';
import useRadioStore from '../../store/useRadioStore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import './style.css';

const Sidebar = () => {
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');

  const isHomePage = location.pathname === '/';
  const radios = isHomePage
    ? useRadioStore((state) => state.favoriteRadios)
    : useRadioStore((state) => state.allRadios);

  const addFavorite = useRadioStore((state) => state.addFavorite);
  const removeFavorite = useRadioStore((state) => state.removeFavorite);

  const filteredRadios = radios.filter((radio) =>
    radio.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="sidebar-container">
      <SearchBar onSearch={(term) => setSearchTerm(term)} />
      <div>
        {}
      </div>
      <div className="sidebar-list-container">
        {filteredRadios.map((radio) => (
          <div key={radio.stationuuid} className="sidebar-radio-item">
            <img
              src={radio.favicon || 'https://img.icons8.com/?size=256w&id=Hh1B7BSHLkhc&format=png'}
              alt={radio.name}
              className="sidebar-radio-img"
            />
            <span className="sidebar-radio-name">{radio.name}</span>
            <div className="sidebar-icon-container">
              {!isHomePage ? (
                <FavoriteIcon
                  onClick={(e) => {
                    e.stopPropagation();
                    addFavorite(radio);
                  }}
                  className="sidebar-favorite-icon"
                />
              ) : (
                <DeleteIcon
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFavorite(radio.stationuuid);
                  }}
                  className="sidebar-delete-icon"
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
