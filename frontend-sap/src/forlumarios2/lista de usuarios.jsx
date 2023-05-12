import React, { useState, useEffect } from 'react';
import { Form, Button, Modal, Col, Row } from 'react-bootstrap';
import axios from 'axios';

function ListaUsuarios() {
  const [boletas, setBoletas] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/users")
      .then((response) => {
        setBoletas(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleEliminarClick = (id) => {
    axios.delete(`http://localhost:8000/api/users/${id}`)
      .then((response) => {
        console.log("Respuesta del servidor:", response);
        // Eliminar el usuario de la lista
        setBoletas(boletas.filter((boleta) => boleta.id !== id));
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h2>Usuarios Registrados:</h2>
      <ul>
        {boletas.map((boleta) => (
          <li key={boleta.id} style={{ display: "flex", alignItems: "center" }}>
            <p style={{ marginRight: "10px" }}>id: {boleta.id}</p>
            <p style={{ marginRight: "10px" }}>Nombre: {boleta.name}</p>
            <p style={{ marginRight: "10px" }}>Apellido: {boleta.apellido}</p>
            <p style={{ marginRight: "10px" }}>CI: {boleta.dni}</p>
            <p style={{ marginRight: "10px" }}>Gmail: {boleta.email}</p>
            <Button onClick={() => handleEliminarClick(boleta.id)}>
              Eliminar usuario
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListaUsuarios;