import React,{useEffect} from 'react'
import './App.css'; 
import { useAuth } from './auth-context';

import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom';

// Inicio de sesión general.
import Login from './views/Login';

import RedireccionCargo from './views/RedireccionCargo';

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

  const { user, getToken } = useAuth();

  
  useEffect(() => {
    getToken();
  }, [user])

  return(
    <Router>
      <Switch>
        <Route path='/login' exact={true} >
          {user[0]?<Redirect to='/redirect'/>:<Login/>}
        </Route>
        <Route path='/redirect' exact={true} >
          {user[0]?<RedireccionCargo/>:<Redirect to='/login'/>}
        </Route>
        <Route path='/gestionarUsuarios' exact={true} >
          {user[0]?<GestionarUsuarios/>:<Redirect to='/login'/>}
        </Route>
        <Route path='/agregarUsuario' exact={true} >
          {user[0]?<AgregarUsuario/>:<Redirect to='/login'/>}
        </Route>
        <Route path='/editarUsuario/:idUsuario'
          exact={true}
          render={(props) => 
            {user[0]? <EditarUsuario {...props}/>:<Redirect to='/login'/>}
        }/>
        <Route path='/gestionarDonadores' exact={true} >
          {user[0]?<GestionarDonadores/>:<Redirect to='/login'/>}
        </Route>
        <Route path='/agregarDonador' exact={true} >
          {user[0]?<AgregarDonador/>:<Redirect to='/login'/>}
        </Route>
        <Route path='/editarDonador/:idDonador'
          exact={true}
          render={(props) =>
            {user[0]?<EditarDonador {...props}/>:<Redirect to='/login'/>}
          }/>
        <Route path='/gestionarUnidades' exact={true} >
          {user[0]?<GestionarUnidades/>:<Redirect to='/login'/>}
        </Route>
        <Route path='/agregarUnidad' exact={true} >
          {user[0]?<AgregarUnidad/>:<Redirect to='/login'/>}
        </Route>
        <Route path='/editarUnidad/:idUnidad' 
          exact={true} 
          render={(props) =>
            {user[0]? <EditarUnidad {...props}/>:<Redirect to='/login'/>}
          }>
        </Route>
        <Route path='/gestionarRutas' exact={true} >
          {user[0]?<GestionarRutas/>:<Redirect to='/login'/>}
        </Route>
        <Route path='/editarRuta/:idRuta'
          exact={true}
          render={(props) => 
            {user[0]?<EditarRuta {...props}/>:<Redirect to='/login'/>}
        }/>
        <Route path='/gestionDeOperadoresEnRuta' exact={true} >
          {user[0]? <GestionarOperadoresRuta/>:<Redirect to='/login'/>}
        </Route>
        <Route path='/agregarRuta' exact={true} >
          {user[0]?<AgregarRuta/>:<Redirect to='/login'/>}
        </Route>
        <Route path='/asignarRutasDeRecoleccion' exact={true} >
          {user[0]?<AsignarRutasDeRecoleccion/>:<Redirect to='/login'/>}
        </Route>
        <Route path='/detalleOperadoresRuta/:idDriver'
          exact={true}
          render={(props) => 
            {user[0]?<DetalleOperadoresRuta {...props}/>:<Redirect to='/login'/>}
        }/>
        <Route path='/asignarRutaDeEntrega' exact={true} >
          {user[0]?<AsignarRutasEntrega/>:<Redirect to='/login'/>}
        </Route>
        <Route path='/asignarEntregaOperador/:idOperador'
          exact={true}
          render={(props) => 
            {user[0]? <AsignarEntregaOperador {...props}/>:<Redirect to='/login'/>}
        }/>
        <Route>
          <ErrorRutaNoDefinida/>
        </Route>
      </Switch>
    </Router>
  )
}

export default App