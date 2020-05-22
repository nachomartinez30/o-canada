import React, { useState } from 'react'
import AlertExito from '../singles/AlertExito'

const S5 = (props) => {
    const { state, setState, checkData } = props
    const [preguntas_s_190, setPreguntas_s_190] = useState(false)
    const [sci_190Examen, setSci_190Examen] = useState(false)

    const setInfo = (input) => {
        /* setea al state las variables */
        setState({
            ...state,
            [input.target.name]: input.target.value
        })
    }

    const siguienteExamen = () => {

        AlertExito('Examen')
        setSci_190Examen(true)
    }

    return (
        <div className='row body_wrap'>

            {/* S-190 */}
            <div className='col-6'>
                <label className="control-label pt-2">S-190 o CPCIF</label>
                <input
                    className="form-control myInput"
                    name='s_190'
                    type='file'
                    onChange={setInfo}
                    onBlur={() => { setPreguntas_s_190((state.s_190 && state.s_130) ? true : false) }}
                    onMouseLeave={() => { setPreguntas_s_190((state.s_190 && state.s_130) ? true : false) }}
                    placeholder='Ingrese S-190 o CPCIF...'
                />
            </div>

            {/* S-130 */}
            <div className='col-6'>
                <label className="control-label pt-2">S-130 o CPCIF</label>
                <input
                    className="form-control myInput"
                    name='s_130'
                    type='file'
                    onChange={setInfo}
                    onBlur={() => { setPreguntas_s_190((state.s_190 && state.s_130) ? true : false) }}
                    onMouseLeave={() => { setPreguntas_s_190((state.s_190 && state.s_130) ? true : false) }}
                    placeholder='Ingrese S-130 o CPCIF...'
                />
            </div>

            {preguntas_s_190 && <React.Fragment>
                {/* S-130 */}
                <div className='col-12'>
                    <label className="control-label pt-2">¿Cuántas veces ha sido asignado como recurso nacional en incendios forestales en una entidad federativa distinta a su base?</label>
                    <input
                        className="form-control myInput"
                        name='asignado_recurso_nacional'
                        type=''
                        onChange={setInfo}
                        placeholder='¿Cuántas veces ha sido asignado como recurso nacional en incendios forestales...'
                    />
                </div>

                {/* S-130 */}
                <div className='col-12'>
                    <label className="control-label pt-2">¿Cuántas veces ha sido asignado como recurso en incendios forestales en otro país?</label>
                    <input
                        className="form-control myInput"
                        name='asignado_recurso_otro_pais'
                        type=''
                        onChange={setInfo}
                        placeholder='¿Cuántas veces ha sido asignado como recurso en incendios forestales en otro país?'
                    />
                </div>


            </React.Fragment>}
            
            {/* BTN SCI/SMI 100 */}
            <div className='col-12 pt-5 btn-margin'>
                {/* TODO: completar examenes */}
                <button
                    hidden={(state.asignado_recurso_nacional && state.asignado_recurso_otro_pais && !sci_190Examen) ? false : true}

                    onClick={siguienteExamen}
                    className='btn btn-warning'
                // onClick={checkData}
                >Tomar examen SCI/SMI 100</button>
            </div>


            {/* BTN Continuar */}
            <div className='col-12 pt-5 btn-margin'>
                <button
                    disabled={!sci_190Examen}
                    className='btn btn-primary'
                    onClick={checkData}
                >Continuar</button>
            </div>
        </div>
    );
}

export default S5;