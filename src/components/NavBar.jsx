import CartWidget from "./CartWidget" //Carrito
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link,NavLink } from 'react-router-dom';
function NavBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand NavLink to="/">CarArt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/">Inicio</NavLink>
            <NavLink to="Nosotros">Nosotros</NavLink>
            <NavDropdown title="Modelos" id="basic-nav-dropdown">
              <NavDropdown.Item NavLink to="category/MasBuscados">Mas Buscados </NavDropdown.Item>
              <NavDropdown.Item NavLink to="category/MasVendidos">
                Mas vendidos
              </NavDropdown.Item>
              <NavDropdown.Item NavLink to="category/Ofertas">Ofertas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item NavLink to="category/Lanzamientos">
                ¡Últimos lanzamientos!
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      <Link to="/Cart">
        <CartWidget />
        </Link>
     </Container>
    
    </Navbar>
  );
}

export default NavBar;