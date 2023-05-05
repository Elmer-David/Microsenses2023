
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



function App() {
  return (
    <div className ="App">

      {/* <RequestForm/> */}
    
                   <BrowserRouter>

                  <BarraNavegacion/>
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
                  <Route path='/Login' element={<LoginForm/>}/>

                  </Routes>
                  
                  
                  </BrowserRouter>
                 
    </div>

  );
}


export default App;
//cesar//
