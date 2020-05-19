import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DatosGenerales from './rutas/DatosGenerales';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css'
import Header from './singles/Header';


function App() {
  return (
    <div >
      <Router>
        <Header />
        <hr className='gradiente' />
        <Switch>
          {/* <Route exact path="/" component={} /> */}
          <Route exact path="/datos_generales" component={DatosGenerales} />
          {/* <Route exact path="/apoyos" component={} /> */}
          {/* <Route exact path="/finalizar" component={} /> */}
        </Switch>
        {/* <Footer> */}
      </Router>
    </div>
  );
}

export default App;
