import React, { useReducer } from 'react'
// se importan los types
import { AGREGAR_REGISTRO } from '../../types'
/* se importan el context y se le pasa el reducer */
import candidatoContext from "./candidatoContext";
import candidatoReducer from './candidatoReducer'

const CandidatoState = (props) => {


    const stateInicial = {
        candidato: {
            infoBrigadista: {}
        }
    }

    // dipatch ejecuta las acciones
    const [state, dispatch] = useReducer(candidatoReducer, stateInicial)


    const agregarCandidato = candidato => {
        dispatch({
            tipo: AGREGAR_REGISTRO,
            payload: candidato
        })
    }



    return (
        <candidatoContext.Provider
            // dota al provider de el state y los metodos para agregar a este los campos necesarios
            value={
                {
                    candidatos: {
                        ...state.candidato,
                        agregarCandidato
                    }
                }
            }
        >
            {props.children}
        </candidatoContext.Provider>
    )
}

export default CandidatoState;