import React from 'react'

const Registro = (props) => {
    const { enable, onMouseEnter } = props
    return (
        <div className={`col-md-6 ${(enable) ? 'login-form-1' : 'login-form-2'}`}
            onMouseEnter={onMouseEnter}
        >
            <h3>Registrarse por primera vez</h3>
            <form>
                <div className="form-group">
                    <input disabled={enable} type="text" className="form-control" placeholder="Ingrese su CURP  *" value="" />
                </div>
                <div className="form-group">
                    <input disabled={enable} type="password" className="form-control" placeholder="Ingrese su contraseña *" value="" />
                </div>
                <div className="form-group">
                    <input disabled={enable} type="password" className="form-control" placeholder="Repita su contraseña *" value="" />
                </div>
                <div className="form-group">
                    <input disabled={enable} type="submit" className="btnSubmit" value="Login" />
                </div>
                <div className="form-group">
                    <a href="#" className="ForgetPwd">Forget Password?</a>
                </div>
            </form>
        </div>
    );
}

export default Registro;