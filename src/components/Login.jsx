import React, { useState } from 'react'
import Registro from './Registro';
import Ingreso from './Ingreso';
import TerminosAviso from './TerminosAviso';

const Login = () => {
    const [ingreso, setIngreso] = useState(false)
    const [showTerminosCondiciones, setShowTerminosCondiciones] = useState(false)
    const [aceptarTerminos, setAceptarTerminos] = useState(false)
    const [state, setState] = useState({
        curp_reg: '',
        curp_ing: ''
    })

    const sendTerminos = () => {

    }

    const changeSection = (to) => {
        setIngreso(to)
        console.log('reiniciando');

        setState({
            ...state,
            curp_reg: '',
            curp_ing: ''
        })
    }

    return (
        <div class="container login-container">
            <div class="row">
                {(showTerminosCondiciones) ? <React.Fragment>
                    <TerminosAviso
                        aceptarTerminos={aceptarTerminos}
                        setAceptarTerminos={setAceptarTerminos}
                        sendTerminos={sendTerminos}
                        setShowTerminosCondiciones={setShowTerminosCondiciones}
                    />
                </React.Fragment>
                    :
                    <React.Fragment>
                        <Registro
                            state={state}
                            setState={setState}
                            onClick={() => changeSection(true)}
                            enable={!ingreso}
                            showTerminosCondiciones={setShowTerminosCondiciones}
                        />
                        <Ingreso
                            state={state}
                            setState={setState}
                            onClick={() => changeSection(false)}
                            enable={ingreso}
                        />
                    </React.Fragment>
                }

            </div>
        </div>
    );
}

export default Login;