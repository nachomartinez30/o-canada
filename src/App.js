import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/styles.css'
import Header from './singles/Header';
import S1 from './rutas/S1';
import S2 from './rutas/S2';
import S3 from './rutas/S3';
import S4 from './rutas/S4';
import S5 from './rutas/S5';
import S6 from './rutas/S6';
import S7 from './rutas/S7';
import S8 from './rutas/S8';


function App() {
  return (
    <div >
      <Router>
        <Header />
        <hr className='gradiente' />
        <Switch>
          {/* <Route exact path="/" component={} /> */}
          <Route exact path="/s1" component={S1} />
          <Route exact path="/s2" component={S2} />
          <Route exact path="/s3" component={S3} />
          <Route exact path="/s4" component={S4} />
          <Route exact path="/s5" component={S5} />
          <Route exact path="/s6" component={S6} />
          <Route exact path="/s7" component={S7} />
          <Route exact path="/s8" component={S8} />
        </Switch>
        {/* <Footer> */}
      </Router>
    </div>
  );
}

export default App;
