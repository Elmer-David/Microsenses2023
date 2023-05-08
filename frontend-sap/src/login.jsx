import { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, FormLabel, FormControl, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css'; //
import Cookies from 'universal-cookie';

const cookies = new Cookies();

function LoginForm(){
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const URL_USER ='http://localhost:8000/api/auth/login';

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleErrorChange = (message) => {
    setError(message);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post(URL_USER, {
      email: username,
      password: password
    })
    .then(response=>{

      //Almacenar los datos de forma global en cookies
      cookies.set('id', response.data.id, {path: "/"});
      cookies.set('name', response.data.name, {path: "/"});
      cookies.set('apellido', response.data.apellido, {path: "/"});
      cookies.set('dni', response.data.dni, {path: "/"});
      cookies.set('foto_perfil', response.data.foto_perfil, {path: "/"});
      cookies.set('telefono', response.data.telefono, {path: "/"});
      cookies.set('direccion', response.data.direccion, {path: "/"});
      cookies.set('email', response.data.email, {path: "/"});
      cookies.set('password_confirmed', response.data.password_confirmed, {path: "/"});
      cookies.set('tipo_usuario', response.data.tipo_usuario, {path: "/"});
      cookies.set('cargo', response.data.cargo, {path: "/"});
      cookies.set('departamento', response.data.departamento, {path: "/"});
      cookies.set('sitio', response.data.sitio, {path: "/"});
      cookies.set('primer_ini_sesion', response.data.primer_ini_sesion, {path: "/"});
      cookies.set('solicitud_parqueo', response.data.solicitud_parqueo, {path: "/"});
      cookies.set('id_zona', response.data.id_zona, {path: "/"});
      cookies.set('id_horario', response.data.id_horario, {path: "/"});

      // Verifica el tipo de usuario y lo dirige a su PaginaMenu
      // if(response.data.tipo_usuario == 0){
      //   window.location.href='./MenuAdministrador';
      // } else{
      //   if(response.data.tipo_usuario == 4){
      //     window.location.href='./MenuCliente';
      //   }
      // } 

      var usu = response.data.tipo_usuario;
      switch (usu){
        case 0 :
          window.location.href='./MenuAdministrador';
          break;
        case 1 :
          window.location.href='./MenuOperador';
          break;
        case 2 :
          window.location.href='./MenuGuardia';
          break; 
        case 3 :
          window.location.href='./MenuUComun';
          break;
        case 4 :
          window.location.href='./MenuCliente';
          break;    
        default :
          window.location.href='./';
          break; 
      }

    })
    .catch(error=>{
      //console.log(error);
      handleErrorChange('Email o Contraseña Incorrectos');
    })

    // try {
    //   const response = await axios.post('/api/login', {
    //     username: username,
    //     password: password,
    //   });

    //   console.log(response);
    // } catch (error) {
    //   console.error(error);

    //   handleErrorChange('Invalid username or password.');
    // }
  };

  return (
    <div className="form-container">
      <Form onSubmit={handleSubmit}>
        <FormGroup controlId="formUsername">
          <FormLabel>Email</FormLabel>
          <FormControl type="text" value={username} onChange={handleUsernameChange} />
        </FormGroup>

        <FormGroup controlId="formPassword">
          <FormLabel>Contraseña</FormLabel>
          <FormControl type="password" value={password} onChange={handlePasswordChange} />
        </FormGroup>

        {error && <Alert variant="danger">{error}</Alert>}

        <Button variant="primary" type="submit" className="btn-login">
          Inicar Secion
        </Button>
      </Form>
    </div>
  );
}

export default LoginForm;