import React from 'react'

const Ingreso = (props) => {
    const { enable, onMouseEnter } = props
    return (
        <div className={`col-md-6 ${(enable) ? 'login-form-1' : 'login-form-2'}`}
            onMouseEnter={onMouseEnter}
        >
            <h3>Entrar</h3>
            <form>
                <div class="form-group">
                    <input disabled={enable} type="text" class="form-control " placeholder="CURP *" value="" />
                </div>
                <div class="form-group">
                    <input disabled={enable} type="password" class="form-control" placeholder="Contraseña *" value="" />
                </div>
                <div class="form-group">
                    <input
                        disabled={enable}
                        type='button'
                        class="btnSubmit"
                        value='Ingresar'
                    />


                </div>
                <div class="form-group">

                    <a href="#" class="ForgetPwd" value="Login">Forget Password?</a>
                </div>
            </form>
        </div>

    );
}

export default Ingreso;