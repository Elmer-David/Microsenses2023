import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from 'axios'
import Cookies from "universal-cookie";
const cookies = new Cookies();

function SolicitarEspacio() {

  const nombre = cookies.get('name');
  const apellido = cookies.get('apellido');
  const CI = cookies.get('dni');
  const confirmarContraseña = cookies.get('password_confirmed');
  const telefono = cookies.get('telefono');
  const correoElectronico = cookies.get('email');
  const tipo_usuario = cookies.get('tipo_usuario');
  const cargo = cookies.get('cargo');

  const [enviado, setEnviado] = useState(false);
  const [mostrarCancelModal, setMostrarCancelModal] = useState(false);
  const [showSolicitudEnviadaModal, setMostrarSolicitudEnviadaModal] = useState(false);
  const id = cookies.get('id'); 

  useEffect(() => {
    if (enviado) {
      const data = {
        name: nombre,
        apellido: apellido,
        dni: CI,
        foto_perfil: null,
        telefono: telefono,
        direccion: null,
        email: correoElectronico,
        password: confirmarContraseña,
        password_confirmed: confirmarContraseña,
        tipo_usuario: tipo_usuario,
        cargo: cargo,
        departamento: null,
        sitio: null,
        primer_ini_sesion: 1,
        solicitud_parqueo: 1,
        id_zona: null,
        id_horario: null
      };
      axios.put(`http://localhost:8000/api/users/${id}`, data)
        .then(response => {
          console.log("Datos enviados:", data);
        })
        .catch(error => console.error(error));
    }
  }, [enviado]);

  const handleSolicitarClick = () => {
    setEnviado(true);
    setMostrarSolicitudEnviadaModal(true);
  };

  const handleCancelarClick = () => {
    setMostrarCancelModal(true);
  };

  const handleCancelarConfirm = () => {
    const data = {
      name: nombre,
      apellido: apellido,
      dni: CI,
      foto_perfil: null,
      telefono: telefono,
      direccion: null,
      email: correoElectronico,
      password: confirmarContraseña,
      password_confirmed: confirmarContraseña,
      tipo_usuario: tipo_usuario,
      cargo: cargo,
      departamento: null,
      sitio: null,
      primer_ini_sesion: 1,
      solicitud_parqueo: 0,
      id_zona: null,
      id_horario: null
    };
    axios.put(`http://localhost:8000/api/users/${id}`, data)
      .then(response => {
        console.log("Datos enviados:", data);
        setEnviado(false);
        setMostrarCancelModal(false);
      })
      .catch(error => console.error(error));
  };

  const handleCancelarCancel = () => {
    setMostrarCancelModal(false);
  };

  const handleSolicitudEnviadaModal = () => {
    setMostrarSolicitudEnviadaModal(false);
  };

  return (
    <>
      <Button
        variant={enviado ? "danger" : "primary"}
        onClick={enviado ? handleCancelarClick : handleSolicitarClick}
      >
        {enviado ? "Cancelar sitio de parqueo" : "Solicitar sitio de parqueo"}
      </Button>

      <Modal show={mostrarCancelModal} onHide={handleCancelarCancel}>
        <Modal.Header closeButton>
          <Modal.Title>¿Estás seguro de cancelar la solicitud?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancelarCancel}>
            No
          </Button>
          <Button variant="danger" onClick={handleCancelarConfirm}>
            Sí
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={showSolicitudEnviadaModal} onHide={() => setMostrarSolicitudEnviadaModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Solicitud enviada</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSolicitudEnviadaModal}>
            ok
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SolicitarEspacio;
