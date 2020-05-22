import React from 'react'
import SelectSiNo from '../singles/SelectSiNo'

const S6 = (props) => {
    const { state, setState, checkData } = props

    const setInfo = (input) => {
        /* setea al state las variables */
        setState({
            ...state,
            [input.target.name]: input.target.value
        })
    }

    const revisarFormulario = () => {
        /* SI opera todo el equipo */
        if (state.opera_autonoma_gps === '0' || state.opera_autonoma_mark3 === '0') {
            debugger
            setState({
                ...state,
                rechazo: true,
                motivo_rechazo: 'falta habilidad y competencia'
            })
        } else {
            setState({
                ...state,
                rechazo: false,
                motivo_rechazo: null
            })
        }
        checkData();
    }

    return (
        <div className='row body_wrap'>
            {/* Opera de manera autónoma GPS */}
            <div className='col-6'>
                <label className="control-label pt-2">Opera de manera autónoma GPS</label>
                <SelectSiNo
                    className="form-control myInput"
                    name='opera_autonoma_gps'
                    defaultValue={state.opera_autonoma_gps}
                    onChange={setInfo}
                />
            </div>

            {/* Opera de manera autónoma Bomba Mark 3 */}
            <div className='col-6'>
                <label className="control-label pt-2">Opera de manera autónoma Bomba Mark 3</label>
                <SelectSiNo
                    className="form-control myInput"
                    name='opera_autonoma_mark3'
                    defaultValue={state.opera_autonoma_mark3}
                    onChange={setInfo}
                />
            </div>

            {/* Opera de manera autónoma Motosierra */}
            <div className='col-6'>
                <label className="control-label pt-2">Opera de manera autónoma Motosierra</label>
                <SelectSiNo
                    className="form-control myInput"
                    name='opera_autonoma_motosierra'
                    defaultValue={state.opera_autonoma_motosierra}
                    onChange={setInfo}
                />
            </div>
            {/* BTN Continuar */}
            <div className='col-12 pt-5 btn-margin'>
                <button
                    className='btn btn-primary'
                    onClick={revisarFormulario}
                >Continuar</button>
            </div>
        </div>
    );
}

export default S6;