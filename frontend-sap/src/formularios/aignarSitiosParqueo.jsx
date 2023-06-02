import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ListGroup, Button, Modal } from 'react-bootstrap';

function AsignarSitiosParqueo() {
  const [users, setUsers] = useState([]);
  const [zones, setZones] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedZoneData, setSelectedZoneData] = useState(null);

  const openModal = (userId) => {
    setSelectedUserId(userId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    axios.get('http://localhost:8000/api/users')
      .then(response => {
        const filteredUsers = response.data.filter(user => user.solicitud_parqueo === 1);
        setUsers(filteredUsers);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get('http://localhost:8000/api/zonas')
      .then(response => {
        const zonesData = response.data.map(zona => ({
          id: zona.id,
          nombre: zona.nombre,
          sitios: zona.sitios.split(',').map(sitio => sitio.trim())
        }));
        setZones(zonesData);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const handleRandomClick = (userId) => {
    const randomZoneIndex = Math.floor(Math.random() * zones.length);
    const randomZone = zones[randomZoneIndex];

    if (randomZone && randomZone.sitios.length > 0) {
      const randomSiteIndex = Math.floor(Math.random() * randomZone.sitios.length);
      const randomSite = randomZone.sitios[randomSiteIndex];

      const updatedSites = randomZone.sitios.filter(
        (site, index) => index !== randomSiteIndex
      );

      setSelectedZoneData({
        ...randomZone,
        sitios: updatedSites,
      });

      const updatedUsers = users.map((user) => {
        if (user.id === userId) {
          return {
            ...user,
            sitioAsignado: randomSite,
            nombreZona: randomZone.nombre,
          };
        }
        return user;
      });

      const updatedZones = zones.map((zone) => {
        if (zone.id === randomZone.id) {
          return {
            ...zone,
            sitios: updatedSites,
          };
        }
        return zone;
      });

      setUsers(updatedUsers);
      setZones(updatedZones);

      // Actualizar la base de datos
      const updatedSitesString = updatedSites.length > 0 ? updatedSites.join(',') : null;
      axios.put(`http://localhost:8000/api/zonas/${randomZone.id}`, { sitios: updatedSitesString, nro_sitios: updatedSites.length })
        .then(response => {
          console.log('Sitios disponibles actualizados en la base de datos:', response.data);
        })
        .catch(error => {
          console.error('Error al actualizar los sitios disponibles en la base de datos:', error);
        });
    }
  };

  const handleManualClick = (userId) => {
    openModal(userId);
  };

  const handleZoneSelect = (zoneId, siteIndex) => {
    const selectedZone = zones.find((zone) => zone.id === zoneId);
    if (selectedZone && selectedZone.sitios[siteIndex]) {
      const selectedSite = selectedZone.sitios[siteIndex];

      const updatedSites = selectedZone.sitios.filter(
        (site, index) => index !== siteIndex
      );

      setSelectedZoneData({
        ...selectedZone,
        sitios: updatedSites,
      });

      const updatedUsers = users.map((user) => {
        if (user.id === selectedUserId) {
          return {
            ...user,
            sitioAsignado: selectedSite,
            nombreZona: selectedZone.nombre,
          };
        }
        return user;
      });

      const updatedZones = zones.map((zone) => {
        if (zone.id === zoneId) {
          return {
            ...zone,
            sitios: updatedSites,
          };
        }
        return zone;
      });

      setUsers(updatedUsers);
      setZones(updatedZones);
      closeModal();

      // Actualizar la base de datos
      const updatedSitesString = updatedSites.length > 0 ? updatedSites.join(',') : null;
      axios.put(`http://localhost:8000/api/zonas/${zoneId}`, { sitios: updatedSitesString, nro_sitios: updatedSites.length })
        .then(response => {
          console.log('Sitios disponibles actualizados en la base de datos:', response.data);
        })
        .catch(error => {
          console.error('Error al actualizar los sitios disponibles en la base de datos:', error);
        });
    }
  };

  const handleSiteDelete = () => {
    closeModal();
  };

  return (
    <div>
      <h2>Lista de usuarios que solicitan parqueos</h2>
      <h4>Zonas disponibles:</h4>
      <ul>
        {zones.map((zone, index) => (
          <li key={index}>
            {zone.nombre} tiene: {zone.sitios.length} sitios disponibles
          </li>
        ))}
      </ul>
      {users.length > 0 ? (
        <ListGroup>
          {users.map((user) => (
            <ListGroup.Item key={user.id}>
              <h4>{user.name}</h4>
              <p>Email: {user.email}</p>
              <p>Phone: {user.telefono}</p>
              {user.sitioAsignado && (
                <>
                  <p>Sitio asignado: {user.sitioAsignado}</p>
                  <p>Nombre de la zona: {user.nombreZona}</p>
                </>
              )}
              <Button variant="primary" onClick={() => handleRandomClick(user.id)}>
                Aleatorio
              </Button>{' '}
              <Button variant="secondary" onClick={() => handleManualClick(user.id)}>
                Manual
              </Button>
            </ListGroup.Item>
          ))}
        </ListGroup>
      ) : (
        <p>No hay solicitudes de sitios de parqueo.</p>
      )}

      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Seleccionar zona</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {zones.map((zone, index) => (
            <div key={index}>
              <h5>{zone.nombre}</h5>
              <p>Sitios disponibles: </p>
              <ul>
                {zone.sitios.map((sitio, sitioIndex) => (
                  <li key={sitioIndex} onClick={() => handleZoneSelect(zone.id, sitioIndex)}>
                    {sitio}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleSiteDelete}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default AsignarSitiosParqueo;