import React from 'react'
import SelectSiNo from '../singles/SelectSiNo'

const S8 = (props) => {
    const { state, setState, checkData, setStateFiles, files } = props

    const setInfo = (input) => {
        if (input.target.name === 'examen_toeic_toefl_archivo' || input.target.name === 'l_280_file'
            || input.target.name === 's_290_file' || input.target.name === 'cert_intern_incendios_file'
            || input.target.name === 'cert_intern_ate_emerg_med_file'
        ) {
            setStateFiles({
                ...files,
                [input.target.name + '_fl']: input.target.files
            })
        } else {
            /* setea al state las variables */
            setState({
                ...state,
                [input.target.name]: input.target.value
            })
        }
    }
    return (
        <div className='row body_wrap'>
            {/* Posicion Candidato */}
            <div className='col-12'>
                <label className="control-label pt-2">Posición a la que es candidato:</label>
                <select
                    className={`form-control myInput`}
                    name='posicion_candidato'
                    defaultValue={state.posicion_candidato}
                    onChange={setInfo}
                    placeholder='Posición a la que es candidato...'
                >
                    <option value='' >---Seleccione---</option>
                    <option value='combatiente'>Combatiente</option>
                    <option value='jefe_de_cuadrilla'>Jefe de Cuadrilla</option>
                    <option value='jefe_de_brigada'>Jefe de Brigada</option>
                    <option value='tecnico'>Técnico</option>
                </select>
            </div>
            {(state.posicion_candidato === 'jefe_de_brigada' || state.posicion_candidato === 'tecnico') ?
                <React.Fragment>
                    {/* Nivel de inglés */}
                    <div className='col-6'>
                        <label className="control-label pt-2">Nivel de inglés</label>
                        <select
                            className="form-control myInput"
                            name='nivel_ingles'
                            defaultValue={state.nivel_ingles}
                            onChange={setInfo}
                        >
                            <option value='' >---Seleccione---</option>
                            <option value='basico'>Básico</option>
                            <option value='intermedio'>Intermedio</option>
                            <option value='avanzado'>Avanzado</option>
                        </select>
                    </div>

                    {/* Examen TOEIC/TOEFL */}
                    <div className='col-6'>
                        <label className="control-label pt-2">Examen TOEIC/TOEFL</label>
                        <input
                            className="form-control myInput"
                            name='examen_toeic_toefl_archivo'
                            value={state.examen_toeic_toefl_archivo}
                            type='file'
                            accept="application/pdf"
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
                            defaultValue={state.toeic_toefl}
                            onChange={setInfo}
                        >
                            <option value='' >---Seleccione---</option>
                            <option value='toeic'>TOEIC</option>
                            <option value='toefl'>TOEFL</option>
                        </select>
                    </div>

                    {/* Examen TOEIC/TOEFL puntuación */}
                    <div className='col-6'>
                        <label className="control-label pt-2">Examen TOEIC/TOEFL puntuación</label>
                        <input
                            className="form-control myInput"
                            name='examen_toeic_toefl_punt'
                            value={state.examen_toeic_toefl_punt}
                            type=''
                            onChange={setInfo}
                            placeholder='Ingrese Examen TOEIC/TOEFL puntuación...'
                        />
                    </div>
                </React.Fragment>
                : null}
            {/* L-280 */}
            <div className='col-6'>
                <label className="control-label pt-2">Cuenta con el curso L-280</label>
                <SelectSiNo
                    className="form-control myInput"
                    name='l_280'
                    defaultValue={state.l_280}
                    onChange={setInfo}
                />
            </div>

            {/* S-290  Archivo*/}
            {state.l_280 === '1' && <React.Fragment>
                <div className='col-6'>
                    <label className="control-label pt-2">Si la respuesta es sí cargue su constancia</label>
                    <input
                        className="form-control myInput"
                        name='l_280_file'
                        value={state.l_280_file}
                        type='file'
                        accept="application/pdf"
                        onChange={setInfo}
                        placeholder='Ingrese archivo L-280...'
                    />
                </div>

            </React.Fragment>}

            {/* S-290 */}
            <div className='col-6'>
                <label className="control-label pt-2">Cuenta con el curso S-290</label>
                <SelectSiNo
                    className="form-control myInput"
                    name='s_290'
                    defaultValue={state.s_290}
                    onChange={setInfo}
                />
            </div>

            {/* S-290 Archivo*/}
            {state.s_290 === '1' && <React.Fragment>
                <div className='col-6'>
                    <label className="control-label pt-2">Si la respuesta es sí cargue su constancia</label>
                    <input
                        className="form-control myInput"
                        name='s_290_file'
                        value={state.s_290_file}
                        type='file'
                        accept="application/pdf"
                        onChange={setInfo}
                        placeholder='Ingrese archivo S-290...'
                    />
                </div>

            </React.Fragment>}

            {/* Certificación internacional de incendios forestales */}
            <div className='col-6'>
                <label className="control-label pt-2">¿Cuenta con certificación internacional de incendios forestales?</label>
                <SelectSiNo
                    className="form-control myInput"
                    name='cert_intern_incendios'
                    defaultValue={state.cert_intern_incendios}
                    onChange={setInfo}
                />
            </div>

            {/* Certificación internacional de incendios forestales - Archivo*/}
            {state.cert_intern_incendios === '1' && <React.Fragment>
                <div className='col-6'>
                    <label className="control-label pt-2">Si la respuesta es sí cargue su constancia</label>
                    <input
                        className="form-control myInput"
                        name='cert_intern_incendios_file'
                        value={state.cert_intern_incendios_file}
                        type='file'
                        accept="application/pdf"
                        onChange={setInfo}
                        placeholder='Ingrese archivo...'
                    />
                </div>
            </React.Fragment>}
            {/* Certificación internacional en atención de emergencias medicas */}
            <div className='col-12'>
                <label className="control-label pt-2">¿Cuenta con certificación internacional en atención de emergencias medicas?</label>
                <SelectSiNo
                    className="form-control myInput"
                    name='cert_intern_ate_emerg_med'
                    defaultValue={state.cert_intern_ate_emerg_med}
                    onChange={setInfo}
                />
            </div>

            {/* Certificación internacional en atención de emergencias medicas - Archivo*/}
            {state.cert_intern_ate_emerg_med === '1' && <React.Fragment>
                <div className='col-6'>
                    <label className="control-label pt-2">Si la respuesta es sí cargue su constancia</label>
                    <input
                        className="form-control myInput"
                        name='cert_intern_ate_emerg_med_file'
                        value={state.cert_intern_ate_emerg_med_file}
                        type='file'
                        accept="application/pdf"
                        onChange={setInfo}
                        placeholder='Ingrese archivo...'
                    />
                </div>
            </React.Fragment>
            }

            {/* BTN Continuar */}
            <div className='col-12 pt-5 btn-margin'>
                <button
                    className='btn btn-primary'
                    onClick={checkData}
                >Continuar</button>
            </div>
        </div>
    );
}

export default S8;