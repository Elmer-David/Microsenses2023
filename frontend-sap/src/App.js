import React from 'react-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Route, Routes} from 'react-router-dom';
import Rutas from './routes/Routes';
import BarraNavegacion from './navegacion/barraNavegacion';
import SidebarAdministrador from './components/SidebarAdministrador';
import Login from './login';
import MenuAdministrador from './components/MenuAdministrador';
import RegistroZonasParqueo from "./formularios/registrarZparqueo";
import NavBarMenu from './components/NavbarMenu';
import NavBarOffAdministrador from './components/NavbarOffAdministrador';


function App() {
  return (
    <Routes>
          {/* <Route path="/" element={<NavBarMenu/>}/> */}

      <Route path='/*' element={<Rutas />} />
          {/* <p>Hola mundo</p> */}
          {/* <BarraNavegacion/> */}
        {/* </Route>  */}

      {/* <Route path='/Login' element={<><BarraNavegacion/><Login/></>}/> */}
      {/* <Route path='/Login' element={<><SidebarAdministrador><Login style={{marginLeft: "100px", background: "#1E1F26"}}/></SidebarAdministrador></>}/> */}
      {/* <Route path='/Login' Component={SidebarAdministrador}/> */}

      {/* <Route path="/Login" element={<><Login/></>}/>
      <Route path="/MenuAdministrador/*" element={<MenuAdministrador/>}/> */}
      {/* <Route path='/RegistroZonaParqueo' Component={RegistroZonasParqueo}/> */}


    </Routes>
  );
}

export default App;
