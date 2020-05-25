import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/styles.css'
import Header from './singles/Header';
// import ConstanciaRegistro from './components/ConstanciaRegistro';
import Captura from './rutas/Captura';
import ConstanciaRegistro from './components/ConstanciaRegistro'



function App() {
  return (
    <div >
      <Router>
        <Header />
        <hr className='gradiente' />
        <Switch>
          <Route exact path="/" component={Captura} />
          <Route exact path="/pdf" component={ConstanciaRegistro} />
        </Switch>
        {/* <Footer> */}
      </Router>
    </div>
    
  );
}

export default App;
