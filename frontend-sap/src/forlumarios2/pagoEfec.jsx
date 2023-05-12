import React, { useState, useEffect } from 'react';
import { Form, Button , Modal} from 'react-bootstrap';


function PagoEfectivo() {
  const [formData, setFormData] = useState({
    mesesPagar: '',
    
    costoMensualida: '',
    fecha: '',
    nombre: ''
   
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

    

    resetFormData();

    // Aquí puedes enviar los datos del formulario a un servidor o manejarlos localmente
  };

  

  const resetFormData = () => {
    setShowModal(false)
    setFormData({
      mesesPagar: 0,
    
      costoMensualida: 0,
      fecha: '',
      nombre :''
      
    });
  };

  return (
    <div className="d-flex align-items-center" style={{ height: '100vh' }}>
  
      <Form onSubmit={handleSubmit}  className="mx-auto">
        <h1>Registro de Boleta de Pago</h1>

        <Form.Group controlId="nombre">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </Form.Group>




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

export default PagoEfectivo;