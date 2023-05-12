import React, { useState, useEffect } from 'react';
import { Form, Button , Modal} from 'react-bootstrap';
import axios from 'axios'

function BoletaForm() {
  const [formData, setFormData] = useState({
    mesesPagar: '',
    numeroTransaccion: '',
    costoMensualida: '',
    fecha: '',
    imagen: null
  });

  
  useEffect(() => {
    fetch('http://localhost:8000/api/parqueos')
      .then(response => response.json())
      .then(data => {
        let precioMe = parseInt(data[0].precio_mensual);
        let descuento = parseInt(data[0].descuento3meses);
        let descuento12 = parseInt(data[0].descuento12meses);
  
        let costoTotal = precioMe * formData.mesesPagar;

        if (formData.mesesPagar > 3 && formData.mesesPagar < 12 ) {
          costoTotal -= descuento;
        } else if (formData.mesesPagar > 11) {
          costoTotal -= descuento12;
        }
  
        setFormData(prevState => ({
          ...prevState,
          costoMensualida: costoTotal
        }));
      })
      .catch(error => console.error(error));
  }, [formData.mesesPagar]);
  
  const handleMesesPagarChange = event => {
    const mesesPagar = event.target.value;
    setFormData(prevState => ({
      ...prevState,
      mesesPagar
    }));
  };





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
      mensualidad: formData.mesesPagar,
      monto: formData.costoMensualida,
      nro_transaccion: formData.numeroTransaccion,
      fecha_deposito: formData.fecha,
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
      mesesPagar: 0,
      numeroTransaccion: 0,
      costoMensualida: 0,
      fecha: '',
      imagen: null
    });
  };

  return (
    <div className="d-flex align-items-center" style={{ height: '100vh' }}>
  
      <Form onSubmit={handleSubmit}  className="mx-auto">
        <h1>Registro de Boleta de Pago</h1>
        <Form.Group controlId="mesesPagar">
          
            <Form.Label>Cantidad de meses a pagar</Form.Label>
            <Form.Control
              as="select"
              name="mesesPagar"
              value={formData.mesesPagar}
              onChange={handleMesesPagarChange} 
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





        <Form.Group controlId="numeroTransaccion">
          <Form.Label>Número de transacción</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingresa el número de transacción"
            name="numeroTransaccion"
            value={formData.numeroTransaccion}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="costoMensualida">
          <Form.Label>total a pagar</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingresa el monto"
            name="costoMensualida"
            value={formData.costoMensualida}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="fecha">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="date"
            placeholder="Ingresa la fecha"
            name="fecha"
            value={formData.fecha}
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