import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

function SolicitarEspacio() {
  const [enviado, setEnviado] = useState(false);
  const [mostrarCancelModal, setMostrarCancelModal] = useState(false);
  const [showSolicitudEnviadaModal, setMostrarSolicitudEnviadaModal] = useState(false);
 
  const handleSolicitarClick = () => {
    // Aquí iría el código para enviar la solicitud y actualizar la base de datos
    const hayEspacio = true; // Ejemplo: asumimos que hay espacio en la base de datos

    if (hayEspacio) {
      setEnviado(true);
      setMostrarSolicitudEnviadaModal(true);
    } else {
      // Si no hay espacio en la base de datos, mostramos un nodal de error
      alert("No hay espacio en la base de datos");
    }
  };

  const handleCancelarClick = () => {
    setMostrarCancelModal(true);
  };

  const handleCancelarConfirm = () => {
    setEnviado(false);
    setMostrarCancelModal(false);
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