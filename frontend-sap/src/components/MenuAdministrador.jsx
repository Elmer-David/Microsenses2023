import React from "react";
import '../style/MenuAdministrador.css';
import Cookies from 'universal-cookie';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import NavegacionAdministrador from "../navegacion/navegacionAdministrador";
import FormularioRegistroPerso from "../formularios/registrarDatosDelPersonal";
import RegistroZonasParqueo from "../formularios/registrarZparqueo";
import RegistroH from "../formularios/registrarHorarios";
import ParqueoForm from "../forlumarios2/registroPar";
import RequestForm from "../forlumarios2/estadoPar";
import PagoEfectivo from "../forlumarios2/pagoEfec";
import MenuUComun from "./MenuUComun";
import BarraNavegacion from "../navegacion/barraNavegacion";





const cookies = new Cookies();

function MenuAdministrador() {

    const nombre = cookies.get('name');
    const email = cookies.get('email');
    const password = cookies.get('password_confirmed');
    const tipo_usuario = cookies.get('tipo_usuario');

    const cerrarSesion =()=>{

        //remueve los datos de cookies
      cookies.remove('id', {path: "/"});
      cookies.remove('name', {path: "/"});
      cookies.remove('apellido', {path: "/"});
      cookies.remove('dni', {path: "/"});
      cookies.remove('foto_perfil', {path: "/"});
      cookies.remove('telefono', {path: "/"});
      cookies.remove('direccion', {path: "/"});
      cookies.remove('email', {path: "/"});
      cookies.remove('password_confirmed', {path: "/"});
      cookies.remove('tipo_usuario', {path: "/"});
      cookies.remove('cargo', {path: "/"});
      cookies.remove('departamento', {path: "/"});
      cookies.remove('sitio', {path: "/"});
      cookies.remove('primer_ini_sesion', {path: "/"});
      cookies.remove('solicitud_parqueo', {path: "/"});
      cookies.remove('id_zona', {path: "/"});
      cookies.remove('id_horario', {path: "/"});

      //redirecciona a App.js
      window.location.href='./login';
    }




    return(
        <div>
        
     

        <BarraNavegacion/>
      





        <button onClick={cerrarSesion}>Cerra Sesion</button>
        </div>
    );
}
export default MenuAdministrador