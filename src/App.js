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
import PruebasFisiscasState from './context/pruebas_fisicas/pruebasFisiscasState'
import PDF from './components/captura/PDF';
import Cierre from './components/cierre/Cierre';

/* variable para cierre de convocatoria */
const cierre = true;



const App = () => {
  return (
    <div>
      <CandidatoState>
        <SessionState>
          <PruebasFisiscasState>
            {/* <Router basename='o-canada'> */}
            <Router>
              <Header cierre={cierre} />
              <hr className='gradiente' />
              <Switch>
                {(cierre) ?
                  <Route exact path="/" component={Cierre} />
                  :
                  <Route exact path="/" component={Captura} />
                }
                <Route exact path="/dashboard" component={Administracion} />
                <Route exact path="/pdf" component={PDF} />
              </Switch>
              {/* <Footer> */}
            </Router>

          </PruebasFisiscasState>
        </SessionState>
      </CandidatoState>
    </div>
  );
}

export default App;
