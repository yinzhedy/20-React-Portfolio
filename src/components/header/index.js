import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

const Header = () => (
    <Navbar bg="dark" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Yinzhe D.Y.</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about-me">About</Nav.Link>
      <Nav.Link href="#resume">Resume</Nav.Link>
      <Nav.Link href="#portfolio">Portfolio</Nav.Link>
      <Nav.Link href="#contact-form">Get in touch</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
  
  export default Header;