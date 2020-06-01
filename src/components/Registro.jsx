import React, { useState } from 'react'
import InputCURP from '../singles/InputCURP';
import ToMayus from '../helpers/ToMayus';
import curpValida from '../helpers/curpValida';

const Registro = (props) => {
    /* TODO: revisar si CURP es correcta habiltar boton registrame */

    const { enable, onClick, showTerminosCondiciones, state, setState } = props

    const setInfo = (input) => {
        setState({
            ...state,
            [input.target.name]: input.target.value
        })
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

                {state.curp_reg && <div className="form-group">
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