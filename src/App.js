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


function App() {
  return (
    <div >
      <Router>
        <Header />
        <hr className='gradiente' />
        <Switch>
          <Route exact path="/" component={Captura} />
          <Route exact path="/revision" component={Revision} />
          {/* <Route exact path="/pdf" component={EjemploPDF} /> */}
        </Switch>
        {/* <Footer> */}
      </Router>
    </div>
  );
}

export default App;
