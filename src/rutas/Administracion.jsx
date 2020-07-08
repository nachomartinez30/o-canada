import React, { useState, useContext } from 'react'
import Dashboard from '../components/administracion/Dashboard';
import LoginUsers from '../singles/LoginUsers';
import sessionContext from "../context/session/sessionContext";
import Axios from 'axios';
import AlertError from '../singles/AlertError';

const Administracion = () => {
    /* TODO: 
            pasar a context la session del usuario
    */
    const sessContext = useContext(sessionContext)


    const API_REQUEST = process.env.REACT_APP_BACKEN_URL
    // const [user, setUser] = useState(sessContext.session.user)
    const [user, setUser] = useState(!true)

    const [userPorfile, setUserPorfile] = useState({
        regionales: true,
        estatales: true,
        mesa_ayuda: !true,
        manifiesto: !true,
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
                const respuesta = resp.data.user
                
                setUser(resp.data)
                sessContext.login.loginUser({
                    ...sessContext.login,
                    user: resp.data.user
                })
                
            }
        } catch (error) {
            AlertError('Error', error);
        }
    }

    return (
        <React.Fragment>
            {(!user) ?
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