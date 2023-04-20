import React, { useState } from 'react';
import { Form, Button, ListGroup, Container } from 'react-bootstrap';

function RegistroH() {
  const [name, setName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [shifts, setShifts] = useState([]);

  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value.replace(/[^a-zA-Z]/g, '')); 
  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handleSave = () => {
    const newShift = { name, startTime, endTime };
    setShifts([...shifts, newShift]);
    setName('');
    setStartTime('');
    setEndTime('');
  };

  const handleDelete = (index) => {
    const newShifts = [...shifts];
    newShifts.splice(index, 1);
    setShifts(newShifts);
  };

  return (
    <Container>
      <h1>Registro de Horario</h1>
      <Form>
        <Form.Group controlId="formBasicName">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" value={name} onChange={handleNameChange} required />
        </Form.Group>

        <Form.Group controlId="formBasicStartTime">
          <Form.Label>Inicio de Turno</Form.Label>
          <Form.Control type="time" value={startTime} onChange={handleStartTimeChange} required />
        </Form.Group>

        <Form.Group controlId="formBasicEndTime">
          <Form.Label>Fin de Turno</Form.Label>
          <Form.Control type="time" value={endTime} onChange={handleEndTimeChange} required />
        </Form.Group>

        <Button variant="primary" type="button" onClick={handleSave}>
          Guardar
        </Button>{' '}
        <Button variant="secondary" type="reset">
          Cancelar
        </Button>
      </Form>

      <h2>Horarios Registrados</h2>
      <ListGroup>
        {shifts.map((shift, index) => (
          <ListGroup.Item key={index}>
            <span>{shift.name} - {shift.startTime} a {shift.endTime}</span>
            <Button variant="danger" size="sm" className="float-right" onClick={() => handleDelete(index)}>
              Eliminar
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Container>
  );
}

export default RegistroH;