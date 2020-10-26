import React, { useState, useContext, useEffect } from 'react'
import Dashboard from '../components/administracion/Dashboard';
import LoginUsers from '../singles/LoginUsers';
import sessionContext from "../context/session/sessionContext";
import Axios from 'axios';
import AlertError from '../singles/AlertError';

const Administracion = () => {
    const sessContext = useContext(sessionContext)


    const API_REQUEST = process.env.REACT_APP_BACKEN_URL
    // const [user, setUser] = useState(sessContext.session.user)
    const [user, setUser] = useState(false)

    const [userPorfile, setUserPorfile] = useState({
        regionales: false,
        estatales: false,
        mesa_ayuda: false,
        manifiesto: false,
        brigadas: false,
    })

    const [toSend, setToSend] = useState({
        email: '',
        pass: ''
    })

    const checkUser = async (event) => {
        event.preventDefault();
        const url = `${API_REQUEST}login_user`;

        try {
            const resp = await Axios.post(url, toSend);
            if (resp.status === 200) {
                /* ingresar en el context y en el state la respuesta */
                setUser(resp.data)
                sessContext.login.loginUser({
                    ...sessContext.login,
                    user: resp.data.user
                })
                setUserPorfile(resp.data.user.porfile)
                sessionStorage.setItem('user_session', JSON.stringify(resp.data.user))
            }
        } catch (error) {
            AlertError('Error', error);
        }
    }

    useEffect(() => {
        // revisar el sessionStorage y asignar session
        const user = JSON.parse(sessionStorage.getItem('user_session'));

        if (user) {
            // asignar perfil y datos de usuario
            setUser(user)
            sessContext.login.loginUser({
                ...sessContext.login,
                user: user
            })
            setUserPorfile(user.porfile)
        }
    }, [''])

    return (
        <React.Fragment>
            {(user) ?
                <Dashboard
                    userPorfile={userPorfile}
                />
                :
                <LoginUsers
                    state={toSend}
                    setState={setToSend}
                    onSubmit={checkUser}
                />
            }
        </React.Fragment>
    );
}

export default Administracion;