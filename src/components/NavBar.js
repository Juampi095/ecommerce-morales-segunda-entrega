import CartWidget from "./CartWidget" //Carrito
import 'bootstrap/dist/css/bootstrap.min.css';



// function NavBar(){
//     return(
//         <CartWidget/>
//     )
// }

// export default NavBar;

//IMPORT NavBar
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">CarArt</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <NavDropdown title="Modelos" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Mas Buscados</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Mas vendidos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Ofertas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                ¡Últimos lanzamientos!
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartWidget/>
      </Container>
    </Navbar>
  );
}

export default NavBar;