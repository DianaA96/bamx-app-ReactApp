import React from 'react'
import './App.css'; 

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

// Inicio de sesión general.
import Login from './views/Login';

// ROL ADMINISTRADOR
import GestionarUsuarios from './views/GestionarUsuarios.js';
import AgregarUsuario from './views/AgregarUsuario.js';
import EditarUsuario from './views/EditarUsuario.js';
import GestionarDonadores from './views/GestionarDonadores.js';
import AgregarDonador from './views/AgregarDonador.js';
import EditarDonador from './views/EditarDonador.js';
import GestionarUnidades from './views/GestionarUnidades.js';
import AgregarUnidad from './views/AgregarUnidad.js';
import EditarUnidad from './views/EditarUnidad.js';

// ROL COORDINADOR
import GestionarRutas from './views/GestionarRutas.js';
import AgregarRuta from './views/AgregarRuta.js';
import EditarRuta from './views/EditarRuta.js';
import AsignarRutasDeRecoleccion from './views/AsignarRutasDeRecoleccion.js';
import DetalleOperadoresRuta from './views/DetalleOperadoresRuta.js';
import GestionarOperadoresRuta from './views/GestionarOperadoresRuta.js';
import AsignarRutasEntrega from './views/AsignarRutasEntrega.js';
import AsignarEntregaOperador from './views/AsignarEntregaOperador.js';

// GENERAL 404
import ErrorRutaNoDefinida from './views/ErrorRutaNoDefinida';

function App() {
  return(
    <Router>
      <Switch>
        <Route path='/login' exact={true} >
          <Login/>
        </Route>
        <Route path='/gestionarUsuarios' exact={true} >
          <GestionarUsuarios/>
        </Route>
        <Route path='/agregarUsuario' exact={true} >
          <AgregarUsuario/>
        </Route>
        <Route path='/editarUsuario/:idUsuario'
          exact={true}
          render={(props) => 
          <EditarUsuario {...props}/>
        }/>
        <Route path='/gestionarDonadores' exact={true} >
          <GestionarDonadores/>
        </Route>
        <Route path='/agregarDonador' exact={true} >
          <AgregarDonador/>
        </Route>
        <Route path='/editarDonador/:idDonador'
          exact={true}
          render={(props) =>
          <EditarDonador {...props}/>
          }/>
        <Route path='/gestionarUnidades' exact={true} >
          <GestionarUnidades/>
        </Route>
        <Route path='/agregarUnidad' exact={true} >
          <AgregarUnidad/>
        </Route>
        <Route path='/editarUnidad/:idUnidad' 
          exact={true} 
          render={(props) =>
          <EditarUnidad {...props}/>
          }>
        </Route>
        <Route path='/gestionarRutas' exact={true} >
          <GestionarRutas/>
        </Route>
        <Route path='/editarRuta/:idRuta'
          exact={true}
          render={(props) => 
          <EditarRuta {...props}/>
        }/>
        <Route path='/gestionDeOperadoresEnRuta' exact={true} >
          <GestionarOperadoresRuta/>
        </Route>
        <Route path='/agregarRuta' exact={true} >
          <AgregarRuta/>
        </Route>
        <Route path='/asignarRutasDeRecoleccion' exact={true} >
          <AsignarRutasDeRecoleccion/>
        </Route>
        <Route path='/detalleOperadoresRuta/:idDriver'
          exact={true}
          render={(props) => 
          <DetalleOperadoresRuta {...props}/>
        }/>
        <Route path='/asignarRutaDeEntrega' exact={true} >
          <AsignarRutasEntrega/>
        </Route>
        <Route path='/asignarEntregaOperador/:idOperador'
          exact={true}
          render={(props) => 
            <AsignarEntregaOperador {...props}/>
        }/>
        <Route>
          <ErrorRutaNoDefinida/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App