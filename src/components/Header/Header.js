import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css'
function BasicExample() {
  return (
    <Navbar className='header-bg' expand="lg">
      <Container>
        <Navbar.Brand>
            <img src={logo} className="img-fluid w-50" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-link">
            <Link className='text-center' to='/home'>Home</Link>
            <Link className='text-center' to='/quiz'>Quiz</Link>
            <Link className='text-center' to='/blog'>Blog</Link>
            <Link className='text-center' to='/statistics'>Statistics</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;