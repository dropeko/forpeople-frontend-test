import { Navbar, Container, Button } from 'react-bootstrap';
import { useLocation, useNavigate, Link } from 'react-router-dom';
import RadioIcon from '@mui/icons-material/Radio';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import './style.css';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === '/';

  return (
    <Navbar expand="lg" className="header-navbar">
      <Container className="d-flex justify-content-between align-items-center">
        <Navbar.Brand
          as={Link}
          to="/"
          className="d-flex align-items-center header-brand-text"
        >
          <RadioIcon className="header-icon" />
          Browser Radio
        </Navbar.Brand>
        {isHomePage ? (
          <Button
            variant="outline-light"
            onClick={() => navigate('/favorites')}
            className="d-flex align-items-center header-button"
          >
            <FavoriteIcon className="header-icon" />
            Favorites
          </Button>
        ) : (
          <Button
            variant="outline-light"
            onClick={() => navigate('/')}
            className="d-flex align-items-center header-button"
          >
            <HomeIcon className="header-icon" />
            Home
          </Button>
        )}
      </Container>
    </Navbar>
  );
};

export default Header;
