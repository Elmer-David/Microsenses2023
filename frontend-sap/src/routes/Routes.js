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
//const cookies = new Cookies();


const Rutas=()=> {
  // const barra = BarraNavegacion;
  // //useState
  // const usu=4;
  // //cookies.get('tipo_usuario');
  
  // const [tipou, setTipou] = useState(null);
  // cookies.set('tipo_usuario', 10, {path: "/"});
  // //const cookiesusu = cookies.get("tipo_usuario");
  // const cu = cookies.get('tipo_usuario');
  // const [cookiesusu, setCookiesusu] = useState(10);
  // console.log(cu);  
  // console.log("name:"+ cu);


  // function Tipobarra(props){
  //   switch (props.contenido){
  //     case 10:
  //       return  <SidebarAdministrador/>;
  //       break;
  //     case 0 :
  //       return  <SidebarAdministrador/>;
  //       break;
  //     case 1 :  
  //       window.location.href='./MenuOperador';
  //       break;
  //     case 2 :
  //       window.location.href='./MenuGuardia';
  //       break; 
  //     case 3 :
  //       window.location.href='./MenuUComun';
  //       break;
  //     case 4 :
  //       return  <BarraNavegacion/>;
  //       break;    
  //     default :
  //       //window.location.href='./';
  //       break; 
  //   }
  // }

  // useEffect(()=>{
  //   //Tipobarra(tipou);
  //   <Tipobarra contenido={cookiesusu} />
  // }, [cookiesusu]);

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

        <Route path='/MenuCliente' element={<NavBarOffCliente/>}/>
        <Route path='/RegistroVehiculo' element={<><NavBarOffCliente/><RegistroVehiculo/></>}/>
        <Route path='/RegistroBoleta' element={<><NavBarOffCliente/><FormularioRegistroBoleta/></>}/>

        <Route path='/MenuOperador' element={<NavBarOffOperador/>}/>
        <Route path='/RegistroBoletaManual' element={<><NavBarOffOperador/><RegistroBoletaManual/></>}/>
        <Route path='/MenuOperador/RegistroPersonal' element={<><NavBarOffOperador/><FormularioRegistroPersonal/></>}/>
        <Route path='/SolicitudBoleta' element={<><NavBarOffOperador/><SolicitudBoleta/></>}/>

        <Route path='/MenuGuardia' element={<NavBarOffGuardia/>}/>

        <Route path='/MenuUComun' element={<NavBarOffUsuarioComun/>}/>
        <Route path='/SolicitarSitioParqueo' element={<><NavBarOffUsuarioComun/><SolicitarSitioParqueo/></>}/>


      </Routes>    
      </>       
    //</div>

  );
}

export default Rutas;
