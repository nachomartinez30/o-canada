import React from 'react'
import SelectSiNo from '../singles/SelectSiNo';
import SelectSexo from '../singles/SelectSexo';
import ToMayus from "../helpers/ToMayus";
import curpValida from "../helpers/curpValida";
import InputCURP from "../singles/InputCURP";
import InputRFC from "../singles/InputRFC";


const S1 = (props) => {

    const { state, setState, checkData } = props

    const setInfo = (input) => {
        /* setea al state las variables */
        setState({
            ...state,
            [input.target.name]: input.target.value
        })
    }

    const calculoIMC = () => {
        const { altura, peso } = state
        if (altura && peso) {
            const alturaM = altura / 100;
            const imc = peso / Math.pow(alturaM, 2)

            setState({
                ...state,
                imc,
                rechazo: true,
                motivo_rechazo: 'imc mayo 30'
            })
            if (imc > 30) {
                setState({
                    ...state,
                    imc,
                    rechazo: true,
                    motivo_rechazo: 'imc mayo 30'
                })

            } else {
                setState({
                    ...state,
                    imc,
                    rechazo: false,
                    motivo_rechazo: null
                })
            }
        }

    }

    return (
        <div className='row body_wrap'>
            {/* FOTOGRAFIA */}

            <div className='col-12'>
                <label className="control-label pt-2">Fotografia</label>
                <input
                    className="form-control myInput"
                    name='fotografia'
                    // value={state.fotografia}
                    type='file'
                    onChange={setInfo}
                    placeholder='Ingrese Nombre(s)...'
                />
            </div>
            <div className='col-12'>
                <label className="control-label pt-2">Nombre (s)</label>
                <input
                    className="form-control myInput"
                    name='nombres'
                    value={state.nombres}
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Nombre(s)...'
                />
            </div>

            {/* Apellido Paterno */}
            <div className='col-6'>
                <label className="control-label pt-2">Apellido Paterno</label>
                <input
                    className="form-control myInput"
                    name='apellido_paterno'
                    value={state.apellido_paterno}
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Apellido Paterno...'
                />
            </div>

            {/* Apellido Materno */}
            <div className='col-6'>
                <label className="control-label pt-2">Apellido Materno</label>
                <input
                    className="form-control myInput"
                    name='apellido_materno'
                    value={state.apellido_materno}
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Apellido Materno...'
                />
            </div>

            {/* Fecha de Nacimiento */}
            <div className='col-4'>
                <label className="control-label pt-2">Fecha de Nacimiento</label>
                <input
                    className="form-control myInput"
                    name='fecha_nacimiento'
                    value={state.fecha_nacimiento}
                    type='date'
                    onChange={setInfo}
                    placeholder='Ingrese Fecha de Nacimiento...'
                />
            </div>

            {/* CURP */}
            <div className='col-8'>
                <label className="control-label pt-2">CURP</label>
                <InputCURP
                    className="form-control myInput"
                    name='curp'
                    defaultValue={state.curp}
                    type=''
                    onChange={setInfo}
                    curp={state.curp}
                    onKeyPressCapture={ToMayus}
                    onBlur={curpValida}
                    placeholder='Ingrese CURP...'
                />
            </div>

            {/* RFC */}
            <div className='col-6'>
                <label className="control-label pt-2">RFC</label>
                <InputRFC
                    className="form-control myInput"
                    name='rfc'
                    defaultValue={state.rfc}
                    rfc={state.rfc}
                    type=''
                    onKeyPressCapture={ToMayus}
                    onChange={setInfo}
                    placeholder='Ingrese RFC...'
                />
            </div>

            {/* Estado */}
            <div className='col-6'>

                {/* TODO: select Cat-estado */}
                <label className="control-label pt-2">Estado</label>
                <input
                    className="form-control myInput"
                    name='estado'
                    value={state.estado}
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Estado...'
                />
            </div>
            {/* Municipio */}
            <div className='col-6'>

                {/* TODO: select Cat-estado */}
                <label className="control-label pt-2">Municipio</label>
                <input
                    className="form-control myInput"
                    name='municipio'
                    value={state.municipio}
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Municipio...'
                />
            </div>

            {/* Número telefónico para notificaciones */}
            <div className='col-6'>
                <label className="control-label pt-2">Número telefónico para notificaciones</label>
                <input
                    className="form-control myInput"
                    name='numero_telefonico_notificaciones'
                    value={state.numero_telefonico_notificaciones}
                    type='phone'
                    onChange={setInfo}
                    placeholder='Ingrese Número telefónico para notificaciones...'
                />
            </div>

            {/* Correo electrónico */}
            <div className='col-5'>
                <label className="control-label pt-2">Correo electrónico</label>
                <input
                    className="form-control myInput"
                    name='correo_electronico'
                    value={state.correo_electronico}
                    type='email'
                    onChange={setInfo}
                    placeholder='Ingrese Correo electrónico...'
                />
            </div>

            {/* Posicion Candidato */}
            <div className='col-4'>
                <label className="control-label pt-2">Posicion a la que es candidato:</label>
                <select
                    className="form-control myInput"
                    name='posicion_candidato'
                    type=''
                    defaultValue={state.posicion_candidato}
                    onChange={setInfo}
                    placeholder='Posicion a la que es candidato...'
                >
                    <option value='' >---Seleccione---</option>
                    <option value='combatiente'>Combatiente</option>
                    <option value='jefe_de_cuadrilla'>Jefe de Cuadrilla</option>
                    <option value='jefe_de_brigada'>Jefe de Brigada</option>
                    <option value='tecnico'>Técnico</option>
                </select>
            </div>

            {/* Sexo TODO: cambiar */}
            <div className='col-3'>
                <label className="control-label pt-2">Sexo</label>
                <SelectSexo
                    className="form-control myInput"
                    name='sexo'
                    defaultValue={state.sexo}
                    onChange={setInfo}
                    placeholder='Ingrese Sexo...'
                />
            </div>

            {/* Altura (centímetros) */}
            <div className='col-3'>
                <label className="control-label pt-2">Altura (centímetros)</label>
                <input
                    className="form-control myInput"
                    name='altura'
                    value={state.altura}
                    type='number'
                    onBlur={calculoIMC}
                    onChange={setInfo}
                    placeholder='Ingrese Altura (cm)...'
                />
            </div>

            {/* Peso (kilogramos) */}
            <div className='col-3'>
                <label className="control-label pt-2">Peso (kilogramos)</label>
                <input
                    className="form-control myInput"
                    name='peso'
                    value={state.peso}
                    type='number'
                    onBlur={calculoIMC}
                    onChange={setInfo}
                    placeholder='Ingrese Peso (kg)...'
                />
            </div>

            {/* IMC */}
            <div className='col-3'>
                <label className="control-label pt-2">IMC</label>
                <input
                    disabled
                    name='imc'
                    value={state.imc}
                    className="form-control myInput"
                    type=''
                    onChange={setInfo}
                    placeholder='IMC...'
                />
            </div>

            {/* Grupo Sanguíneo */}
            <div className='col-3'>
                <label className="control-label pt-2">Grupo Sanguíneo</label>
                <input
                    className="form-control myInput"
                    name='grupo_sanguineo'
                    value={state.grupo_sanguineo}
                    maxLength='6'
                    onKeyDownCapture={ToMayus}
                    onChange={setInfo}
                    placeholder='Ingrese Grupo Sanguíneo...'
                />
            </div>

            {/* Dependencia */}
            <div className='col-6'>
                <label className="control-label pt-2">Dependencia</label>
                <input
                    className="form-control myInput"
                    name='dependencia'
                    value={state.dependencia}
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Dependencia...'
                />
            </div>

            {/* Tipo de dependencia */}
            <div className='col-6'>
                <label className="control-label pt-2">Tipo de dependencia</label>
                <input
                    className="form-control myInput"
                    name='tipo_dependencia'
                    value={state.tipo_dependencia}
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Tipo de dependencia...'
                />
            </div>

            {/* Fecha de ingreso a la dependencia */}
            <div className='col-4'>
                <label className="control-label pt-2">Fecha de ingreso a la dependencia</label>
                <input
                    className="form-control myInput"
                    name='fecha_ingreso_dependencia'
                    value={state.fecha_ingreso_dependencia}
                    type='date'
                    onChange={setInfo}
                    placeholder='Ingrese Fecha de ingreso a la dependencia...'
                />
            </div>

            {/* Años de experiencia en actividades de manejo del fuego (comprobables) */}
            <div className='col-8'>
                <label className="control-label pt-2">Años de experiencia en actividades de manejo del fuego (comprobables)</label>
                <input
                    className="form-control myInput"
                    name='anios_experiencia'
                    value={state.anios_experiencia}
                    min="1"
                    max="99"
                    type='number'
                    onChange={setInfo}
                    placeholder='Ingrese Años de experiencia en actividades de manejo del fuego (comprobables...'
                />
            </div>

            {/* Nombre Beneficiario */}
            <div className='col-12'>
                <label className="control-label pt-2">Nombre de Beneficiario</label>
                <input
                    className="form-control myInput"
                    name='nombre_beneficiario'
                    value={state.nombre_beneficiario}
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese nombre de Beneficiario...'
                />
            </div>

            {/* Telefono Beneficiario */}
            <div className='col-6'>
                <label className="control-label pt-2">Telefono del Beneficiario</label>
                <input
                    className="form-control myInput"
                    name='telefono_beneficiario'
                    value={state.telefono_beneficiario}
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Telefono del Beneficiario...'
                />
            </div>

            {/* Correo Beneficiario */}
            <div className='col-6'>
                <label className="control-label pt-2">Correo electrónico de Beneficiario</label>
                <input
                    className="form-control myInput"
                    name='correo_beneficiario'
                    value={state.correo_beneficiario}
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Correo electrónico de Beneficiario...'
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
export default S1;