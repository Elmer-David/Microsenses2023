import React, { useState, useEffect } from 'react';
import { Form, Button , Modal} from 'react-bootstrap';
import '../style/FormularioGlobal.css';
import configData from '../config/config.json'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import configure from '../config/configure';

const CLIENTES_API_URL = configure.SOLOCLIENTE_API_URL;
const BOLETAS_API_URL = configure.BOLETAS_API_URL;
const URL_CONVOCATARIA = configure.CONVOCATORIA_API_URL;

function PagoEfectivo() {
  const [formData, setFormData] = useState({
    mesesPagar: '',
    
    costoMensualida: '',
    fecha: '',
    nombre: ''
   
  });

  const [clientes, setClientes] = useState( [] );
  const [idAc, setIdAc] = useState('');

  const [showModalP, setShowModalP] = useState(false);
  const [sumaMesesAceptados, setSumaMesesAceptados] = useState(0);
  const [sumaMesesPendientes, setSumaMesesPendientes] = useState(0);
  
  const fetchData = () => {
    axios
      .get(BOLETAS_API_URL)
      .then((response) => {
        const boletas = response.data.filter((boleta) => boleta.id_user == idAc);
  
        const boletasAceptadas = boletas.filter((boleta) => [1, 3, 5].includes(boleta.estado));
        const boletasPendientes = boletas.filter((boleta) => [0, 4].includes(boleta.estado));
  
        const sumaMesesAceptados = boletasAceptadas.reduce((total, boleta) => total + boleta.mensualidad, 0);
        const sumaMesesPendientes = boletasPendientes.reduce((total, boleta) => total + boleta.mensualidad, 0);
  
  
        setSumaMesesAceptados(sumaMesesAceptados);
        setSumaMesesPendientes(sumaMesesPendientes);
  
  
        if (sumaMesesAceptados >= 12 || sumaMesesPendientes + sumaMesesAceptados >= 12) {
          setShowModalP(true);
        }
        console.log(sumaMesesPendientes,sumaMesesAceptados);
  
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchData();
    const calcular = 12 - (sumaMesesPendientes + sumaMesesAceptados);
    const opcionesArray = Array.from({ length: calcular }, (_, index) => index + 1);
  }, [idAc]);
  
  
  const calcular =12-(sumaMesesPendientes + sumaMesesAceptados) ;
  const opcionesArray = Array.from({ length: calcular }, (_, index) => index + 1);




  useEffect(()=>{
    getAllClientes()
  }, [])

  const getAllClientes=async()=>{
    const response = await axios.get(CLIENTES_API_URL)
    setClientes(response.data)

    
  }

  const handleReceptorChange = (event) => {
    setIdAc(event.target.value);

    
  };

  

  const min = 111111111;
  const max = 999999999;
  const nfactura = Math.floor(Math.random()*(max-min+1)+min);
  const tiempoTranscurrido = Date.now();
  const hoy = new Date(tiempoTranscurrido);


  const [ultimaConv, setUltimaConv] = useState([]);
  useEffect(() => {
    axios
      .get(URL_CONVOCATARIA)
      .then((response) => {
        var ult = response.data[response.data.length -1];
        setUltimaConv(ult);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  
  useEffect(() => {
    fetch(URL_CONVOCATARIA)
      .then(response => response.json())
      .then(data => {
        let precioMe = parseInt(ultimaConv.precio_mensual);
        let descuento = parseInt(ultimaConv.descuento3meses);
        let descuento12 = parseInt(ultimaConv.descuento12meses);
  
        let mesesPagar = parseInt(formData.mesesPagar);
        let costoTotal = isNaN(mesesPagar) ? 0 : precioMe * mesesPagar;
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
   

    await axios.post(BOLETAS_API_URL, 
      {
        mensualidad: formData.mesesPagar,
        monto: formData.costoMensualida,
        nro_transaccion: null,
        fecha_deposito: hoy,
        foto_comprobante: null,
        estado: 3,
        nro_factura: nfactura,
        id_user: idAc
      }) 
    resetFormData();
    notificacion();

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

  const notificacion = () => {
    toast.success('Pago Registrada con Exito', {
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

  return (
    <div className="d-flex align-items-center" style={{ height: '100vh' }}>
  
      <Form onSubmit={handleSubmit}  className="mx-auto">
        <h1>Registro de Boleta de Pago</h1>

        {/*<Form.Group controlId="nombre">
          <Form.Label>Nombre Completo</Form.Label>
          <Form.Control
            type="text"
            placeholder="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </Form.Group>*/}
        <Form.Group className="mb-3">
        <Form.Label style={{marginTop: "50px"}} >Cliente:</Form.Label>
        <Form.Select onChange={handleReceptorChange}>
        <option value="">Seleccione un Cliente</option>
        {clientes.map ((cliente)=>(
          <option
            key={cliente.id}
            value={cliente.id}  
          >
            {`${cliente.name} ${cliente.apellido}`}
          </option>
        ))}
        </Form.Select>
      </Form.Group>


      <Form.Group controlId="mesesPagar">
            <Form.Label>Cantidad de meses a pagar</Form.Label>
            <Form.Control
              as="select"
              name="mesesPagar"
              value={formData.mesesPagar || ''}
              onChange={handleMesesPagarChange}
              required
            >
              <option value="">Cantidad de meses a Pagar</option>
              {opcionesArray.map((opcion) => (
                <option key={opcion} value={opcion}>
                  {opcion}
                </option>
              ))}
            </Form.Control>
          </Form.Group>





      

        <Form.Group controlId="costoMensualida">
          <Form.Label>Total a pagar</Form.Label>
          <Form.Control
            type="number"
            placeholder="Ingresa el monto"
            name="costoMensualida"
            value={formData.costoMensualida}
            onChange={handleChange}
            disabled
          />
        </Form.Group>

         {/*<Form.Group controlId="fecha">
          <Form.Label>Fecha</Form.Label>
          <Form.Control
            type="date"
            placeholder="Ingresa la fecha"
            name="fecha"
            value={formData.fecha}
            onChange={handleChange}
          />
        </Form.Group>*/}


       

        <div>
        
        <Button style={{backgroundColor: "#DC3545", marginLeft: "80px"}} className="secondary" onClick={handleClick}  variant="danger" >Cancelar </Button>
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

          <Button style={{backgroundColor: "#198754", marginLeft: "80px"}} variant="primary" type="submit" className="primary">
            Registrar
          </Button>
        </div>
      </Form>


      <Modal show={showModalP} onHide={() => setShowModalP(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Información</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Ya has pagado un año entero. No es necesario realizar más pagos, revise sus boletas
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" onClick={() => {
            setShowModalP(false);
            resetFormData();
          
          }}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />

    </div>
  );
}

export default PagoEfectivo;