import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/styles.css'
import Header from './singles/Header';
import Captura from './rutas/Captura';
import Revision from './rutas/Revision';

/* CONTEXT */
import CandidatoState from './context/candidato/candidatoState'
import SessionState from './context/session/sessionState'
import Regionales from './rutas/Regionales';




function App() {
  return (
    <div>
      <CandidatoState>
        <SessionState>
          <Router basename='o-canada'>
            <Header />
            <hr className='gradiente' />
            <Switch>
              <Route exact path="/" component={Captura} />
              <Route exact path="/revision" component={Revision} />
              <Route exact path="/regionales" component={Regionales} />
              {/* <Route exact path="/pdf" component={PDF} /> */}
            </Switch>
            {/* <Footer> */}
          </Router>
        </SessionState>
      </CandidatoState>
    </div>
  );
}

export default App;
