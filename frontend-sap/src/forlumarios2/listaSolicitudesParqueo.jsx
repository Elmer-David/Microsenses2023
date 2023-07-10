import React, { useState, useEffect } from 'react';
import { Form, Button, Modal, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import configure from '../config/configure';

const USER_URL = configure.CUSER_API_URL;

function ListaParqueo() {
  const [boletas, setBoletas] = useState([]);

  useEffect(() => {
    axios
      .get(USER_URL)
      .then((response) => {
        setBoletas(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // Filtrar la lista de usuarios para mostrar solo aquellos con solicitud_parqueo = 1
  const usuariosConParqueo = boletas.filter((boleta) => boleta.solicitud_parqueo === 1);

  return (
    <div>
      <h2>Usuarios Registrados con Solicitud de Parqueo:</h2>
      <ul>
        {usuariosConParqueo.map((boleta) => (
          <li key={boleta.id} style={{ display: "flex", alignItems: "center" }}>
   
            <p style={{ marginRight: "10px" }}>Nombre: {boleta.name}</p>
            <p style={{ marginRight: "10px" }}>Apellido: {boleta.apellido}</p>
            <p style={{ marginRight: "10px" }}>CI: {boleta.dni}</p>
            <p style={{ marginRight: "10px" }}>Gmail: {boleta.email}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaParqueo;