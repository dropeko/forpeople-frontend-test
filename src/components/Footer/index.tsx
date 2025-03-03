import { Navbar, Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Navbar bg="dark" variant="dark" style={{ backgroundColor: 'var(--dark)' }}>
      <Container className="justify-content-center">
        <Navbar.Text style={{ color: 'var(--white)' }}>
          &copy; Desenvolvido cuidadosamente por @phca.dev
        </Navbar.Text>
      </Container>
    </Navbar>
  );
};

export default Footer;