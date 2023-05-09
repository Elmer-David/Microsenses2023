import React from 'react'
import { Link } from 'react-router-dom'
const NavegacionAdministrador = () => {
    return (
      <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark" >
    <div className="container-fluid">
    <a className="navbar-brand fs-4" href="#">Administrador </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          

           <li className="nav-item">
            <Link className="nav-link"to='/FormularioRegistroPerso'>Registrar Datos Del Personal</Link>
          </li>
          
       
          <li className="nav-item">
            <Link className="nav-link " to='/RegistroZonasParqueo' >Registrar Zonas de Parqueo</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to='/RegistroH' >Registrar de Horarios</Link>
          </li> 
  
          <li className="nav-item">
            <Link className="nav-link " to='/RegistroParqueo'> Atencion del Parqueo</Link>
          </li>
       
          <li className="nav-item">
            <Link className="nav-link " to='/RegistroEstadoParqueo' >Registro Convocatoria</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to='/PagoEfectivo' >Registrar Pago Efectivo</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link " to='/SolicitudPago' >Solicitudes de pago</Link>
          </li>
          
        </ul>
      </div>
    </div>
  </nav>
      
      </>
    )
  }
  
  export default NavegacionAdministrador