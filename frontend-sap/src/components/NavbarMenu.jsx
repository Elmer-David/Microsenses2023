import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import axios from 'axios';
//import '../style/NavBarMenu.css';

function NavBarMenu() {
  return (
    <Navbar className='navbar333' style={{ backgroundColor: 'rgb(192, 192, 192)' }} expand="lg">
      {/* style={{ backgroundColor: 'rgb(8, 8, 100)' }} */}
      <Container>
        <Navbar.Brand  href="/">Parqueo FCyT </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
             <Nav.Link href="/MenuPrincipal/Convocatoria">Convocatoria</Nav.Link>
            {/*f="#link">Link</Nav.Link>
            <NavDropdown title="Registro Lista" id="basic-nav-dropdown">
              <NavDropdown.Item href="/RegistroConvocatoria">Registro Convocatoria</NavDropdown.Item>
              <NavDropdown.Item href="/RegistroBoletaManual">
                Registro Manual de Boleta
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Navbar.Text>
           <a href="/RegistroCuenta">Registrarse         |</a>
          </Navbar.Text>
          <Navbar.Text>
           <a href="/Login">|            Iniciar Sesion</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarMenu;