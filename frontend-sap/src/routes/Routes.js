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

const Rutas=()=> {
  return (
    //<div className="container"> 
      <Routes>
        <Route path='/RegistroCuenta' element={<FormularioRegistroCuentaUsuario/>}/>
        <Route path='/RegistroPersonal' element={<FormularioRegistroPersonal/>}/>
        <Route path='/RegistroCliente' element={<FormularioRegistroCliente/>}/>
        <Route path='/RegistroVehiculo' element={<RegistroVehiculo/>}/>
        <Route path='/RegistroZonaParqueo' element={<RegistroZonaParqueo/>}/>
        <Route path='/RegistroHorario' element={<RegistroHorario/>}/>

        <Route path='/RegistroHorarioParqueo' element={<RegistroHorarioParqueo/>}/>
        <Route path='/RegistroBoleta' element={<FormularioRegistroBoleta/>}/>
        <Route path='/RegistroConvocatoria' element={<RegistroConvocatoria/>}/>
        <Route path='/RegistroBoletaManual' element={<RegistroBoletaManual/>}/>
        <Route path='/Login' element={<Login/>}/>

        {/* <Route path='/MenuAdministrador' element={<SidebarAdministrador/>}/> */}
        <Route path='/MenuAdministrador' element={<MenuAdministrador/>}/>
        <Route path='/MenuCliente' element={<MenuCliente/>}/>
        <Route path='/MenuGuardia' element={<MenuGuardia/>}/>
        <Route path='/MenuOperador' element={<MenuOperador/>}/>
        <Route path='/MenuUComun' element={<MenuUComun/>}/>
        <Route path='/MenuPrincipal' element={<MenuPrincipal/>}/>
        <Route path='/' element={<MenuPrincipal/>}/>

        <Route path='/SolicitarSitioParqueo' element={<SolicitarSitioParqueo/>}/>
        <Route path='/SolicitudBoleta' element={<SolicitudBoleta/>}/>
        <Route path='/ListaUsuarios' element={<ListaUsuarios/>}/>

      </Routes>           
    //</div>

  );
}

export default Rutas;
