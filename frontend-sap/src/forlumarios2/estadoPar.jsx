import { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';

function RequestForm() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [precio , setPrecio] = useState('');
  const [descuento , setDescuento] = useState('');
  const [multa , setMulta] = useState('');
  const [descuentoAño , setDescuentoAño] = useState('');

  const URL_PARQUEO = 'http://localhost:8000/api/parqueos';

  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleEndDateChange = (event) => {
    setEndDate(event.target.value);
  };
  const handlePrecioChange = (event) => {
    setPrecio(event.target.value);
  };
  const handleMultaChange = (event) => {
    setMulta(event.target.value);
  };
  const handleDescuento = (event) => {
    setDescuento(event.target.value);
  };
  const handleDescuentoAño = (event) => {
    setDescuentoAño(event.target.value);
  };

  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    
    setShowModal(true);
  };

  function resetForm() {
    setShowModal(false)

    setStartDate('');
    setEndDate('');
    setPrecio('');
    setDescuento('');
    setMulta('');
    setDescuentoAño('');
  
  }  



  const handleSubmit = async (event) => {
    event.preventDefault();

    await axios.post(URL_PARQUEO, 
    {
      nombre: "UMSS Parqueo",
      descripcion: "Descripcion_umss",
      imagen: "imagen.jpg",
      fecha_ini_solicitud: startDate,
      fecha_fin_solicitud: endDate,
      fecha_ini_pago: null,
      fecha_fin_pago: null,
      precio_mensual: precio,
      descuento3meses: descuento,
      descuento6meses: 40,
      descuento12meses: descuentoAño,
      multa: multa,
      cuenta_banco: "329829389238",
      nombre_banco: "banco union"
    })

    // do something with the start and end dates
    resetForm();
  };

  return (
    <div className="d-flex align-items-center" style={{ height: '100vh' }}>
   {/*aqui se puede poner cosas para el lateral*/} 
      <Form onSubmit={handleSubmit} className="mx-auto">
      <h1> Estado de la convocatoria </h1>
        <Form.Group controlId="startDate">
          <Form.Label>Fecha Inicio:</Form.Label>
          <Form.Control type="date" value={startDate} onChange={handleStartDateChange}required />
        </Form.Group>

        <Form.Group controlId="endDate">
          <Form.Label>Fecha Fin:</Form.Label>
          <Form.Control type="date" value={endDate} onChange={handleEndDateChange}required />
        </Form.Group>

        <Form.Group controlId="precio">
          <Form.Label> Precio de la Mensialidad:</Form.Label>
          <Form.Control type="number" value={precio} onChange={handlePrecioChange}  required/>
        </Form.Group>

        <Form.Group controlId="descuento">
          <Form.Label> descuento por pago adelantado de mas de 3 meses:</Form.Label>
          <Form.Control type="number" value={descuento} onChange={handleDescuento}  required/>
        </Form.Group>
        <Form.Group controlId="descuentoAño">
          <Form.Label> descuento por pago adelantado de 1 año:</Form.Label>
          <Form.Control type="number" value={descuentoAño} onChange={handleDescuentoAño}  required/>
        </Form.Group>

        <Form.Group controlId="multa">
          <Form.Label> Multa por demara de pago:</Form.Label>
          <Form.Control type="number" value={multa} onChange={handleMultaChange}  required/>
        </Form.Group>

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
                    <Button variant="primary" onClick={ resetForm} >
                      
                      si
                    </Button>
                  </Modal.Footer>
               </Modal>



        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default RequestForm;