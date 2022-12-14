import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css'
function BasicExample() {
  // nav link style 
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
    <Navbar className='header-bg' expand="lg">
      <Container>
        <Navbar.Brand>
            <img src={logo} className="img-fluid w-50" alt="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto custom-link">
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='text-center' to='/home'>Home</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='text-center' to='/quiz'>Quiz</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='text-center' to='/blog'>Blog</NavLink>
            <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} className='text-center' to='/statistics'>Statistics</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;