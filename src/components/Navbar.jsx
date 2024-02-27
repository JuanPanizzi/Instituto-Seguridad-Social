import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logoSeros from '../recursos/logo-seros.png'
import { NavLink } from 'react-router-dom';
import '../styles/navbar.css'

function Navvbar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container >
        <Navbar.Brand href="#home" >
            <img src={logoSeros} alt="" size="xxl" style={{width: "150px"}}/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
                <NavLink to="/" className=" px-2 my-auto navlink"  >
                  Inicio</NavLink>
           
            <NavLink className=" px-2 my-auto navlink" to="/Nosotros">Nosotros</NavLink>
            <NavLink className=" px-2 my-auto navlink" to="/Cartilla">Cartilla de Prestadores</NavLink>
            <NavLink className=" px-2 my-auto navlink" to='/obraSocial' >Obra Social</NavLink>
            <NavLink className=" px-2 my-auto navlink" to='/turismo' >Turismo</NavLink>
            <NavLink className=" px-2 my-auto navlink" to='/jubilaciones' >Jubilaciones</NavLink>

            
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navvbar;