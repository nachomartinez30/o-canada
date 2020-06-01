import React, { useState } from 'react'
import InputCURP from '../singles/InputCURP';
import ToMayus from '../helpers/ToMayus';
import curpValida from '../helpers/curpValida';

const Registro = (props) => {
    /* TODO: revisar si CURP es correcta habiltar boton registrame */

    const { enable, onClick, showTerminosCondiciones, state, setState } = props
    const [continuar, setContinuar] = useState(false)

    const setInfo = (input) => {
        setState({
            ...state,
            [input.target.name]: input.target.value
        })
    }

    const checkPasswords = () => {
        const { comp_pass_reg, pass_reg } = state
        if (comp_pass_reg === pass_reg) {
            setContinuar(true)
        } else {
            setContinuar(false)
        }
    }

    return (
        <div className={`col-md-6 ${(enable) ? 'login-form-1' : 'login-form-2'}`}
            onClick={onClick}
        >
            <h3>Registrarse por primera vez</h3>
            <form>
                <div className="form-group">
                    <InputCURP
                        disabled={enable}
                        className={`form-control`}
                        name='curp_reg'
                        defaultValue={state.curp_reg}
                        onChange={setInfo}
                        curp={state.curp_reg}
                        onKeyPressCapture={ToMayus}
                        onBlur={curpValida}
                        placeholder='Ingrese CURP *'
                    />

                </div>
                {state.curp_reg && <React.Fragment>

                    <div class="form-group">
                        <input
                            name='pass_reg'
                            disabled={enable}
                            onChange={setInfo}
                            onBlur={checkPasswords}
                            type="password"
                            class="form-control"
                            placeholder="Registre una contraseña *"
                            value={state.pass_reg}
                        />
                    </div>
                    <div class="form-group">
                        <input
                            name='comp_pass_reg'
                            disabled={enable}
                            onChange={setInfo}
                            onBlur={checkPasswords}
                            type="password"
                            class="form-control"
                            placeholder="repitua su contraseña *"
                            value={state.comp_pass_reg}
                        />
                    </div>
                </React.Fragment>
                }

                {continuar && <div className="form-group">
                    <input
                        type="button"
                        className="btnSubmit"
                        value="Registrarme"
                        onClick={showTerminosCondiciones}
                    />
                </div>}

            </form>
        </div>
    );
}

export default Registro;