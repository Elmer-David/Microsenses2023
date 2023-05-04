import React, { useState } from 'react';
import { Form, Button, Modal } from 'react-bootstrap';

function ParqueoForm() {
  const [horasAbierto, setHorasAbierto] = useState({
    horaAbre: '',
    horaCierra: '',
    diaAbre: '',
    diaCierra: ''
  });
  const [horariosRegistrados, setHorariosRegistrados] = useState([]);

  const diasSemana = [
    { value: '', label: 'Selecciona un día' },
    { value: 'lunes', label: 'Lunes' },
    { value: 'martes', label: 'Martes' },
    { value: 'miercoles', label: 'Miércoles' },
    { value: 'jueves', label: 'Jueves' },
    { value: 'viernes', label: 'Viernes' },
    { value: 'sabado', label: 'Sábado' },
    { value: 'domingo', label: 'Domingo' }
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setHorasAbierto({
      ...horasAbierto,
      [name]: value
    });
  };


  

  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {  
  setShowModal(true);
  };
  function resetForm() {
    setShowModal(false)
    setHorasAbierto({
      horaAbre: '',
    horaCierra: '',
    diaAbre: '',
    diaCierra: ''
     
    });
    
  }  

  const handleSubmit = (event) => {
    event.preventDefault();
  
    // Verificar si el nuevo horario está dentro del rango de alguno de los horarios existentes
    const conflicto = horariosRegistrados.some((horario) => {
      const diaAbre = diasSemana.findIndex((dia) => dia.value === horario.diaAbre);
      const diaCierra = diasSemana.findIndex((dia) => dia.value === horario.diaCierra);
      const nuevoDiaAbre = diasSemana.findIndex((dia) => dia.value === horasAbierto.diaAbre);
      const nuevoDiaCierra = diasSemana.findIndex((dia) => dia.value === horasAbierto.diaCierra);
  
      if (diaAbre <= nuevoDiaAbre && nuevoDiaAbre <= diaCierra) {
        return true; // Nuevo horario está dentro del rango de horario existente
      }
  
      if (diaAbre <= nuevoDiaCierra && nuevoDiaCierra <= diaCierra) {
        return true; // Nuevo horario está dentro del rango de horario existente
      }
  
      if (nuevoDiaAbre <= diaAbre && diaCierra <= nuevoDiaCierra) {
        return true; // Horario existente está dentro del rango del nuevo horario
      }
  
      return false;
    });
  
    if (conflicto) {
      alert('El nuevo horario está dentro del rango de un horario existente. Por favor, seleccione otro horario.');
      return;
    }
  
    // Si no hay conflictos, agregar el nuevo horario a la lista
    setHorariosRegistrados([...horariosRegistrados, horasAbierto]);
  
    resetForm();
  };
  
  return (
      < >
       <div className="d-flex align-items-center" style={{ height: '100vh' }}>
      <Form onSubmit={handleSubmit} className="mx-auto">
      <h1>Registro de Horarios de Atencion</h1>
        <Form.Group>
          <Form.Label>Hora de apertura</Form.Label>
          <Form.Control type="time" name="horaAbre" value={horasAbierto.horaAbre} onChange={handleInputChange} />
        </Form.Group>
        <Form.Group>
          <Form.Label>Hora de cierre</Form.Label>
          <Form.Control type="time" name="horaCierra" value={horasAbierto.horaCierra} onChange={handleInputChange} />
        </Form.Group>
      <Form.Group>
        <Form.Label>Día de apertura</Form.Label>
        <Form.Control as="select" name="diaAbre" value={horasAbierto.diaAbre} onChange={handleInputChange}>
          {diasSemana.map((dia) => (
            <option key={dia.value} value={dia.value}>
              {dia.label}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group>
        <Form.Label>Día de cierre</Form.Label>
        <Form.Control as="select" name="diaCierra" value={horasAbierto.diaCierra} onChange={handleInputChange}>
          {diasSemana.map((dia) => (
            <option key={dia.value} value={dia.value}>
              {dia.label}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

               
        <Button onClick={handleClick}  variant="danger" >cancelar </Button>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                  <Modal.Header closeButton>
                    <Modal.Title>Confirmar acción</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>¿Estás seguro de cancelar el registro?</Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                      no
                    </Button>
                    <Button variant="primary" onClick={ resetForm} >
                      
                      si
                    </Button>
                  </Modal.Footer>
               </Modal>


      <Button type="submit">Guardar</Button>
      <ul>
            {horariosRegistrados.map((horario, index) => (
                <li key={index}>
                Horario {index + 1}: se abre de {horario.horaAbre} a {horario.horaCierra} de {horario.diaAbre} a {horario.diaCierra}
                </li>
            ))}
            </ul>

    </Form>
              
            </div>
            </>
  );
}

export default ParqueoForm;