import React, { useState, useContext } from 'react'
import Registro from './Registro';
import Ingreso from './Ingreso';
import TerminosAviso from './TerminosAviso';
/* CONTEXT */
import candidatoContext from "./../context/candidato/candidatoContext";
import axios from 'axios';

const Login = () => {
    const candidatos = useContext(candidatoContext);

    const [ingreso, setIngreso] = useState(false)
    const [showTerminosCondiciones, setShowTerminosCondiciones] = useState(false)
    const [aceptarTerminos, setAceptarTerminos] = useState(false)
    const [state, setState] = useState({
        curp_reg: '',
        pass_reg: '',
        comp_pass_reg: '',
        curp_ing: '',
        pass: ''
    })

    const sendTerminos = async () => {
        const url = `${process.env.REACT_APP_BACKEN_URL}create_candidato`;
        const { curp_reg, comp_pass_reg } = state

        const respuesta = await axios.post(url, { curp: curp_reg, pass: comp_pass_reg, acuerdo_aviso: aceptarTerminos });
        debugger
        try {
            if (respuesta.status === 200) {
                /* setContext */
                /* mostrar secciones */
            }
        } catch (error) {

        }

    }

    const changeSection = (to) => {
        setIngreso(to)
        /* TODO: si es registro, crea un insert e ingresa
                si no, consulta y agrega al context
        */

        /* SI to=true => Registro*/
        if (to) {
            setState({
                ...state,
                curp_ing: '',
                pass: ''
            })
        } else {
            setState({
                ...state,
                curp_reg: '',
                pass_reg: '',
                comp_pass_reg: '',
            })
        }
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