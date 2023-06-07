import React, { useState, useEffect } from 'react';
import { Form, Button, Modal, Col, Row } from 'react-bootstrap';
import axios from 'axios';

function SolicitudPago() {
  const [boletas, setBoletas] = useState([]);
  const [aceptados, setAceptados] = useState([]);
  const [rechazados, setRechazados] = useState([]);
  const [nombres, setNombres] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8000/api/boletas')
      .then(response => {
        setBoletas(response.data.filter(boleta => boleta.estado === 0 && boleta.id_user !== null));
        setAceptados(response.data.filter(boleta => boleta.estado === 1 && boleta.id_user !== null));
        setRechazados(response.data.filter(boleta => boleta.estado === 2 && boleta.id_user !== null));
        response.data.forEach(async boleta => {
          const userName = await getUserName(boleta.id_user);
          setNombres(nombres => ({...nombres, [boleta.id]: userName}));
        });
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const getUserName = async (userId) => {
    try {
      const response = await axios.get("http://localhost:8000/api/users");
      const user = response.data.find(user => user.id === userId);
      if (user) {
        return user.name;
      } else {
        return "Usuario no encontrado";
      }
    } catch (error) {
      console.error(error);
      return "";
    }
  };

  const handleAceptadoClick = (id) => {
    const boletaAceptada = boletas.find(boleta => boleta.id === id);

    axios.put(`http://localhost:8000/api/boletas/${id}`, { estado: 1 })
      .then(response => {
        setAceptados([...aceptados, boletaAceptada]);
        setBoletas(boletas.filter(boleta => boleta.id !== id));
      })
      .catch(error => {
        console.error(error);
      });
  };
  
  const handleRechazoClick = (id) => {
    const boletaRechazada = boletas.find(boleta => boleta.id === id);
    axios.put(`http://localhost:8000/api/boletas/${id}`, { estado: 2 })
      .then(response => {
        setRechazados([...rechazados, boletaRechazada]);
        setBoletas(boletas.filter(boleta => boleta.id !== id));
      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <Row style={{marginLeft: "0px", background: "#1E1F26"}}>
              <h2 style={{marginLeft: "520px", color: "#F1F1F2"}}>Solicitudes de Pago:</h2>
              <></>
      <Col style={{marginLeft: "5px", background: "#D0E1F9"}}>
        <h2>Pendientes:</h2>
        <ul>
        <p>--------------------------------------------------</p>

          {boletas.map(boleta => (
            <li key={boleta.id}>
             
              {/* <p>id usuario: {boleta.id_user}</p> */}
              <p>Nombre de usuario: {nombres[boleta.id]}</p>

              <p>Numero de transaccion: {boleta.nro_transaccion}</p>
              <p>Meses a pagar : {boleta.mensualidad}</p>
              <p>Monto a pagar: {boleta.monto}</p>
              <p>Fecha de deposito: {boleta.fecha_deposito}</p>

              <Button style={{marginLeft: "35px"}} onClick={() => handleAceptadoClick(boleta.id)}>Aceptar</Button>
              <Button style={{marginLeft: "40px"}} onClick={() => handleRechazoClick(boleta.id)}>Rechazar</Button>
              <p>--------------------------------------------------</p>
            </li>
          ))}
        </ul>
      </Col> 
        
      <Col style={{marginLeft: "5px", background: "#F1F1F2"}}>
        <h2>Aceptados:</h2>
        <p>--------------------------------------------------</p>

        <ul>
          {aceptados.map(boleta => (
            <li key={boleta.id}>
             
              {/* <p>id usuario: {boleta.id_user}</p> */}
              <p>Nombre de usuario: {nombres[boleta.id]}</p>
              <p>Numero de transaccion: {boleta.nro_transaccion}</p>
              <p>Meses a pagar : {boleta.mensualidad}</p>
              <p>Monto a pagar: {boleta.monto}</p>
              <p>Fecha de deposito: {boleta.fecha_deposito}</p>
              <p>--------------------------------------------------</p>
            </li>
          ))}
        </ul>
      </Col>

        <Col style={{marginLeft: "5px", background: "#BCBABE"}}>
          <h2>Rechazados:</h2>
          <p>--------------------------------------------------</p>

          <ul>
          {rechazados.map(boleta => (
            <li key={boleta.id}>
          
              {/* <p>id usuario: {boleta.id_user}</p> */}
              <p>Nombre de usuario: {nombres[boleta.id]}</p>

              <p>Numero de transaccion: {boleta.nro_transaccion}</p>
              <p>Meses a pagar : {boleta.mensualidad}</p>
              <p>Monto a pagar: {boleta.monto}</p>
              <p>Fecha de deposito: {boleta.fecha_deposito}</p>
              <p>--------------------------------------------------</p>
            </li>
          ))}
        </ul>
         
        </Col>
      </Row>
    );
  }

export default SolicitudPago;
