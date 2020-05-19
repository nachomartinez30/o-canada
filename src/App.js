import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FormDatosGenerales from './rutas/DatosGenerales';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div >
      <Router>
        {/* <Header> */}
        <Switch>
          {/* <Route exact path="/" component={} /> */}
          <Route exact path="/captura" component={FormDatosGenerales} />
          {/* <Route exact path="/apoyos" component={} /> */}
          {/* <Route exact path="/finalizar" component={} /> */}
        </Switch>
        {/* <Footer> */}
      </Router>
    </div>
  );
}

export default App;
