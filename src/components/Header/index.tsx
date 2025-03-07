import { Navbar, Container, Button } from 'react-bootstrap';
import { useLocation, useNavigate } from 'react-router-dom';
import RadioIcon from '@mui/icons-material/Radio';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './style.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  return (
    <Navbar expand="lg" className="header-navbar">
      <Container className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <AccountCircleIcon className="header-button me-1" />
          <span className="header-account-text">Jhonny Cash</span>
        </div>

        {isHomePage ? (
          <Button
            variant="outline-light"
            onClick={() => navigate('/favorites')}
            className="d-flex align-items-center header-button-fav header-button"
          >
            <FavoriteIcon className="header-icon" />
            <span className="header-button-text">Favorites</span>
          </Button>
        ) : (
          <Button
            variant="outline-light"
            onClick={() => navigate('/')}
            className="d-flex align-items-center header-button"
          >
            <HomeIcon className="header-icon" />
            <span className="header-button-text">Home</span>
          </Button>
        )}
        
        <div className="header-full-brand">
          <RadioIcon className="header-icon mb-2" />
          <span className="header-full-brand-text">Old But Gold Radio Tune</span>
        </div>
      </Container>
    </Navbar>
  );
};

export default Header;
