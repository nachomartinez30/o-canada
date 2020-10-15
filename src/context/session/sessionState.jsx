import React, { useReducer } from 'react'
// se importan los types
import { NEW_SESSION } from '../../types'
/* se importan el context y se le pasa el reducer */
import sessionContext from "./sessionContext";
import sessionReducer from './sessionReducer';

const SessionState = (props) => {


    const stateInicial = {
        session: {
            user: {}
            // user: {
            //     "email": "desarrollo1@conafor.gob.mx",
            //     "token": "04af479c3234b9f9c69f3d1062b4fcd191f5dcdb5a70bc203732dc9108cb922a4fdaaf74",
            //     "user_type": "99",
            //     "porfile": {
            //         "regionales": true,
            //         "estatales": true,
            //         "mesa_ayuda": true,
            //         "administracion": true,
            //         "brigadas": true,
            //     }
            // }

        }
    }

    // dipatch ejecuta las acciones
    const [state, dispatch] = useReducer(sessionReducer, stateInicial)


    const loginUser = user => {
        dispatch({
            tipo: NEW_SESSION,
            payload: user
        })
    }



    return (
        <sessionContext.Provider
            // dota al provider de el state y los metodos para agregar a este los campos necesarios
            value={
                {
                    login: {
                        ...state.session,
                        loginUser
                    }
                }
            }
        >
            {props.children}
        </sessionContext.Provider>
    )
}

export default SessionState;