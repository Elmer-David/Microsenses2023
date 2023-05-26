import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Cookies from 'universal-cookie';

const cookies = new Cookies();


function NavBarOffAdministrador() {

  const nombre = cookies.get('name');
  const apellido = cookies.get('apellido');
  const nombre_c = nombre+" "+apellido;

  const cerrarSesion =()=>{
    //remueve los datos de cookies
  cookies.remove('id', {path: "/"});
  cookies.remove('name', {path: "/"});
  cookies.remove('apellido', {path: "/"});
  cookies.remove('dni', {path: "/"});
  cookies.remove('foto_perfil', {path: "/"});
  cookies.remove('telefono', {path: "/"});
  cookies.remove('direccion', {path: "/"});
  cookies.remove('email', {path: "/"});
  cookies.remove('password_confirmed', {path: "/"});
  cookies.remove('tipo_usuario', {path: "/"});
  cookies.remove('cargo', {path: "/"});
  cookies.remove('departamento', {path: "/"});
  cookies.remove('sitio', {path: "/"});
  cookies.remove('primer_ini_sesion', {path: "/"});
  cookies.remove('solicitud_parqueo', {path: "/"});
  cookies.remove('id_zona', {path: "/"});
  cookies.remove('id_horario', {path: "/"});
  }

  return (
    <>
      {[false].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3">
          <Container fluid>
            <Navbar.Brand href="#">Administrador</Navbar.Brand>
            <Navbar.Text>
            Logueado como: <a >{nombre_c}</a>
          </Navbar.Text>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu Administrador
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">

                  <Nav.Link href="/RegistroConvocatoria">Registrar Convocatoria</Nav.Link>
                  <Nav.Link href="/MenuAdministrador/RegistroHorarioParqueo">Registrar Horario de Parqueo</Nav.Link>
                  <Nav.Link href="/RegistroZonaParqueo">Registrar Zona de Parqueo</Nav.Link>
                  <Nav.Link href="/MenuAdministrador/RegistroPersonal">Registrar Personal</Nav.Link>
                  <Nav.Link href="/RegistroHorario">Registrar Horario del Personal</Nav.Link>
                  
                  <NavDropdown
                    title="Listas/Tablas"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="/MenuAdministrador/TablaUser">Lista de Usuarios</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/MenuAdministrador/TablaBoleta">Lista de Boletas</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/MenuAdministrador/TablaVehiculo">Lista de Vehiculos</NavDropdown.Item>

                  </NavDropdown>

                  <Nav.Link onClick={cerrarSesion} href="/">Cerrar Sesion</Nav.Link>
                </Nav>
                
              </Offcanvas.Body>
              
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBarOffAdministrador;