import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import axios from 'axios';


const RegistroZonasParqueo = () => {
  
  



  
  const [nombre, setNombre] = useState("");
  const [numSitios, setNumSitios] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [direccion, setDireccion] = useState("");
  const [foto, setFoto] = useState("");
  const [sitios, setSitios] = useState("SitiosDisponibles");
  const [fotoString, setFotoString] = useState("imagen.jpg");
  const [numSitiosInteger, setNumSitiosInteger] = useState(0);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleNumSitiosChange = (event) => {
    const input = event.target.value;
    const value = parseInt(input);
    if (!isNaN(value)) {
      setNumSitios(value);
    }
  };

  const handleDescripcionChange = (event) => {
    setDescripcion(event.target.value);
  };
  const handleDireccionChange = (event) => {
    setDireccion(event.target.value);
  };

  const handleFotoChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setFoto(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    
    setShowModal(true);
  };
  function resetForm() {
    setShowModal(false)
    
    setNombre('');
    setNumSitios('');
    setDescripcion('');
    setDireccion('');
    setFoto(null);
    
  }
  


  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post('http://localhost:8000/api/zonas', {
      nombre: nombre,
      nro_sitios:numSitios,
      sitios: sitios,
      direccion: direccion,
      imagen: fotoString,
      descripcion: descripcion
    })
  
    resetForm();
  
    // Aquí puedes enviar los datos del formulario a tu backend o hacer lo que necesites con ellos

    
  };

  return (
    
    <div className="container d-flex align-items-center" style={{ height: "100vh" }}>
    <div className="col-lg-6 mx-auto">
      <h1>Registrar Zona de Parqueo</h1>
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="nombre" className="mt-4">
            <Form.Label>Nombre Zona: </Form.Label>
            <Form.Control
            type="text"
            placeholder="Ingresa el nombre de la Zona"
            value={nombre}
            onChange={handleNombreChange}
            maxLength={100}
            minLength={2}
            required
        />
        </Form.Group>

        <Form.Group controlId="numSitios">
          <Form.Label>Número de sitios: </Form.Label>
          <Form.Control
            type="numb"
            placeholder="Ingresa el número de sitio"
            value={numSitios}
            onChange={handleNumSitiosChange}
            maxLength={10}
            minLength={1}
            required
          />
        </Form.Group>

        <Form.Group controlId="direccion">
          <Form.Label>Direcion: </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Ingresa una direccion de la Zona"
            value={direccion}
            onChange={handleDireccionChange}
            maxLength={250}
            minLength={2}
            required
          />
        </Form.Group>



        <Form.Group controlId="descripcion">
          <Form.Label>Descripción: </Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Ingresa una descripción de la Zona"
            value={descripcion}
            onChange={handleDescripcionChange}
            maxLength={250}
            minLength={2}
            required
          />
        </Form.Group>

        <Form.Group controlId="foto">
          <Form.Label>Foto del Vehiculo </Form.Label>
          <Form.Control
            type="file"
            accept="image/*"
            onChange={handleFotoChange}
            required
          />
        </Form.Group>

        {foto && (
          <Form.Group>
            <Form.Label>Foto del Vehiculo:</Form.Label>
            <br />
            <img
              src={foto}
              alt="Preview de la foto del vehículo"
              style={{ maxWidth: "400px", maxHeight: "400px" }}
            />
          </Form.Group>
        )}

        <div className="mt-3 w-100 d-flex justify-content-between align-items-center">


                 

             <Button onClick={handleClick} variant="danger"  >Cancelar </Button>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                 
                  <Modal.Body>¿Estás seguro de cancelar el registro?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                      no
                    </Button>
                    <Button variant="primary" onClick={ resetForm}  type="reset"   >
                      
                      si
                    </Button>
                  </Modal.Footer>
               </Modal>



                  <Button variant="success" type="submit">
                    Registrar
                  </Button>
                </div>
      </Form>
    </div>
    </div>
  );
};

export default RegistroZonasParqueo;