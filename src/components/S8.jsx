import React from 'react'
import SelectSiNo from '../singles/SelectSiNo'

const S8 = (props) => {
    const { state, setState, checkData } = props

    const setInfo = (input) => {
        /* setea al state las variables */
        setState({
            ...state,
            [input.target.name]: input.target.value
        })
    }
    return (
        <div className='row'>

            {/* Nivel de inglés */}
            <div className='col-6'>
                <label className="control-label pt-2">Nivel de inglés</label>
                <select
                    className="form-control myInput"
                    name='nivel_ingles'
                    onChange={setInfo}
                >
                    <option value='' >---Seleccione---</option>
                    <option value='Basico'>Básico</option>
                    <option value='Intermedio'>Intermedio</option>
                    <option value='Avanzado'>Avanzado</option>
                </select>
            </div>

            {/* Examen TOEIC/TOEFL */}
            <div className='col-6'>
                <label className="control-label pt-2">Examen TOEIC/TOEFL</label>
                <input
                    className="form-control myInput"
                    name='examen_toeic-toefl_archivo'
                    type='file'
                    onChange={setInfo}
                    placeholder='Ingrese Examen TOEIC/TOEFL...'
                />
            </div>

            {/* TOEIC/TOEFL */}
            <div className='col-6'>
                <label className="control-label pt-2">Examen TOEIC/TOEFL</label>
                <select
                    className="form-control myInput"
                    name='toeic_toefl'
                    onChange={setInfo}
                >
                    <option value='' >---Seleccione---</option>
                    <option value='Basico'>TOEIC</option>
                    <option value='Intermedio'>TOEFL</option>
                </select>
            </div>

            {/* Examen TOEIC/TOEFL puntuación */}
            <div className='col-6'>
                <label className="control-label pt-2">Examen TOEIC/TOEFL puntuación</label>
                <input
                    className="form-control myInput"
                    name='examen_toeic-toefl_punt'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Examen TOEIC/TOEFL puntuación...'
                />
            </div>

            {/* L-280 */}
            <div className='col-6'>
                <label className="control-label pt-2">Cuenta con el curso L-280</label>
                <SelectSiNo
                    className="form-control myInput"
                    name='l-280'
                    onChange={setInfo}
                />
            </div>

            {/* S-290  Archivo*/}
            <div className='col-6'>
                <label className="control-label pt-2">Si la respuesta es sí cargue su constancia</label>
                <input
                    className="form-control myInput"
                    name='l-280_file'
                    type='file'
                    onChange={setInfo}
                    placeholder='Ingrese archivo L-280...'
                />
            </div>

            {/* S-290 */}
            <div className='col-6'>
                <label className="control-label pt-2">Cuenta con el curso S-290</label>
                <SelectSiNo
                    className="form-control myInput"
                    name='s-290'
                    onChange={setInfo}
                />
            </div>

            {/* S-290 Archivo*/}
            <div className='col-6'>
                <label className="control-label pt-2">Si la respuesta es sí cargue su constancia</label>
                <input
                    className="form-control myInput"
                    name='s-290_file'
                    type='file'
                    onChange={setInfo}
                    placeholder='Ingrese archivo S-290...'
                />
            </div>

            {/* Certificación internacional de incendios forestales */}
            <div className='col-6'>
                <label className="control-label pt-2">¿Cuenta con certificación internacional de incendios forestales?</label>
                <SelectSiNo
                    className="form-control myInput"
                    name='cert_intern_incendios'
                    onChange={setInfo}
                />
            </div>

            {/* Certificación internacional de incendios forestales - Archivo*/}
            <div className='col-6'>
                <label className="control-label pt-2">Si la respuesta es sí cargue su constancia</label>
                <input
                    className="form-control myInput"
                    name='cert_intern_incendios_file'
                    type='file'
                    onChange={setInfo}
                    placeholder='Ingrese archivo...'
                />
            </div>

            {/* Certificación internacional en atención de emergencias medicas */}
            <div className='col-12'>
                <label className="control-label pt-2">¿Cuenta con certificación internacional en atención de emergencias medicas?</label>
                <SelectSiNo
                    className="form-control myInput"
                    name='cert_intern_ate_emerg_med'
                    onChange={setInfo}
                />
            </div>

            {/* Certificación internacional en atención de emergencias medicas - Archivo*/}
            <div className='col-6'>
                <label className="control-label pt-2">Si la respuesta es sí cargue su constancia</label>
                <input
                    className="form-control myInput"
                    name='cert_intern_ate_emerg_med_file'
                    type='file'
                    onChange={setInfo}
                    placeholder='Ingrese archivo...'
                />
            </div>

        </div>
    );
}

export default S8;