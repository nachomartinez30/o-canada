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
                    type=''
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
                    type=''
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
                    type=''
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
                    type=''
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
                    type=''
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
                    type=''
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
                    type=''
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
                    type=''
                    onChange={setInfo}
                    placeholder='¿Ha experimentado dificultad para respirar, mareos, desmayos o pérdida del conocimiento?'
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
                    type=''
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
                    type=''
                    onChange={setInfo}
                    placeholder='¿Tiene una presión arterial sistólica mayor que 140 o diastólica mayor que 90?'
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
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Autoevaluación de salud (formato A...'
                />
            </div>
        </div>
    );
}

export default S2;