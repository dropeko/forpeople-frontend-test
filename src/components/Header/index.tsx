import { Navbar, Container } from 'react-bootstrap';
import RadioIcon from '@mui/icons-material/Radio';

const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" style={{ backgroundColor: 'var(--light) !important' }}>
      <Container className='d-flex justify-content-center'>
        <Navbar.Brand href="/" style={{ color: 'var(--white)' }} className='d-flex align-items-center'>
          <RadioIcon style={{ marginRight: '0.5rem' }} />
          <span>
            Browser Radio
          </span>
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;