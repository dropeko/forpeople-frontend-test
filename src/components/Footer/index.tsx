import { Navbar, Container } from 'react-bootstrap';
import './style.css';

const Footer = () => {
  return (
    <Navbar className="footer-navbar">
      <Container className="justify-content-center">
        <Navbar.Text className="footer-text">
          &copy; Desenvolvido cuidadosamente por @phca.dev
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;
