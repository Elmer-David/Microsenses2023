import { useState } from 'react';
import axios from 'axios';
import { Form, FormGroup, FormLabel, FormControl, Button, Alert } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LoginForm.css'; //

function LoginForm() {
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
      console.log(response.data);
      handleErrorChange('Inicio de Sesion exitosa');
    })
    .catch(error=>{
      console.log(error);
      handleErrorChange('Email o Contraseña Incorrectos');
    })
    console.log(username);
    console.log(password);
    
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