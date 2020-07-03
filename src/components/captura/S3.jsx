import React from 'react'
import ToMayus from '../../helpers/ToMayus'
import SelectSexo from '../../singles/SelectSexo'
import AlertaSiguiente from '../../singles/AlertaSiguiente'
import diferenciaFechaDias from '../../helpers/diferenciaFechaDias'

const S3 = (props) => {
    const { state, setState, checkData, files, setStateFiles } = props

    const setInfo = (input) => {
        if (input.target.name === 'altura') {
            /* TRANSFORMACION A ENTERO */
            input.target.value = parseInt(input.target.value)
        }
        if (input.target.value < 0) {
            input.target.value = Math.abs(input.target.value)
        }
        if (input.target.name === "cert_toxicologico" || input.target.name === "cert_medico") {
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

    const calculoIMC = () => {
        const { altura, peso } = state

        if (altura && peso) {
            const alturaM = altura / 100;
            const imc = peso / Math.pow(alturaM, 2)
            setState({
                ...state,
                imc,
            })
        }

    }

    const revisarFormulario = () => {
        const { imc, fecha_cert_toxicologico, fecha_cert_medico, padece_enfermedad,
            requiere_medicamentos_perm, experimento_dolor_pecho, experimento_dificultad_respirar,
            presion_arterial_sistolica_diastolica, enfermedad_cardiaca, cirugia_corazon,
            pulso_mayor_100, problemas_afeccion_osea, experiencia_personal_consejos, medico_personal_recomendo
        } = state
        /* IMC mayor a 30 */
        if (imc >= 30) {
            setState({
                ...state,
                rechazo: true,
                motivo_rechazo: 'imc mayo 30'
            })
        } else {
            /* certificado toxicologico mayor a 15 dias */
            const dif_cert_tox = diferenciaFechaDias(fecha_cert_toxicologico)

            if (dif_cert_tox > 15) {
                setState({
                    ...state,
                    rechazo: true,
                    motivo_rechazo: 'certificado toxicológico excede los 15 dias'
                })
            } else {
                /* Certificado medico mayor a 1 mes */
                const dif_cert_med = diferenciaFechaDias(fecha_cert_medico)
                if (dif_cert_med > 31) {
                    setState({
                        ...state,
                        rechazo: true,
                        motivo_rechazo: 'certificado médico excede 1 mes'
                    })
                } else {
                    if (
                        padece_enfermedad === '1' || requiere_medicamentos_perm === '1' ||
                        experimento_dolor_pecho === '1' || experimento_dificultad_respirar === '1' ||
                        presion_arterial_sistolica_diastolica === '1' ||
                        enfermedad_cardiaca === '1' || cirugia_corazon === '1' ||
                        pulso_mayor_100 === '1' || problemas_afeccion_osea === '1' ||
                        experiencia_personal_consejos === '1' || medico_personal_recomendo === '1'
                    ) {
                        setState({
                            ...state,
                            rechazo: true,
                            motivo_rechazo: 'problemas de salud'
                        })
                    } else {
                        setState({
                            ...state,
                            rechazo: false,
                            motivo_rechazo: null
                        })
                    }
                }
            }
        }
    }



    return (
        <div className='row body_wrap'>

            {/* Sexo TODO: cambiar */}
            <div className='col-12 col-md-3'>
                <label className="control-label pt-2">Sexo</label>
                <SelectSexo
                    className="form-control myInput"
                    name='sexo'
                    defaultValue={state.sexo}
                    onChange={setInfo}
                    onBlur={revisarFormulario}
                    placeholder='Ingrese Sexo...'
                />
            </div>
            {/* Altura (centímetros) */}
            <div className='col-12 col-md-3'>
                <label className="control-label pt-2">Altura (centímetros)</label>
                <input
                    className="form-control myInput"
                    name='altura'
                    value={state.altura}
                    type='number'
                    step='0'
                    min={1}
                    onBlur={calculoIMC}
                    // onInput={(input) => Math.abs(input.target.value)}
                    onChange={setInfo}
                    placeholder='Ingrese Altura (cm)...'
                />
            </div>

            {/* Peso (kilogramos) */}
            <div className='col-6 col-md-3'>
                <label className="control-label pt-2">Peso (kilogramos)</label>
                <input
                    className="form-control myInput"
                    name='peso'
                    value={state.peso}
                    type='number'
                    min={0}
                    onBlur={calculoIMC}
                    // onInput={(input)=>input.target.value}
                    onChange={setInfo}
                    placeholder='Ingrese Peso (kg)...'
                />
            </div>

            {/* IMC */}
            <div className='col-6 col-md-3'>
                <label className="control-label pt-2">IMC</label>
                <input
                    disabled
                    name='imc'
                    value={state.imc}
                    className="form-control myInput"
                    onChange={setInfo}
                    onBlur={revisarFormulario}
                    placeholder='IMC...'
                />
            </div>

            {/* Grupo Sanguíneo */}
            <div className='col-6 col-md-4'>
                <label className="control-label pt-2">Grupo Sanguíneo</label>
                <select
                    className="form-control myInput"
                    name='grupo_sanguineo'
                    defaultValue={state.grupo_sanguineo}
                    maxLength='6'
                    onChangeCapture={ToMayus}
                    onChange={setInfo}
                    onBlur={revisarFormulario}
                    placeholder='Ingrese Grupo Sanguíneo...'
                >
                    <option value=''>---Seleccione---</option>
                    <option value='O RH-'>O RH-</option>
                    <option value='O RH+'>O RH+</option>
                    <option value='A RH-'>A RH-</option>
                    <option value='A RH+'>A RH+</option>
                    <option value='B RH-'>B RH-</option>
                    <option value='B RH+'>B RH+</option>
                    <option value='AB RH-'>AB RH-</option>
                    <option value='AB RH+'>AB RH+</option>
                </select>
            </div>

            {/* Certificado toxicológico */}
            <div className='col-12 col-md-4'>
                <label className="control-label pt-2">Certificado toxicológico</label>
                <input
                    className="form-control myInput"
                    name='cert_toxicologico'
                    // value={state.cert_toxicologico}
                    type='file'
                    accept="application/pdf"
                    onChange={setInfo}
                    onBlur={revisarFormulario}
                    placeholder='Ingrese Certificado toxicológico...'
                />
            </div>

            {/* Certificado toxicológico Fecha */}
            <div className='col-12 col-md-4'>
                <label className="control-label pt-2">Certificado toxicológico Fecha</label>
                <input
                    className="form-control myInput"
                    name='fecha_cert_toxicologico'
                    value={state.fecha_cert_toxicologico}
                    type='date'
                    onChange={setInfo}
                    onBlur={revisarFormulario}
                    placeholder='Ingrese Certificado toxicológico Fecha...'
                />
            </div>

            {/* Certificado médico */}
            <div className='col-12 col-md-6'>
                <label className="control-label pt-2">Certificado médico</label>
                <input
                    className="form-control myInput"
                    name='cert_medico'
                    // value={state.cert_medico}
                    type='file'
                    accept="application/pdf"
                    onChange={setInfo}
                    onBlur={revisarFormulario}
                    placeholder='Ingrese Certificado médico...'
                />
            </div>

            {/* Certificado médico Fecha */}
            <div className='col-12 col-md-6'>
                <label className="control-label pt-2">Certificado médico Fecha</label>
                <input
                    className="form-control myInput"
                    name='fecha_cert_medico'
                    value={state.fecha_cert_medico}
                    type='date'
                    onChange={setInfo}
                    onBlur={revisarFormulario}
                    placeholder='Ingrese Certificado médico Fecha...'
                />
            </div>

            {/* ¿Padece alguna enfermedad? */}
            <div className='col-12 col-md-5'>
                <label className="control-label pt-2">¿Padece alguna enfermedad?</label>
                <select
                    className="form-control myInput"
                    name='padece_enfermedad'
                    defaultValue={state.padece_enfermedad}
                    onChange={setInfo}
                    onBlur={revisarFormulario}
                    placeholder='¿Padece alguna enfermedad?'
                >
                    <option value='' >---Seleccione---</option>
                    <option value={1}>Si</option>
                    <option value={0}>No</option>
                </select>
            </div>

            {/* ¿Qué enfermedad padece? */}
            <div className='col-12 col-md-7'>
                <label className="control-label pt-2">¿Qué enfermedad padece?</label>
                <input
                    className="form-control myInput"
                    name='que_enfermedad'
                    onChangeCapture={ToMayus}
                    value={state.que_enfermedad}
                    onChange={setInfo}
                    onBlur={revisarFormulario}
                    placeholder='Qué enfermedad padece'
                />
            </div>

            {/* ¿Requiere medicamentos de manera permanente? */}
            <div className='col-12 col-md-5'>
                <label className="control-label pt-2">¿Requiere medicamentos de manera permanente?</label>
                <select
                    className="form-control myInput"
                    name='requiere_medicamentos_perm'
                    defaultValue={state.requiere_medicamentos_perm}
                    onChange={setInfo}
                    onBlur={revisarFormulario}
                    placeholder='¿Requiere medicamentos de manera permanente?'
                >
                    <option value='' >---Seleccione---</option>
                    <option value={1}>Si</option>
                    <option value={0}>No</option>
                </select>
            </div>

            {/* ¿Requiere medicamentos de manera permanente? */}
            <div className='col-12 col-md-7'>
                <label className="control-label pt-2">¿Qué medicamentos requiere de manera permanente?</label>
                <input
                    className="form-control myInput"
                    name='que_medicamentos'
                    value={state.que_medicamentos}
                    onChange={setInfo}
                    onChangeCapture={ToMayus}
                    onBlur={revisarFormulario}
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
                    onBlur={revisarFormulario}
                    placeholder='¿Experimentó dolor, incomodidad o presión en el pecho?'
                >
                    <option value='' >---Seleccione---</option>
                    <option value={1}>Si</option>
                    <option value={0}>No</option>
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
                    onBlur={revisarFormulario}
                    placeholder='¿Ha experimentado dificultad para respirar, mareos, desmayos o pérdida del conocimiento?'
                >
                    <option value=''>---Seleccione---</option>
                    <option value={1}>Si</option>
                    <option value={0}>No</option>
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
                    onBlur={revisarFormulario}
                    placeholder='¿Tiene una presión arterial sistólica mayor que 140 o diastólica mayor que 90?'
                >
                    <option value='' >---Seleccione---</option>
                    <option value={1}>Si</option>
                    <option value={0}>No</option>
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
                    onBlur={revisarFormulario}
                    placeholder='¿Alguna vez le han diagnosticado o tratado alguna enfermedad cardíaca, soplo cardíaco, dolor en el pecho, arritmias o ataque cardíaco?'
                >
                    <option value='' >---Seleccione---</option>
                    <option value={1}>Si</option>
                    <option value={0}>No</option>
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
                    onBlur={revisarFormulario}
                    placeholder='¿Alguna vez ha tenido una cirugía de corazón, angioplastia o marcapasos, reemplazo de válvula o trasplante de corazón?'
                >
                    <option value='' >---Seleccione---</option>
                    <option value={1}>Si</option>
                    <option value={0}>No</option>
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
                    onBlur={revisarFormulario}
                    placeholder='¿Tiene un pulso en reposo mayor a 100 latidos por minuto?'
                >
                    <option value='' >---Seleccione---</option>
                    <option value={1}>Si</option>
                    <option value={0}>No</option>
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
                    onBlur={revisarFormulario}
                    placeholder='¿Tiene artritis, problemas de espalda, cadera / rodilla / coyunturas / dolor o cualquier otra afección ósea o articular que podría agravarse o empeorar con la prueba de capacidad de trabajo?'
                >
                    <option value='' >---Seleccione---</option>
                    <option value={1}>Si</option>
                    <option value={0}>No</option>
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
                    onBlur={revisarFormulario}
                    placeholder='¿Tiene usted experiencia personal o consejos del médico de cualquier otra razón médica o física que le prohibiría realizar la prueba de la mochila nivel arduo?'
                >
                    <option value='' >---Seleccione---</option>
                    <option value={1}>Si</option>
                    <option value={0}>No</option>
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
                    onBlur={revisarFormulario}
                    placeholder='¿Su médico personal le recomendó no realizar la prueba de trabajo arduo debido a asma, diabetes, epilepsia o colesterol elevado o una hernia?'
                >
                    <option value='' >---Seleccione---</option>
                    <option value={1}>Si</option>
                    <option value={0}>No</option>
                </select>
            </div>



            {/* BTN Continuar */}
            <div className='col-12 pt-5 btn-margin'>
                <button
                    className='btn btn-primary'
                    // onClick={revisarFormulario}
                    onClick={() => AlertaSiguiente("Si continúa, no será posible volver a esta seccion", checkData)}
                >Continuar</button>
            </div>
        </div>
    );
}

export default S3;