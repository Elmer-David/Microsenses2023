import React, { useState } from 'react';
import { Form, Button , Modal} from 'react-bootstrap';
import axios from 'axios'

function PagoEfec() {
  const [formData, setFormData] = useState({
    mesesAPagar: '',
    total: 0,
  });
  const [nombres, setNombres] = useState();
  const handleNombres = (event) => {
    setNombres(event.target.value);
  };

  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
  
    setShowModal(true);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.type === 'file' ? event.target.files[0] : event.target.value;

    const total = name === 'mesesAPagar' ? parseInt(value) * 10 : formData.total;

    setFormData({
      ...formData,
      [name]: value,
      total // 
    });
  };
  
  const handleSubmit =async (event) => {
    event.preventDefault();



    const total = parseInt(formData.mesesAPagar) ;
    console.log(total);
    resetFormData();

    // Aquí puedes enviar los datos del formulario a un servidor o manejarlos localmente
  };

  const resetFormData = () => {
    setShowModal(false)
    setFormData({
        mesesAPagar: '',
        total: 0,
    });
  };
  return (
    <div className="d-flex align-items-center" style={{ height: '100vh' }}>
  
      <Form onSubmit={handleSubmit}  className="mx-auto">
        <h1> Pago Efectivo</h1>



        <Form.Group controlId="nombres" className="mt-4">
            <Form.Label>Nombre del Cliente: </Form.Label>
            <Form.Control
            type="text"
    
            value={nombres}
            onChange={handleNombres}
            maxLength={100}
            minLength={2}
            required
        />
        </Form.Group>

                  <Form.Group controlId="mesesAPagar">
            <Form.Label>Cantidad de meses a pagar</Form.Label>
            <Form.Control
              as="select"
              name="mesesAPagar"
              value={formData.mesesAPagar}
              onChange={handleChange}
            >
              <option value="">Selecciona una opción</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>

             
            </Form.Control>
          </Form.Group>
       

        <Form.Group controlId="total">
          <Form.Label>Monto</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingresa el monto"
            name="total"
            value={formData.total}
            onChange={handleChange}
          />
        </Form.Group>

       

      

        <div>
        
        <Button onClick={handleClick}  variant="danger" >cancelar </Button>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Confirmar acción</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>¿Estás seguro de cancelar el registro?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                      no
                    </Button>
                    <Button variant="primary" onClick={ resetFormData} >
                      
                      si
                    </Button>
                  </Modal.Footer>
               </Modal>

          <Button variant="primary" type="submit" className="mr-2">
            Enviar
          </Button>
          

        </div>
      </Form>
    </div>
  );
}

export default PagoEfec;