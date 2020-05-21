import React from 'react'

const S2 = (props) => {
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
            {/* Certificado toxicológico */}
            <div className='col-8'>
                <label className="control-label pt-2">Certificado toxicológico</label>
                <input
                    className="form-control myInput"
                    name='cert_toxicologico'
                    // value={state.cert_toxicologico}
                    type='file'
                    onChange={setInfo}
                    placeholder='Ingrese Certificado toxicológico...'
                />
            </div>

            {/* Certificado toxicológico Fecha */}
            <div className='col-4'>
                <label className="control-label pt-2">Certificado toxicológico Fecha</label>
                <input
                    className="form-control myInput"
                    name='fecha_cert_toxicologico'
                    value={state.fecha_cert_toxicologico}
                    type='date'
                    onChange={setInfo}
                    placeholder='Ingrese Certificado toxicológico Fecha...'
                />
            </div>

            {/* Certificado médico */}
            <div className='col-8'>
                <label className="control-label pt-2">Certificado médico</label>
                <input
                    className="form-control myInput"
                    name='cert_medico'
                    // value={state.cert_medico}
                    type='file'
                    onChange={setInfo}
                    placeholder='Ingrese Certificado médico...'
                />
            </div>

            {/* Certificado médico Fecha */}
            <div className='col-4'>
                <label className="control-label pt-2">Certificado médico Fecha</label>
                <input
                    className="form-control myInput"
                    name='fecha_cert_medico'
                    value={state.fecha_cert_medico}
                    type='date'
                    onChange={setInfo}
                    placeholder='Ingrese Certificado médico Fecha...'
                />
            </div>

            {/* ¿Padece alguna enfermedad? */}
            <div className='col-5'>
                <label className="control-label pt-2">¿Padece alguna enfermedad?</label>
                <select
                    className="form-control myInput"
                    name='padece_enfermedad'
                    defaultValue={state.padece_enfermedad}
                    onChange={setInfo}
                    placeholder='¿Padece alguna enfermedad?'
                >
                    <option value='' >---Seleccione---</option>
                    <option value='si'>Si</option>
                    <option value='no'>No</option>
                </select>
            </div>

            {/* ¿Qué enfermedad padece? */}
            <div className='col-7'>
                <label className="control-label pt-2">¿Qué enfermedad padece?</label>
                <input
                    className="form-control myInput"
                    name='que_enfermedad'
                    value={state.que_enfermedad}
                    onChange={setInfo}
                    placeholder='Qué enfermedad padece'
                />
            </div>

            {/* ¿Requiere medicamentos de manera permanente? */}
            <div className='col-5'>
                <label className="control-label pt-2">¿Requiere medicamentos de manera permanente?</label>
                <select
                    className="form-control myInput"
                    name='requiere_medicamentos_perm'
                    defaultValue={state.requiere_medicamentos_perm}
                    onChange={setInfo}
                    placeholder='¿Requiere medicamentos de manera permanente?'
                >
                    <option value='' >---Seleccione---</option>
                    <option value='si'>Si</option>
                    <option value='no'>No</option>
                </select>
            </div>

            {/* ¿Requiere medicamentos de manera permanente? */}
            <div className='col-7'>
                <label className="control-label pt-2">¿Qué medicamentos requiere de manera permanente?</label>
                <input
                    className="form-control myInput"
                    name='que_medicamentos'
                    value={state.que_medicamentos}
                    onChange={setInfo}
                    placeholder='¿Qué medicamentos requiere de manera permanente?'
                />
            </div>

            {/* ¿Experimentó dolor, incomodidad o presión en el pecho? */}
            <div className='col-12'>
                <label className="control-label pt-2">Durante los últimos 12 meses, en cualquier momento (durante la actividad física o mientras descansa) ¿experimentó dolor, incomodidad o presión en el pecho?</label>
                <select
                    className="form-control myInput"
                    name='experimento_dolor_pecho'
                    defaultValue={state.experimento_dolor_pecho}
                    onChange={setInfo}
                    placeholder='¿Experimentó dolor, incomodidad o presión en el pecho?'
                >
                    <option value='' >---Seleccione---</option>
                    <option value='si'>Si</option>
                    <option value='no'>No</option>
                </select>
            </div>

            {/* ¿Ha experimentado dificultad para respirar, mareos, desmayos o pérdida del conocimiento? */}
            <div className='col-12'>
                <label className="control-label pt-2">Durante los últimos 12 meses, ¿ha experimentado dificultad para respirar, mareos, desmayos o pérdida del conocimiento?</label>
                <select
                    className="form-control myInput"
                    name='experimento_dificultad_respirar'
                    defaultValue={state.experimento_dificultad_respirar}
                    onChange={setInfo}
                    placeholder='¿Ha experimentado dificultad para respirar, mareos, desmayos o pérdida del conocimiento?'
                >
                    <option value=''>---Seleccione---</option>
                    <option value='si'>Si</option>
                    <option value='no'>No</option>
                </select>
            </div>

            {/* ¿Tiene una presión arterial sistólica mayor que 140 o diastólica mayor que 90? */}
            <div className='col-12'>
                <label className="control-label pt-2">¿Tiene una presión arterial sistólica mayor que 140 o diastólica mayor que 90?</label>
                <select
                    className="form-control myInput"
                    name='presion_arterial_sistolica_diastolica'
                    defaultValue={state.presion_arterial_sistolica_diastolica}
                    onChange={setInfo}
                    placeholder='¿Tiene una presión arterial sistólica mayor que 140 o diastólica mayor que 90?'
                >
                    <option value='' >---Seleccione---</option>
                    <option value='si'>Si</option>
                    <option value='no'>No</option>
                </select>
            </div>

            {/* ¿Tiene una presión arterial sistólica mayor que 140 o diastólica mayor que 90? */}
            <div className='col-12'>
                <label className="control-label pt-2">¿Tiene una presión arterial sistólica mayor que 140 o diastólica mayor que 90?</label>
                <select
                    className="form-control myInput"
                    name='presion_arterial_sistolica_diastolica'
                    defaultValue={state.presion_arterial_sistolica_diastolica}
                    onChange={setInfo}
                    placeholder='¿Tiene una presión arterial sistólica mayor que 140 o diastólica mayor que 90?'
                >
                    <option value='' >---Seleccione---</option>
                    <option value='si'>Si</option>
                    <option value='no'>No</option>
                </select>
            </div>

            {/* ¿Alguna vez le han diagnosticado o tratado alguna enfermedad cardíaca, soplo cardíaco, dolor en el pecho, arritmias o ataque cardíaco? */}
            <div className='col-12'>
                <label className="control-label pt-2">¿Alguna vez le han diagnosticado o tratado alguna enfermedad cardíaca, soplo cardíaco, dolor en el pecho (angina), arritmias (latido irregular) o ataque cardíaco?</label>
                <select
                    className="form-control myInput"
                    name='enfermedad_cardiaca'
                    defaultValue={state.enfermedad_cardiaca}
                    onChange={setInfo}
                    placeholder='¿Alguna vez le han diagnosticado o tratado alguna enfermedad cardíaca, soplo cardíaco, dolor en el pecho, arritmias o ataque cardíaco?'
                >
                    <option value='' >---Seleccione---</option>
                    <option value='si'>Si</option>
                    <option value='no'>No</option>
                </select>
            </div>

            {/* ¿Alguna vez ha tenido una cirugía de corazón, angioplastia o marcapasos, reemplazo de válvula o trasplante de corazón? */}
            <div className='col-12'>
                <label className="control-label pt-2">¿Alguna vez ha tenido una cirugía de corazón, angioplastia o marcapasos, reemplazo de válvula o trasplante de corazón?</label>
                <select
                    className="form-control myInput"
                    name='cirugia_corazon'
                    defaultValue={state.cirugia_corazon}
                    onChange={setInfo}
                    placeholder='¿Alguna vez ha tenido una cirugía de corazón, angioplastia o marcapasos, reemplazo de válvula o trasplante de corazón?'
                >
                    <option value='' >---Seleccione---</option>
                    <option value='si'>Si</option>
                    <option value='no'>No</option>
                </select>
            </div>

            {/* ¿Tiene un pulso en reposo mayor a 100 latidos por minuto? */}
            <div className='col-12'>
                <label className="control-label pt-2">¿Tiene un pulso en reposo mayor a 100 latidos por minuto?</label>
                <select
                    className="form-control myInput"
                    name='pulso_mayor_100'
                    defaultValue={state.pulso_mayor_100}
                    onChange={setInfo}
                    placeholder='¿Tiene un pulso en reposo mayor a 100 latidos por minuto?'
                >
                    <option value='' >---Seleccione---</option>
                    <option value='si'>Si</option>
                    <option value='no'>No</option>
                </select>
            </div>

            {/* ¿Tiene artritis, problemas de espalda, cadera / rodilla / coyunturas / dolor o cualquier otra afección ósea o articular que podría agravarse o empeorar con la prueba de capacidad de trabajo? */}
            <div className='col-12'>
                <label className="control-label pt-2">¿Tiene artritis, problemas de espalda, cadera / rodilla / coyunturas / dolor o cualquier otra afección ósea o articular que podría agravarse o empeorar con la prueba de capacidad de trabajo?</label>
                <select
                    className="form-control myInput"
                    name='problemas_afeccion_osea'
                    defaultValue={state.problemas_afeccion_osea}
                    onChange={setInfo}
                    placeholder='¿Tiene artritis, problemas de espalda, cadera / rodilla / coyunturas / dolor o cualquier otra afección ósea o articular que podría agravarse o empeorar con la prueba de capacidad de trabajo?'
                >
                    <option value='' >---Seleccione---</option>
                    <option value='si'>Si</option>
                    <option value='no'>No</option>
                </select>
            </div>

            {/* ¿Tiene usted experiencia personal o consejos del médico de cualquier otra razón médica o física que le prohibiría tomar el examen de capacidad de trabajo? */}
            <div className='col-12'>
                <label className="control-label pt-2">¿Tiene usted experiencia personal o consejos del médico de cualquier otra razón médica o física que le prohibiría tomar el examen de capacidad de trabajo?</label>
                <select
                    className="form-control myInput"
                    name='experiencia_personal_consejos'
                    defaultValue={state.experiencia_personal_consejos}
                    onChange={setInfo}
                    placeholder='¿Tiene usted experiencia personal o consejos del médico de cualquier otra razón médica o física que le prohibiría tomar el examen de capacidad de trabajo?'
                >
                    <option value='' >---Seleccione---</option>
                    <option value='si'>Si</option>
                    <option value='no'>No</option>
                </select>
            </div>

            {/* ¿Su médico personal le recomendó no realizar la prueba de trabajo arduo debido a asma, diabetes, epilepsia o colesterol elevado o una hernia? */}
            <div className='col-12'>
                <label className="control-label pt-2">¿Su médico personal le recomendó no realizar la prueba de trabajo arduo debido a asma, diabetes, epilepsia o colesterol elevado o una hernia?</label>
                <select
                    className="form-control myInput"
                    name='medico_personal_recomendo'
                    defaultValue={state.medico_personal_recomendo}
                    onChange={setInfo}
                    placeholder='¿Su médico personal le recomendó no realizar la prueba de trabajo arduo debido a asma, diabetes, epilepsia o colesterol elevado o una hernia?'
                >
                    <option value='' >---Seleccione---</option>
                    <option value='si'>Si</option>
                    <option value='no'>No</option>
                </select>
            </div>

            {/* Autoevaluación de salud (formato A) */}
            <div className='col-12'>
                <label className="control-label pt-2">Autoevaluación de salud (formato A)</label>
                <input
                    className="form-control myInput"
                    name='autoevaluacion_salud'
                    value={state.autoevaluacion_salud}
                    onChange={setInfo}
                    placeholder='Ingrese Autoevaluación de salud (formato A...'
                />
            </div>

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

export default S2;