import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';

const Sidebar = () => {
  return (
    <Nav className="flex-column p-1" style={{ backgroundColor: 'var(--dark)', width: '20%' }}>
      <Nav.Link as={Link} to="/" style={{ color: 'var(--white)' }} className='d-flex align-items-center'>
        <HomeIcon style={{ marginRight: '.5rem' }} />
        Home
      </Nav.Link>
      <Nav.Link as={Link} to="/favorites" style={{ color: 'var(--white)' }} className='d-flex align-items-center'>
        <FavoriteIcon style={{ marginRight: '.5rem' }} />
        Favoritos
      </Nav.Link>
    </Nav>
  );
};

export default Sidebar;