
import { Form, Button, ListGroup, Container } from 'react-bootstrap';
import axios from 'axios'
import React, { useState, useEffect } from 'react';

function RegistroH() {
  const [name, setName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [shifts, setShifts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/horarios')
      .then(response => {
        const newShifts = response.data.map(shift => ({
          name: shift.nombre,
          startTime: shift.inicio_turno,
          endTime: shift.salida_turno
        }));
        setShifts(newShifts);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  
  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value.replace(/[^a-zA-Z0-9ñÑ\s]/g, '').slice(0, 20));

  };

  const handleStartTimeChange = (e) => {
    setStartTime(e.target.value);
    
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
    if (endTime < startTime) {
      alert("No se puede guardar en Fin de turno una hora menor a Inicio de Turno");
      return;
    }
  };

  const handleSave =async  () => {
  
    await axios.post('http://localhost:8000/api/horarios', {nombre: name, inicio_turno: startTime, salida_turno: endTime})

    const newShift = { name, startTime, endTime };
    
    setShifts([...shifts, newShift]);
    setName('');
    setStartTime('');
    setEndTime('');
   
  };

  const handleDelete = async (index) => {
  
    
    const newShifts = [...shifts];
    newShifts.splice(index, 1);
    setShifts(newShifts);
  };

  return (
    <Container>
      <h1>Registro de Horario</h1>


      
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
  

        <Button variant="danger" type="reset">
          Cancelar
        </Button>
        <Button variant="success"type='submit' onClick={ handleSave}>   Guardar </Button>
    

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