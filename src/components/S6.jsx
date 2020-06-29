import React from 'react'
import AlertaSiguiente from '../singles/AlertaSiguiente'
import SelectSiNo from '../singles/SelectSiNo'

const S6 = (props) => {
    const { state, setState, checkData, setStateFiles, files } = props

    const setInfo = (input) => {
        /* setea al state las variables */
        if (input.target.name === 'doc_acred_primeros_auxilios') {
            setStateFiles({
                ...files,
                [input.target.name + '_fl']: input.target.files
            })
        } else {
            setState({
                ...state,
                [input.target.name]: input.target.value
            })
        }
    }

    const revisionCompetencias = () => {

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
            {/* Cuenta con conocimientos de primero auxilios */}
            <div className='col-12 col-md-8'>
                <label className="control-label pt-2">¿Cuenta con conocimientos de primero auxilios?</label>
                <SelectSiNo
                    className="form-control myInput"
                    name='conocimientos_primeros_auxilios'
                    defaultValue={state.conocimientos_primeros_auxilios}
                    onChange={setInfo}
                />
            </div>
            {/* Cuenta con conocimientos de primero auxilios */}
            <div className='col-12 col-md-4'>
                {state.conocimientos_primeros_auxilios === '1' && <React.Fragment>
                    <label className="control-label pt-2">Nivel:</label>
                    <select
                        className="form-control myInput"
                        name='niv_primeros_auxilios'
                        value={state.niv_primeros_auxilios}
                        onChange={setInfo}
                    >
                        <option>---Seleccione---</option>
                        <option value='basico'>Básico</option>
                        <option value='intermedio'>Intermedio</option>
                        <option value='avanzado'>Avanzado</option>
                    </select>
                </React.Fragment>}
            </div>
            {/* ARCHIVO ACREDITACION */}
            <div className='col-12 col-md-12'>
                {state.conocimientos_primeros_auxilios === '1' && <React.Fragment>
                    <label className="control-label pt-2">Documento de acreditación</label>
                    <input
                        className="form-control myInput"
                        type='file'
                        name='doc_acred_primeros_auxilios'
                        onChange={setInfo}
                    />
                </React.Fragment>}
            </div>
            {/* BTN Continuar */}
            <div className='col-12 pt-5 btn-margin'>
                <button
                    className='btn btn-primary'
                    onClick={() => AlertaSiguiente("Si continúa, no será posible volver a esta seccion", checkData)}
                >Continuar</button>
            </div>
        </div>
    );
}

export default S6;