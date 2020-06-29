import React from 'react'
import "../assets/stylesLoginUsers.css";

const LoginUsers = (props) => {

    const { state, setState, onSubmit } = props

    const setInfo = (input) => {
        setState({
            ...state,
            [input.target.name]: input.target.value
        })
    }

    return (
        <div className="container">
            <div className="card card-container">
                <img id="profile-img" className="profile-img-card" src="//ssl.gstatic.com/accounts/ui/avatar_2x.png" alt='User Pic' />
                <p id="profile-name" className="profile-name-card" />
                <label className='col-form-label'>Ingresar sus crédenciales</label>
                <form className="form-signin"
                    onSubmit={onSubmit}
                >
                    <span id="reauth-email" className="reauth-email" />
                    <input
                        type="email"
                        name="email"
                        id="inputEmail"
                        className="form-control"
                        placeholder="Ingrese su correo..."
                        required
                        onChange={setInfo}
                        autoFocus
                    />
                    <input
                        type="password"
                        name="pass"
                        id="inputPassword"
                        className="form-control"
                        placeholder="Ingrese su contraseña..."
                        onChange={setInfo}
                        required
                    />
                    <button className="btn btn-lg btn-info btn-block btn-signin"
                        type="submit"
                    >
                        Entrar
                     </button>
                </form>
            </div>
        </div>
    );
}

export default LoginUsers;