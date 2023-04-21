import React, { useState } from 'react';
import { Form, Button, Col, Row, Modal } from 'react-bootstrap';
import axios from 'axios'


const regexSoloLetras = /^[a-zA-Z]+$/;
const regexSoloNumeros = /^[0-9]+$/;

const FormularioRegistroPerso = () => {


const [showModal, setShowModal] = useState(false);
const handleClick = () => {
  
  setShowModal(true);
};

function resetForm() {
  setShowModal(false)
  
  setNombre('');
  setApellido('');
  setTelefono('');
  setCI('');
  setImage(null);
  setCorreoElectronico('');
  setErrorNombre('');
  setErrorApellido('');
  setErrorTelefono('');
  setErrorCI('');
  setErrorCorreoElectronico('');
}

  const [image, setImage] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };


  const [nombre, setNombre] = useState('');
  const [contraseña, setContraseña] = useState(null);
  const [confirmarContraseña, setConfirmarContraseña] = useState(null);
  const [direccion, setDireccion] = useState(null);
  const [apellido, setApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [CI, setCI] = useState('');

  const [correoElectronico, setCorreoElectronico] = useState('');
  const [errorNombre, setErrorNombre] = useState('');
  const [errorApellido, setErrorApellido] = useState('');
  const [errorTelefono, setErrorTelefono] = useState('');
  const [errorCI, setErrorCI] = useState('');

  const [errorCorreoElectronico, setErrorCorreoElectronico] = useState('');

  const validarNombre = (valor) => {
    if (!regexSoloLetras.test(valor)) {
      return "Por favor, ingresa solo letras en el campo de nombre";
    }
  };
  const validarApellido = (valor) => {
    if (!regexSoloLetras.test(valor)) {
      return "Por favor, ingresa solo letras en el campo de apellido";
    }
  };

  const validarTelefono = (valor) => {
    if (!regexSoloNumeros.test(valor)) {
      return "Por favor, ingresa solo números en el campo de teléfono";
    }
  };
  const validarCI = (valor) => {
    if (!regexSoloNumeros.test(valor)) {
      return "Por favor, ingresa solo números en el campo de teléfono";
    }
  };
 

  const validarCorreoElectronico = (valor) => {
    if (!valor.includes('@gmail.com')) {
      return "Por favor, ingresa una dirección de correo electrónico válida de Gmail";
    }
  };

 

  const onSubmit = (event) => {
    event.preventDefault();

    const errorNombre = validarNombre(nombre);
    const errorApellido = validarApellido(apellido);
    const errorTelefono = validarTelefono(telefono);
    const errorCI = validarCI(CI);
    const errorCorreoElectronico = validarCorreoElectronico(correoElectronico);

    setErrorNombre(errorNombre);
    setErrorApellido(errorApellido);
    setErrorTelefono(errorTelefono);
    setErrorCI(errorCI);
    setErrorCorreoElectronico(errorCorreoElectronico);

    if (!errorNombre && !errorTelefono && !errorCI  && !errorCorreoElectronico && !errorApellido) {
 
      console.log("El formulario se envió correctamente");
      resetForm();


      // Aquí podrías enviar los datos del formulario al servidor
    } else {
      console.log("Hay errores en el formulario:");
      console.log(errorNombre);
      console.log(errorApellido);
      console.log(errorTelefono);
      console.log(errorCI);
 
      console.log(errorCorreoElectronico);
    }
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center" >

  
      <h1>Registrar datos del personal </h1>
      <Row className="justify-content-md-center">
        <Col md={6}>

           
    <Form  onSubmit={onSubmit} id="myForm">
      <Form.Group controlId="nombre">
        <Form.Label>Nombre:</Form.Label>
        <Form.Control
          type="text"
          value={nombre}
          onChange={(event) => setNombre(event.target.value)}
          isInvalid={errorNombre}
          pattern="[a-zA-Z]+"
          maxLength={30}
          minLength={2}
          required
        />
        <Form.Control.Feedback type="invalid">
          {errorNombre}
        </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="apellido">
        <Form.Label>apellido:</Form.Label>
        <Form.Control
          type="text"
          value={apellido}
          onChange={(event) => setApellido(event.target.value)}
          isInvalid={errorApellido}
          pattern="[a-zA-Z]+"
          maxLength={30}
          minLength={2}
          required
        />
        <Form.Control.Feedback type="invalid">
          {errorApellido}
        </Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="telefono">
          <Form.Label>Teléfono:</Form.Label>
          <Form.Control
            type="tel"
            value={telefono}
            onChange={(event) => setTelefono(event.target.value)}
            isInvalid={errorTelefono}
            pattern="[0-9]+"
            maxLength={8}
            minLength={2}
            required
          />
          <Form.Control.Feedback type="invalid" >
            {errorTelefono}
          </Form.Control.Feedback>
        </Form.Group>
              

        <Form.Group controlId="formBasicDireccion">
              <Form.Label>Dirección</Form.Label>
              <Form.Control type="text" placeholder="Ingrese la dirección"  as="textarea"
            rows={3} required/>
            </Form.Group>

       

            <Button onClick={handleClick}>cancelar </Button>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                 
                  <Modal.Body>¿Estás seguro de cancelar el registro?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                      no
                    </Button>
                    <Button variant="primary" onClick={ resetForm} >
                      
                      si
                    </Button>
                  </Modal.Footer>
               </Modal>



    </Form>
    </Col>
        <Col md={6}>
        <Form onSubmit={onSubmit}>
    
      
        <Form.Group controlId="CI">
          <Form.Label>CI/DNI:</Form.Label>
          <Form.Control
            type="t"
            value={CI}
            onChange={(event) => setCI(event.target.value)}
            isInvalid={errorCI}
            pattern="[0-9]+"
            maxLength={10}
            minLength={6}
            required
          />
          <Form.Control.Feedback type="invalid" >
            {errorCI}
          </Form.Control.Feedback>
        </Form.Group>


<Form.Group controlId="correo-electronico">
  <Form.Label>Correo electrónico:</Form.Label>
  <Form.Control
    type="email"
    value={correoElectronico}
    onChange={(event) => setCorreoElectronico(event.target.value)}
    isInvalid={errorCorreoElectronico}
    required
  />
  <Form.Control.Feedback type="invalid">
    {errorCorreoElectronico}
  </Form.Control.Feedback>
</Form.Group>
          <Form.Group controlId="formBasicFoto">            
          <Form.Label>Foto de Perfil</Form.Label>
              <Form.Control type="file" onChange={handleImageUpload} accept="image/*"   required />
              {image && (
                <div>
                  <img src={image} alt="Foto del cliente" width="300" height="300" />
                </div>
              )}
              <Form.Text className="text-muted">
               foto
              </Form.Text>
            </Form.Group>

  
            <Button type='submit'   variant="primary"  >Enviar </Button>
            
          
                  
                            
        </Form>
        </Col>
            </Row>

       
       </div>
 );
};

export default FormularioRegistroPerso;