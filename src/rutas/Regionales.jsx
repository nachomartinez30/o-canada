import React, { useContext, useState, useEffect } from 'react'
import sessionContext from "../context/session/sessionContext";

import LoginUsers from '../singles/LoginUsers';
import axios from 'axios';
import AlertError from '../singles/AlertError';
import Dashboard from '../components/administracion/Dashboard';
const API_REQUEST = process.env.REACT_APP_BACKEN_URL

const Regionales = () => {
    const sessContext = useContext(sessionContext)

    const [user, setUser] = useState(sessContext.session.user)
    // const [user, setUser] = useState(false)
    

    const [toSend, setToSend] = useState({
        email: '',
        pass: ''
    })

 
    const checkUser = async (event) => {
        event.preventDefault();
        const url = `${API_REQUEST}login_user`;

        try {
            const resp = await axios.post(url, toSend);
            if (resp.status === 200) {
                /* ingresar en el context y en el state la respuesta */
                setUser(resp.data)
                sessContext.session.loginUser({
                    ...sessContext.session,
                    user: resp.data
                })
            }
        } catch (error) {
            AlertError('Error', error);
        }
    }



    return (
        <div>
            {
                (!user)
                    ? <LoginUsers
                        state={toSend}
                        setState={setToSend}
                        onSubmit={checkUser}
                    />
                    : <Dashboard />
            }
        </div>
    );
}

export default Regionales;