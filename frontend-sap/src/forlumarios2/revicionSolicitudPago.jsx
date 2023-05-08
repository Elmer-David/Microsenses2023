import React, { useState, useEffect } from 'react';
import { Form, Button, Modal, Col, Row } from 'react-bootstrap';
import axios from 'axios';

function SolicitudPago() {
  const [boletas, setBoletas] = useState([]);
  const [aceptados, setAceptados] = useState([]);
  const [rechazados, setRechazados] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/boletas')
      .then(response => {
        setBoletas(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleAceptadoClick = (id) => {
    const boletaAceptada = boletas.find(boleta => boleta.id === id);
    setAceptados([...aceptados, boletaAceptada]);
    setBoletas(boletas.filter(boleta => boleta.id !== id));
  };
  
  const handleRechazoClick = (id) => {
    const boletaRechazada = boletas.find(boleta => boleta.id === id);
    setRechazados([...rechazados, boletaRechazada]);
    setBoletas(boletas.filter(boleta => boleta.id !== id));
  };
  return (
    <Row>
      <Col>
        <h2>Solicitudes de Pago:</h2>
        <ul>
          {boletas.map(boleta => (
            <li key={boleta.id}>
              <p>ID: {boleta.id}</p>
              
              <p>numero de transaxioo: {boleta.nro_transaccion}</p>
              <p>meses a pagar : {boleta.mensualidad}</p>
              <p>monto total a pagar: {boleta.monto}</p>
              <p>fecha de deposito: {boleta.fecha_deposito}</p>

              <Button onClick={() => handleAceptadoClick(boleta.id)}>Aceptado</Button>
              <Button onClick={() => handleRechazoClick(boleta.id)}>Rechazo</Button>
            </li>
          ))}
        </ul>
      </Col> 
        
      <Col>
        <h2>Aceptados:</h2>
        <ul>
          {aceptados.map(boleta => (
            <li key={boleta.id}>
              <p>ID: {boleta.id}</p>
              <p>numero de transaxioo: {boleta.nro_transaccion}</p>
              <p>meses a pagar : {boleta.mensualidad}</p>
              <p>monto total a pagar: {boleta.monto}</p>
              <p>fecha de deposito: {boleta.fecha_deposito}</p>
            </li>
          ))}
        </ul>
      </Col>

        <Col>
          <h2>Rechazados:</h2>
          <ul>
          {rechazados.map(boleta => (
            <li key={boleta.id}>
              <p>ID: {boleta.id}</p>
              <p>numero de transaxioo: {boleta.nro_transaccion}</p>
              <p>meses a pagar : {boleta.mensualidad}</p>
              <p>monto total a pagar: {boleta.monto}</p>
              <p>fecha de deposito: {boleta.fecha_deposito}</p>
            </li>
          ))}
        </ul>
         
        </Col>
      </Row>
    );
  }

export default SolicitudPago;