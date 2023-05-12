import { useState, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import axios from 'axios'

function SolicitarEspacio() {
  const [enviado, setEnviado] = useState(false);
  const [mostrarCancelModal, setMostrarCancelModal] = useState(false);
  const [showSolicitudEnviadaModal, setMostrarSolicitudEnviadaModal] = useState(false);

  useEffect(() => {
    if (enviado) {
      // Aquí hacemos la llamada para cambiar el valor de solicitud_parqueo a 1
      axios.put(`http://localhost:8000/api/users/${1}`, 
      { 
        name: "Fabio",
        apellido: "Mercedes",
        dni: "31234332",
        foto_perfil: null,
        telefono: "71234567",
        direccion: "Ecologica",
        email: "usuarioprueba@gmail.com",
        password: "usuarioprueba",
        password_confirmed: "usuarioprueba",
        tipo_usuario: 4,
        cargo: null,
        departamento: null,
        sitio: null,
        primer_ini_sesion: 0,
        solicitud_parqueo: 1,
        id_zona: null,
        id_horario: null

      })
        .then(response => console.log(response))
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
    // Aquí hacemos la llamada para cambiar el valor de solicitud_parqueo a 0
    axios.patch(`http://localhost:8000/api/users/${1}`, 
    { solicitud_parqueo: 0 })
      .then(response => {
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