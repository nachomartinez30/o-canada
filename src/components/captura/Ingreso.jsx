import React, { useState } from 'react'
import InputCURP from '../../singles/InputCURP';
import ToMayus from '../../helpers/ToMayus';
import curpValida from '../../helpers/curpValida';

const Ingreso = (props) => {
    const { enable, onClick, state, setState, checkLogin } = props

    const [curpValida, setCurpValida] = useState(false)

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
            <h3>Usuarios ya registrados</h3>
            <form>
                <div class="form-group">
                    <InputCURP
                        disabled={enable}
                        className={`form-control`}
                        name='curp_ing'
                        defaultValue={state.curp_ing}
                        onChange={setInfo}
                        curp={state.curp_ing}
                        onKeyPressCapture={ToMayus}
                        onBlur={curpValida}
                        placeholder='Ingrese CURP *'
                        setCorrect={setCurpValida}
                    />
                </div>
                <div class="form-group">
                    <input
                        name='pass'
                        disabled={enable}
                        onChange={setInfo}
                        type="password"
                        class="form-control"
                        placeholder="Contraseña *"
                        value={state.pass}
                    />
                </div>
                {(state.curp_ing && curpValida && state.pass) && <div class="form-group">
                    <input
                        disabled={enable}
                        type='button'
                        onClick={checkLogin}
                        class="btnSubmit"
                        value='Ingresar'
                    />
                </div>
                }
                <div class="form-group">
                    {/* <a href="#" class="ForgetPwd" value="Login">Recuperar Contraseña</a> */}
                </div>
            </form>
        </div>

    );
}

export default Ingreso;