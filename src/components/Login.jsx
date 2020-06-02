import React, { useState, useContext } from 'react'
import Registro from './Registro';
import Ingreso from './Ingreso';
import TerminosAviso from './TerminosAviso';
/* CONTEXT */
import candidatoContext from "./../context/candidato/candidatoContext";
import axios from 'axios';
import AlertError from '../singles/AlertError';

const Login = (props) => {
    const { secciones, setSecciones } = props
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


        try {
            const respuesta = await axios.post(url, { curp: curp_reg, pass: comp_pass_reg, acuerdo_aviso: aceptarTerminos });

            if (respuesta.status === 200) {
                /* setContext */
                candidatos.candidatos.agregarCandidato({
                    ...candidatos.candidatos,
                    infoBrigadista: {
                        curp: curp_reg
                    }
                })
                /* mostrar secciones */

                setSecciones({
                    ...secciones,
                    login: { status: 'completo', visible: false },
                    s1: { status: 'actual', visible: true },
                })
            }
        } catch (error) {
            if (error.response.status === 400) {
                AlertError('Error', error.response.data.msg)
            } else {
                AlertError('Error', error)
            }
        }

    }

    const checkLogin = async () => {
        const url = `${process.env.REACT_APP_BACKEN_URL}get_candidato`;
        const { curp_ing, pass } = state


        try {
            const respuesta = await axios.post(url, { curp: curp_ing, pass: pass });

            if (respuesta.status === 200) {
                debugger
                /* setContext */
                candidatos.candidatos.agregarCandidato({
                    ...candidatos.candidatos,
                    infoBrigadista: respuesta.data[0]
                })
                /* mostrar secciones */

                setSecciones({
                    ...secciones,
                    login: { status: 'completo', visible: false },
                    s1: { status: 'actual', visible: true },
                })
            }
        } catch (error) {
            if (error.response.status === 404) {
                AlertError('Error', error.response.data.msg)
            } else {
                AlertError('Error', error)
            }
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
                            checkLogin={checkLogin}
                        />
                    </React.Fragment>
                }

            </div>
        </div>
    );
}

export default Login;