import React, { useState, useEffect } from 'react';
import { Form, Button, Modal, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import configure from '../config/configure';

const USER_URL = configure.CUSER_API_URL;
const ZONAS_URL = configure.ZONAS_API_URL;

function ListaUsuariosParqueo() {
    const [boletas, setBoletas] = useState([]);
  
    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await axios.get(USER_URL);
            const filteredUsers = response.data.filter((user) => user.id_zona !== null);
      
            for (const user of filteredUsers) {
              const zonaUrl = `${ZONAS_URL}/${user.id_zona}`;
              const zonaResponse = await axios.get(zonaUrl);
              const zonaName = zonaResponse.data.nombre;
              user.zonaName = zonaName;
            }
      
            setBoletas(filteredUsers);
          } catch (error) {
            console.error(error);
          }
        };
      
        fetchUserData();
      }, []);
  
    const handleEliminarClick = (id) => {
      axios
        .delete(`${USER_URL}/${id}`)
        .then((response) => {
          // Eliminar el cliente de la lista
          const newBoletas = boletas.filter((boleta) => boleta.id !== id);
          setBoletas(newBoletas);
        })
        .catch((error) => {
          console.error(error);
        });
    };
  
    return (
      <div>
        <h2 style={{marginLeft:"30px"}}>Lista de Uusarios y sus respectivo sitios de parqeo:</h2>
        <ul>
          {boletas.map((boleta) => (
            <li key={boleta.id} style={{ display: "flex", alignItems: "center" }}>
              <p style={{ marginRight: "10px" }}>Nombre: {boleta.name}</p>
              <p style={{ marginRight: "25px" }}>Apellido: {boleta.apellido}</p>
              <p style={{ marginRight: "25px" }}>CI: {boleta.dni}</p>
              <p style={{ marginRight: "25px" }}>Gmail: {boleta.email}</p>
              <p style={{ marginRight: "25px" }}>Sitio Parqueo: {boleta.sitio}</p>
              <p style={{ marginRight: "25px" }}>Zona de Parqueo: {boleta.zonaName}</p>
               {/* <Button style={{marginLeft: "100px"}} onClick={() => handleEliminarClick(boleta.id)}>
                Eliminar cliente
              </Button> */}
            </li>
          ))}
        </ul>
      </div>
    );
  }
export default ListaUsuariosParqueo;