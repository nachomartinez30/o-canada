import React, { useState } from 'react'
import Registro from './Registro';
import Ingreso from './Ingreso';

const Login = () => {
    const [ingreso, setIngreso] = useState(false)
    return (
        <div class="container login-container">
            <div class="row">

                <Registro
                    onMouseEnter={() => setIngreso(true)}
                    enable={!ingreso}
                />


                <Ingreso
                    onMouseEnter={() => setIngreso(false)}
                    enable={ingreso}
                />
            </div>
        </div>
    );
}

export default Login;