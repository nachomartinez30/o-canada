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
                    session: {
                        ...state.user,
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