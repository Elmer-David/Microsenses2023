import React, { useState } from 'react';
import { Form, Button , Modal} from 'react-bootstrap';
import axios from 'axios'

function BoletaForm() {
  const [formData, setFormData] = useState({
    transactionNumber: '',
    amount: '',
    date: '',
    image: null
  });
  const URL_BOLETA = 'http://localhost:8000/api/boletas';

  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
  
    setShowModal(true);
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.type === 'file' ? event.target.files[0] : event.target.value;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post(URL_BOLETA, 
    {
      mensualidad: 1,
      monto: formData.amount,
      nro_transaccion: formData.transactionNumber,
      fecha_deposito: formData.date,
      foto_comprobante: "imagen.jpg",
      estado: 0,
      id_user: null
    })

    resetFormData();

    // Aquí puedes enviar los datos del formulario a un servidor o manejarlos localmente
  };

  const renderImage = () => {
    if (formData.image) {
      return <img src={URL.createObjectURL(formData.image)} alt="Imagen"  style={{ width: '400px', height: '400px' }} />;
    }
  };

  const resetFormData = () => {
    setShowModal(false)
    setFormData({
      
      transactionNumber: '',
      amount: '',
      date: '',
      image: null
    });
  };

  return (
    <div className="d-flex align-items-center" style={{ height: '100vh' }}>
  
      <Form onSubmit={handleSubmit}  className="mx-auto">
        <h1>Registro de Boleta de Pago</h1>
        <Form.Group controlId="transactionNumber">
          <Form.Label>Número de transacción</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingresa el número de transacción"
            name="transactionNumber"
            value={formData.transactionNumber}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="amount">
          <Form.Label>Monto</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingresa el monto"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="date">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="date"
            placeholder="Ingresa la fecha"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Comprobante de Pago</Form.Label>
          <Form.Control
            type="file"
            name="image"
            onChange={handleChange}
          />
        </Form.Group>

        {renderImage()}

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

export default BoletaForm;