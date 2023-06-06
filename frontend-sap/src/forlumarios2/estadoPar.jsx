import { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RequestForm() {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [precio , setPrecio] = useState('');
  const [descuento , setDescuento] = useState('');
  const [multa , setMulta] = useState('');
  const [descuentoAño , setDescuentoAño] = useState('');
  const [nombre, setNombre] = useState('');
  const [numeroCuenta, setNumeroCuenta] = useState('');
  const [nombreParqueo, setNombreParqueo] = useState('');
  const URL_PARQUEO = 'http://localhost:8000/api/parqueos/';

 

  const handleStartDateChange = (event) => {
    const selectedDate = new Date(event.target.value);
    const currentDate = new Date();
    if (selectedDate < currentDate) {
      // si la fecha seleccionada es anterior a la fecha actual, se establece la fecha actual como la nueva fecha de inicio
      setStartDate(currentDate.toISOString().slice(0, 10));
    } else {
      setStartDate(event.target.value);
    }
  };
  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };
  const handleNombreParqueoChange = (event) => {
    setNombreParqueo(event.target.value);
  };
  const handleNumeroCuentaChange = (event) => {
    setNumeroCuenta(event.target.value);
  };


  

  const handleEndDateChange = (event) => {
    if (!startDate) {
      // si startDate no está definido, muestra un mensaje de error
      alert('Debes seleccionar una fecha de inicio primero');
      return;
    }
  
    const selectedDate = new Date(event.target.value);
    const start = new Date(startDate);
  
    if (selectedDate <= start) {
      // si la fecha seleccionada es anterior o igual a la fecha de inicio, muestra un mensaje de error
      setEndDate(startDate);
     // alert('La fecha de fin debe ser posterior a la fecha de inicio');
      return;
    }
  
    setEndDate(event.target.value);
  };
  
  const handlePrecioChange = (event) => {
    const inputValue = event.target.value;
    const isValidNumber = /^\d{1,4}(?:\.\d{1,2})?$/.test(inputValue) && Number(inputValue) <= 9999;
  
    if (isValidNumber) {
      setPrecio(inputValue);
    }
    
  };
  
  

  const handleMultaChange = (event) => {
    
  
    const inputValue = event.target.value;
    const mitadPrecio = Number(precio) / 2;
    const nuevaMulta = inputValue <= mitadPrecio ? inputValue : mitadPrecio;
  
    setMulta(nuevaMulta);
  };
  
  
  const handleDescuento = (event) => {
    const inputValue = event.target.value;
    const nPrecio = Math.floor(Number(precio));
    const nuevoDescuento = /^\d{0,4}(?:\.\d{0,2})?$/.test(inputValue) && Number(inputValue) <= nPrecio
      ? inputValue
      : nPrecio;
  
    setDescuento(nuevoDescuento);
  };
  
  const handleDescuentoAño = (event) => {
    const inputValue = event.target.value;
    const nDescuento = Math.floor((Number(precio) / 10)*4);
    const nuevoDescuentoAño = /^\d{0,4}(?:\.\d{0,2})?$/.test(inputValue) && Number(inputValue) <= nDescuento
      ? inputValue
      : nDescuento;
  
    setDescuentoAño(nuevoDescuentoAño);
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
    setNombre('');
    setNumeroCuenta('');
    setNombreParqueo('');
  }  

  const notificacion = () => {
    toast.success('Convocatoria Modificada con exito', {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      });
  } 

  
  function cerraForm() {
    window.location.href='./MenuAdministrador'
  } 



  


  const handleSubmit = async (event) => {
    event.preventDefault();
    axios.post(URL_PARQUEO, 
      {
        nombre: nombreParqueo,
        descripcion: "Descripcion",
        imagen: "imagen.jpg",
        fecha_ini_solicitud: startDate,
        fecha_fin_solicitud: endDate,
        fecha_ini_pago: null,
        fecha_fin_pago: null,
        precio_mensual: precio,
        descuento3meses: descuento,
        descuento6meses: 0,
        descuento12meses: descuentoAño,
        multa: multa,
        cuenta_banco: numeroCuenta,
        nombre_banco: nombre
      })
    // await axios.get(URL_PARQUEO)
    // .then(response=>{
    //   if(response.data[0] != null){
    //     axios.put(`${URL_PARQUEO}${response.data[0].id}`, 
    //       {
    //         nombre: nombreParqueo,
    //         descripcion: "Descripcion",
    //         imagen: "imagen.jpg",
    //         fecha_ini_solicitud: startDate,
    //         fecha_fin_solicitud: endDate,
    //         fecha_ini_pago: null,
    //         fecha_fin_pago: null,
    //         precio_mensual: precio,
    //         descuento3meses: descuento,
    //         descuento6meses: 0,
    //         descuento12meses: descuentoAño,
    //         multa: multa,
    //         cuenta_banco: numeroCuenta,
    //         nombre_banco: nombre
    //       })
    //   }else{
        
    //   }
    // })

    
    // await axios.post(URL_PARQUEO, 
    // {
    //   nombre: "Nombre",
    //   descripcion: "Descripcion",
    //   imagen: "imagen.jpg",
    //   fecha_ini_solicitud: startDate,
    //   fecha_fin_solicitud: endDate,
    //   fecha_ini_pago: null,
    //   fecha_fin_pago: null,
    //   precio_mensual: precio,
    //   descuento3meses: descuento,
    //   descuento6meses: 0,
    //   descuento12meses: descuentoAño,
    //   multa: multa,
    //   cuenta_banco: "Cuenta banco",
    //   nombre_banco: "Nombre banco"
    // })

    // do something with the start and end dates
    resetForm();
    notificacion();
  };

  return (
    <div className="d-flex align-items-center" style={{ height: 'auto' }}>
   {/*aqui se puede poner cosas para el lateral*/} 
      <Form onSubmit={handleSubmit} className="mx-auto">
      <h1> Formulario de la  convocatoria  </h1>

      <Form.Group controlId="nombre" className="mt-4">
            <Form.Label>Nombre del Banco: </Form.Label>
            <Form.Control
            type="text"
            placeholder="Ingresa el nombre del Banco"
            value={nombre}
            onChange={handleNombreChange}
            maxLength={100}
            minLength={2}
            required
        />
        </Form.Group>
        <Form.Group controlId="nombreParqueo" className="mt-4">
            <Form.Label>Nombre del parqueo: </Form.Label>
            <Form.Control
            type="text"
            placeholder="Ingresa el nombre del Parqueo "
            value={nombreParqueo}
            onChange={handleNombreParqueoChange}
            maxLength={100}
            minLength={2}
            required
        />
        </Form.Group>

       < Form.Group controlId="numeroCuenta">
          <Form.Label> Número de cuenta:</Form.Label>
          <Form.Control type="number" value={numeroCuenta}  placeholder="Ingresa el numero de cuenta" onChange={handleNumeroCuentaChange}  required/>
        </Form.Group>

        <Form.Group controlId="startDate">
          <Form.Label>Fecha de inicio:</Form.Label>
          <Form.Control type="date" value={startDate} onChange={handleStartDateChange}required />
        </Form.Group>

        <Form.Group controlId="endDate">
          <Form.Label>Fecha de fin:</Form.Label>
          <Form.Control type="date" value={endDate} onChange={handleEndDateChange}required />
        </Form.Group>

        <Form.Group controlId="precio">
          <Form.Label> Precio de la mensualidad:</Form.Label>
          <Form.Control type="number" value={precio} onChange={handlePrecioChange}  required/>
        </Form.Group>

        <Form.Group controlId="descuento">
          <Form.Label> Descuento por pago adelantado de mas de 3 meses:</Form.Label>
          <Form.Control type="number" value={descuento} onChange={handleDescuento}  required/>
        </Form.Group>
        <Form.Group controlId="descuentoAño">
          <Form.Label> Descuento por pago adelantado de 1 año:</Form.Label>
          <Form.Control type="number" value={descuentoAño} onChange={handleDescuentoAño}  required/>
        </Form.Group>

        <Form.Group controlId="multa">
          <Form.Label> Multa por demora de pago:</Form.Label>
          <Form.Control type="number" value={multa} onChange={handleMultaChange}  required/>
        </Form.Group>

        <Button onClick={handleClick}  variant="danger" >Cancelar </Button>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Confirmar acción</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>¿Estás seguro de cancelar el registro?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                      no
                    </Button>
                    <Button variant="primary" onClick={ cerraForm} >
                      
                      si
                    </Button>
                  </Modal.Footer>
               </Modal>



        <Button variant="primary" type="submit">
          Confirmar
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
}

export default RequestForm;