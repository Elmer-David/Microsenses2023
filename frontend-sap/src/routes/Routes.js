import React from 'react-dom';
import { Routes,Route, BrowserRouter } from 'react-router-dom';

import RegistroHorario from '../formularios/registrarHorarios';  
import FormularioRegistroCliente from '../formularios/registrarDatosCliente';
import FormularioRegistroCuentaUsuario from '../formularios/registrarDatosU';
import RegistroVehiculo from '../formularios/registrarVehiculo';
import FormularioRegistroPersonal from '../formularios/registrarDatosDelPersonal';
import RegistroZonaParqueo from '../formularios/registrarZparqueo';
import Login from '../login';

import RegistroHorarioParqueo from '../forlumarios2/registroPar';
import RegistroConvocatoria from '../forlumarios2/estadoPar';
import FormularioRegistroBoleta from '../forlumarios2/registrarBoleta';
import RegistroBoletaManual from '../forlumarios2/pagoEfec';

import MenuAdministrador from '../components/MenuAdministrador';
import MenuCliente from '../components/MenuCliente';
import MenuGuardia from '../components/MenuGuardia';
import MenuOperador from '../components/MenuOperador';
import MenuUComun from '../components/MenuUComun';
import MenuPrincipal from '../components/MenuPrincipal';

import SolicitarSitioParqueo from '../formularios/solicitarSitioParqueo';
import SolicitudBoleta from '../forlumarios2/revicionSolicitudPago';
import ListaUsuarios from '../forlumarios2/lista de usuarios';
import SidebarAdministrador from '../components/SidebarAdministrador';
import BarraNavegacion from '../navegacion/barraNavegacion';
import { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import NavBarAdministrador from '../components/NavbarMenu';
import NavBarMenu from '../components/NavbarMenu';
import NavBarOffAdministrador from '../components/NavbarOffAdministrador';
import NavBarOffCliente from '../components/NavbarOffCliente';
import NavBarOffOperador from '../components/NavbarOffOperador';
import NavBarOffGuardia from '../components/NavbarOffGuardia';
import NavBarOffUsuarioComun from '../components/NavbarOffUsuarioComun';
import InfoConvocatoria from '../components/InfoConvocatoria';
import TablaUser from '../components/TablaUser';
import TablaBoleta from '../components/TablaBoleta';
import TablaVehiculo from '../components/TablaVehiculo';
import MensajeA from '../components/Mensaje';
import TablaMensaje from '../components/TablaMensaje';
import TablaMiBoleta from '../components/TablaMiBoleta';
import TablaBoletaManual from '../components/TablaBoletaManual';
import TablaMensajeOperador from '../components/TablaMensajeOperador';
import TablaMensajeGuardia from '../components/TablaMensajeGuardia';
import AsignarSitiosParqueo from '../formularios/aignarSitiosParqueo';
import ActuliazarDatos from '../formularios/actualizarDatosCliente';

const Rutas=()=> {

  return (
    //<div className="container"> 
    <>
    
      <Routes>
        <Route path='/RegistroCliente' element={<FormularioRegistroCliente/>}/>
        <Route path='/ListaUsuarios' element={<ListaUsuarios/>}/>

        {/* <Route path="/" element={<TablaUser/>}/> */}
        <Route path="/" element={<NavBarMenu/>}/>
        <Route path='/MenuPrincipal' element={<NavBarMenu/>}/>
        <Route path='/RegistroCuenta' element={<><NavBarMenu/><FormularioRegistroCuentaUsuario/></>}/>
        <Route path='/Login' element={<><NavBarMenu/><Login/></>}/>
        <Route path='/MenuPrincipal/Convocatoria' element={<><NavBarMenu/><InfoConvocatoria/></>}/>
        
        <Route path='/MenuAdministrador' element={<NavBarOffAdministrador/>}/>
        <Route path='/RegistroConvocatoria' element={<><NavBarOffAdministrador/><RegistroConvocatoria/></>}/>
        <Route path='/MenuAdministrador/RegistroHorarioParqueo' element={<><NavBarOffAdministrador/><RegistroHorarioParqueo/></>}/>
        <Route path='/RegistroZonaParqueo' element={<><NavBarOffAdministrador/><RegistroZonaParqueo/></>}/>
        <Route path='/MenuAdministrador/RegistroPersonal' element={<><NavBarOffAdministrador/><FormularioRegistroPersonal/></>}/>
        <Route path='/RegistroHorario' element={<><NavBarOffAdministrador/><RegistroHorario/></>}/>
        <Route path='/MenuAdministrador/TablaUser' element={<><NavBarOffAdministrador/><TablaUser/></>}/>
        <Route path='/MenuAdministrador/TablaBoleta' element={<><NavBarOffAdministrador/><TablaBoleta/></>}/>
        <Route path='/MenuAdministrador/TablaVehiculo' element={<><NavBarOffAdministrador/><TablaVehiculo/></>}/>
        <Route path='/MenuAdministrador/Mensaje' element={<><NavBarOffAdministrador/><MensajeA/></>}/>

        <Route path='/MenuCliente' element={<NavBarOffCliente/>}/>
        <Route path='/RegistroVehiculo' element={<><NavBarOffCliente/><RegistroVehiculo/></>}/>
        <Route path='/RegistroBoleta' element={<><NavBarOffCliente/><FormularioRegistroBoleta/></>}/>
        <Route path='/MenuCliente/TablaMensaje' element={<><NavBarOffCliente/><TablaMensaje/></>}/> 
        <Route path='/MenuCliente/TablaMiBoleta' element={<><NavBarOffCliente/><TablaMiBoleta/></>}/>
        <Route path='/MenuCliente/ActualiarDatos' element={<><NavBarOffCliente/><ActuliazarDatos/></>}/>

        <Route path='/MenuOperador' element={<NavBarOffOperador/>}/>
        <Route path='/RegistroBoletaManual' element={<><NavBarOffOperador/><RegistroBoletaManual/></>}/>
        <Route path='/MenuOperador/RegistroPersonal' element={<><NavBarOffOperador/><FormularioRegistroPersonal/></>}/>
        <Route path='/SolicitudBoleta' element={<><NavBarOffOperador/><SolicitudBoleta/></>}/>
        <Route path='/MenuOperador/TablaManual' element={<><NavBarOffOperador/><TablaBoletaManual/></>}/>
        <Route path='/MenuOperador/TablaMensajeOperador' element={<><NavBarOffOperador/><TablaMensajeOperador/></>}/>
        <Route path='/MenuOperador/AsignarSitio' element={<><NavBarOffOperador/><AsignarSitiosParqueo/></>}/>

        <Route path='/MenuGuardia' element={<NavBarOffGuardia/>}/>
        <Route path='/MenuGuardia/TablaMensajeGuardia' element={<><NavBarOffGuardia/><TablaMensajeGuardia/></>}/>

        <Route path='/MenuUComun' element={<NavBarOffUsuarioComun/>}/>
        <Route path='/SolicitarSitioParqueo' element={<><NavBarOffUsuarioComun/><SolicitarSitioParqueo/></>}/>
        <Route path='/MenuUComun/Convocatoria' element={<><NavBarOffUsuarioComun/><InfoConvocatoria/></>}/>

      </Routes>    
      </>       
    //</div>

  );
}

export default Rutas;
