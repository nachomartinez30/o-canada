import React, { useReducer } from 'react'
// se importan los types
import { AGREGAR_PRUEBA } from '../../types'
/* se importan el context y se le pasa el reducer */
import pruebasFisicasContext from "./pruebasFisicasContext";
import pruebasFisicasReducer from './pruebasFisicasReducer'

const PruebasFisicasState = (props) => {


    const stateInicial = {
        candidato: {
            pruebasCandidato: {}
        }
    }

    // dipatch ejecuta las acciones
    const [state, dispatch] = useReducer(pruebasFisicasReducer, stateInicial)


    const agregarPruebas = candidato => {
        dispatch({
            tipo: AGREGAR_PRUEBA,
            payload: candidato
        })
    }



    return (
        <pruebasFisicasContext.Provider
            // dota al provider de el state y los metodos para agregar a este los campos necesarios
            value={
                {
                    cand: {
                        ...state.candidato,
                        agregarPruebas
                    }
                }
            }
        >
            {props.children}
        </pruebasFisicasContext.Provider>
    )
}

export default PruebasFisicasState;