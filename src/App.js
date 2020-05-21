import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './assets/styles.css'
import Header from './singles/Header';
import Captura from './rutas/Captura';



function App() {
  return (
    <div >
      <Router>
        <Header />
        <hr className='gradiente' />
        <Switch>
          <Route exact path="/" component={Captura} />
        </Switch>
        {/* <Footer> */}
      </Router>
    </div>
  );
}

export default App;
