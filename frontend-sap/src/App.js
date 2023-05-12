import React from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import RegistroH from './formularios/registrarHorarios';  
import FormularioRegistroCli from './formularios/registrarDatosCliente';
import FormularioRegistroCuenta from './formularios/registrarDatosU';
import RegistroVehiculo from './formularios/registrarVehiculo';
import FormularioRegistroPerso from './formularios/registrarDatosDelPersonal';
import BarraNavegacion from './navegacion/barraNavegacion';
import RegistroZonasParqueo from './formularios/registrarZparqueo';
import LoginForm from './login';



import ParqueoForm from './forlumarios2/registroPar';
import RequestForm from './forlumarios2/estadoPar';
import RegistroBoleta from './forlumarios2/registrarBoleta';
import PagoEfectivo from './forlumarios2/pagoEfec';

import MenuAdministrador from './components/MenuAdministrador';
import MenuCliente from './components/MenuCliente';
import MenuGuardia from './components/MenuGuardia';
import MenuOperador from './components/MenuOperador';
import MenuUComun from './components/MenuUComun';
import { Link } from 'react-router-dom'
import BoletaForm from './forlumarios2/registrarBoleta';
import ListaUsuarios from './forlumarios2/lista de usuarios';
import ListaParqueo from './forlumarios2/listaSolicitudesParqueo';
import NavegacionAdministrador from './navegacion/navegacionAdministrador';
import SolicitarEspacio from './formularios/solicitarSitioParqueo';
import SolicitudPago from './forlumarios2/revicionSolicitudPago';

function App() {
  return (
    <div className ="App">
   
   
           
   <LoginForm/>
    
              
       {/*<BrowserRouter>

               

                  <Routes>
                  <Route path='/FormularioRegistroCuenta' element={<FormularioRegistroCuenta/>}/>
                  <Route path='/FormularioRegistroPerso' element={<FormularioRegistroPerso/>}/>
                  <Route path='/FormularioRegistroCli' element={<FormularioRegistroCli/>}/>
                  <Route path='/RegistroVehiculo' element={<RegistroVehiculo/>}/>
                  <Route path='/RegistroZonasParqueo' element={<RegistroZonasParqueo/>}/>
                  <Route path='/RegistroH' element={<RegistroH/>}/>

                  <Route path='/RegistroParqueo' element={<ParqueoForm/>}/>
                  <Route path='/RegistroBoleta' element={<RegistroBoleta/>}/>
                  <Route path='/RegistroEstadoParqueo' element={<RequestForm/>}/>
                  <Route path='/PagoEfectivo' element={<PagoEfectivo/>}/>
                  <Route path='/BoletaForm' element={<BoletaForm/>}/>
                  <Route path='/Login' element={<LoginForm/>}/>

                  <Route path='/MenuAdministrador' element={<MenuAdministrador/>}/>
                  <Route path='/MenuCliente' element={<MenuCliente/>}/>
                  <Route path='/MenuGuardia' element={<MenuGuardia/>}/>
                  <Route path='/MenuOperador' element={<MenuOperador/>}/>
                  <Route path='/MenuUComun' element={<MenuUComun/>}/>

  </Routes>
                  
                  
  </BrowserRouter>*/}
                
    </div>

  );
}


export default App;
//cesar//