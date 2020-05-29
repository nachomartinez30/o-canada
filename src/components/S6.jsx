import React from 'react'
import AlertaSiguiente from '../singles/AlertaSiguiente'
import SelectSiNo from '../singles/SelectSiNo'

const S6 = (props) => {
/* TODO: agregar a esta seccion la pregunta de primero auxilios */
    const { state, setState, checkData } = props

    const setInfo = (input) => {
        /* setea al state las variables */
        setState({
            ...state,
            [input.target.name]: input.target.value
        })
    }

    const revisionCompetencias = () => {
        console.log('working...');
        
        if (state.opera_autonoma_gps === '0' || state.opera_autonoma_mark3 === '0') {

            setState({
                ...state,
                rechazo: true,
                motivo_rechazo: 'falta de habilidad o competencia'
            })
        } else {

            setState({
                ...state,
                rechazo: false,
                motivo_rechazo: null
            })
        }
    }


    return (
        <div className='row body_wrap'>
            {/* Opera de manera autónoma GPS */}
            <div className='col-12 col-md-6'>
                <label className="control-label pt-2">Opera de manera autónoma GPS</label>
                <SelectSiNo
                    className="form-control myInput"
                    name='opera_autonoma_gps'
                    onBlur={revisionCompetencias}
                    defaultValue={state.opera_autonoma_gps}
                    onChange={setInfo}
                />
            </div>

            {/* Opera de manera autónoma Bomba Mark 3 */}
            <div className='col-12 col-md-6'>
                <label className="control-label pt-2">Opera de manera autónoma Bomba Mark 3</label>
                <SelectSiNo
                    className="form-control myInput"
                    name='opera_autonoma_mark3'
                    onBlur={revisionCompetencias}
                    defaultValue={state.opera_autonoma_mark3}
                    onChange={setInfo}
                />
            </div>

            {/* Opera de manera autónoma Motosierra */}
            <div className='col-12 col-md-6'>
                <label className="control-label pt-2">Opera de manera autónoma Motosierra</label>
                <SelectSiNo
                    className="form-control myInput"
                    name='opera_autonoma_motosierra'
                    onBlur={revisionCompetencias}
                    defaultValue={state.opera_autonoma_motosierra}
                    onChange={setInfo}
                />
            </div>
            {/* BTN Continuar */}
            <div className='col-12 pt-5 btn-margin'>
                <button
                    className='btn btn-primary'
                     onClick={() =>AlertaSiguiente(checkData)}
                >Continuar</button>
            </div>
        </div>
    );
}

export default S6;