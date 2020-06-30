import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/styles.css'
import Header from './singles/Header';
import Captura from './rutas/Captura';
import Administracion from './rutas/Administracion';

/* CONTEXT */
import CandidatoState from './context/candidato/candidatoState'
import SessionState from './context/session/sessionState'
import PDF from './components/PDF';


const App = () => {
  return (
    <div>
      <CandidatoState>
        <SessionState>
          {/* <Router basename='o-canada'> */}
          <Router>
            <Header />
            <hr className='gradiente' />
            <Switch>
              <Route exact path="/" component={Captura} />
              <Route exact path="/dashboard" component={Administracion} />
              <Route exact path="/pdf" component={PDF} />
            </Switch>
            {/* <Footer> */}
          </Router>
        </SessionState>
      </CandidatoState>
    </div>
  );
}

export default App;
