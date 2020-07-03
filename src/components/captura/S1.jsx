import React, { useState, useEffect } from 'react'
import ToMayus from "../../helpers/ToMayus";
import curpValida from "../../helpers/curpValida";
import InputCURP from "../../singles/InputCURP";
import InputRFC from "../../singles/InputRFC";
import moment from "moment";
import extractInfoCurp from '../../helpers/extractInfoCurp';
import diferenciaFechasAnios from '../../helpers/diferenciaFechasAnios';
import SelectEstados from '../../singles/SelectEstados';
import axios from 'axios'
import AlertError from '../../singles/AlertError';
import AlertaSiguiente from '../../singles/AlertaSiguiente'
import emailValid from '../../helpers/emailValid';
import InputNumber from '../../singles/InputNumber';


const S1 = (props) => {

    const { state, setState, checkData, files, setStateFiles } = props
    const [municipios, setMunicipios] = useState([])
    const [preview, setPreview] = useState('')
    const [enter, setEnter] = useState(false)
    const [puedeContinuar, setPuedeContinuar] = useState(false)

    /* validaciones */
    const [correoValido, setCorreoValido] = useState()
    const [correBenefValido, setCorreBenefValido] = useState()
    const [curpCorrecto, setCurpCorrecto] = useState(false)
    const [rfcCorrecto, setRfcCorrecto] = useState(false)


    useEffect(() => {
        fillInfoCurp()
        setPuedeContinuar((correoValido && correBenefValido && rfcCorrecto) ? false : true);
        setEnter(true)
    }, [enter])


    const setInfo = (input) => {
        /* setea al state las variables */
        if (input.target.value < 0) {
            input.target.value = Math.abs(input.target.value)
        }
        if (input.target.name === 'fotografia' || input.target.name === 'curp_archivo') {
            setPreview(URL.createObjectURL(input.target.files[0]))
            setStateFiles({
                ...files,
                [input.target.name + '_fl']: input.target.files,
                [input.target.name]: input.target.value
            })
        } else {
            setState({
                ...state,
                [input.target.name]: input.target.value
            })
        }
    }

    const checkEdad = (input) => {
        const fecha = input.target.value
        const fecha_moment = moment(fecha).format("YYYY-MM-DD")
        const anios = diferenciaFechasAnios(fecha_moment);
        /* MENOR DE EDAD */
        if (anios < 21) {
            setState({
                ...state,
                rechazo: true,
                motivo_rechazo: 'candidato menor de edad'
            })
        }
    }

    const fillInfoCurp = () => {
        /* Extrae la informacion de la CURP y autocompleta fechga de nacimiento y sexo  */
        const dataExtracted = (typeof state.curp != 'undefined') ? extractInfoCurp(state.curp) : ''
        // const fecha = moment(`${dataExtracted.anio}-${dataExtracted.mes}-${dataExtracted.dia}`, "YY-MM-DD").format("YYYY-MM-DD")
        // const anios = diferenciaFechasAnios(fecha);

        // if (anios < 21) {
        //     /* MENOR DE EDAD */
        //     setState({
        //         ...state,
        //         fecha_nacimiento: fecha,
        //         sexo: (dataExtracted.sexo === 'H') ? 1 : 2,
        //         rechazo: true,
        //         motivo_rechazo: 'candidato menor de edad'
        //     })
        // } else {
        setState({
            ...state,
            // fecha_nacimiento: fecha,
            sexo: (dataExtracted.sexo === 'H') ? 1 : 2,
            rechazo: false,
            motivo_rechazo: null
        })
        // }
    }

    const getMunicipios = async (input) => {
        const cve_enitidad = input.target.value
        const url = `http://187.218.230.37/siiac_ws_app/public/api/inegi/municipios?paginate%5Bpage%5D=1&paginate%5BselectQuery%5D=null&paginate%5BbyColumn%5D=true&paginate%5Blimit%5D=600&paginate%5BorderBy%5D=nom_mun&paginate%5Bascending%5D=1&paginate%5BsQ%5D%5B0%5D%5BopT%5D=con&paginate%5BsQ%5D%5B0%5D%5Bop%5D=and&paginate%5BsQ%5D%5B0%5D%5BsQ%5D%5B0%5D%5BopT%5D=com&paginate%5BsQ%5D%5B0%5D%5BsQ%5D%5B0%5D%5Bop%5D=%3D&paginate%5BsQ%5D%5B0%5D%5BsQ%5D%5B0%5D%5BsQ%5D%5Bcve_ent%5D=${cve_enitidad}`
        try {
            const resp = await axios.get(url);
            if (resp.status === 200) {
                setMunicipios(resp.data.data)
            }
        } catch (error) {
            AlertError('Error', error)
        }
    }



    return (
        <div className='row body_wrap'>

            {/* FOTOGRAFIA */}
            <div className='col-12 col-md-6'>
                <label className="control-label pt-2">Fotografia</label>
                <input
                    className={`form-control ${(state.fotografia) ? null : 'myInput'}`}
                    name='fotografia'
                    type='file'
                    accept="image/png,image/jpeg"
                    onChange={setInfo}
                    placeholder='Ingrese Nombre(s)...'
                />
            </div>
            <div className='col-12 col-md-6 imagen'>
                {preview && <img src={preview} alt="Fotografía" width={200} height={200} />}
            </div>
            {/* Apellido Paterno */}
            <div className='col-6'>
                <label className="control-label pt-2">Apellido Paterno</label>
                <input
                    className={`form-control ${(state.apellido_paterno) ? null : 'myInput'}`}
                    name='apellido_paterno'
                    value={state.apellido_paterno}
                    onChange={setInfo}
                    onChangeCapture={ToMayus}
                    placeholder='Ingrese Apellido Paterno...'
                />
            </div>

            {/* Apellido Materno */}
            <div className='col-6'>
                <label className="control-label pt-2">Apellido Materno</label>
                <input
                    className={`form-control ${(state.apellido_materno) ? null : 'myInput'}`}
                    name='apellido_materno'
                    value={state.apellido_materno}
                    onChange={setInfo}
                    onChangeCapture={ToMayus}
                    placeholder='Ingrese Apellido Materno...'
                />
            </div>
            {/* Nombre */}
            <div className='col-12'>
                <label className="control-label pt-2">Nombre (s)</label>
                <input
                    className={`form-control ${(state.nombres) ? null : 'myInput'}`}
                    name='nombres'
                    value={state.nombres}
                    onChange={setInfo}
                    onChangeCapture={ToMayus}
                    placeholder='Ingrese Nombre(s)...'
                />
            </div>

            {/* CURP */}
            <div className='col-12 col-md-6'
                onBlur={fillInfoCurp}
            >
                <label className="control-label pt-2">CURP</label>
                <InputCURP
                    className={`form-control ${(state.curp) ? null : 'myInput'}`}
                    name='curp'
                    defaultValue={state.curp}
                    onChange={setInfo}
                    curp={state.curp}
                    onKeyPressCapture={ToMayus}
                    onBlur={curpValida}
                    placeholder='Ingrese CURP...'
                    setCorrect={setCurpCorrecto}
                    disabled
                />
            </div>
            {/* CURP File */}
            <div className='col-12 col-md-4'>
                <label className="control-label pt-2">Documento CURP</label>
                <input
                    className={`form-control ${(state.curp_archivo) ? null : 'myInput'}`}
                    name='curp_archivo'
                    type='file'
                    accept="application/pdf"
                    onChange={setInfo}

                    placeholder='Ingrese Fecha de Nacimiento...'
                />
            </div>

            <div className='col-12 col-md-2 pt-4' style={{ alignItems: 'center', display: 'flex' }}>
                <a
                    className="btn btn-danger py-2 px-4 btnSizeFree"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.gob.mx/curp/"
                >
                    Consultar CURP
                    </a>
            </div>
            {/* Fecha de Nacimiento */}
            <div className='col-12 col-md-6'>
                <label className="control-label pt-2">Fecha de Nacimiento</label>
                <input
                    // disabled
                    className={`form-control ${(state.fecha_nacimiento) ? null : 'myInput'}`}
                    name='fecha_nacimiento'
                    value={state.fecha_nacimiento}
                    type='date'
                    onChange={setInfo}
                    onBlur={checkEdad}
                    placeholder='Ingrese Fecha de Nacimiento...'
                />
            </div>
            {/* RFC */}
            <div className='col-12 col-md-6'>
                <label className="control-label pt-2">RFC</label>
                <InputRFC
                    className={`form-control ${(state.rfc) ? null : 'myInput'}`}
                    name='rfc'
                    defaultValue={state.rfc}
                    rfc={state.rfc}
                    onKeyPressCapture={ToMayus}
                    onChange={setInfo}
                    correct={rfcCorrecto}
                    setCorrect={setRfcCorrecto}
                    placeholder='Ingrese RFC...'
                />
            </div>

            <div className='col-12 col-md-6'>
                <label className="control-label pt-2">Region</label>
                <select
                    className={`form-control ${(state.region) ? null : 'myInput'}`}
                    name='region'
                    value={state.region}
                    onChange={setInfo}
                    placeholder='Ingrese Region...'
                >
                    <option value=''>---Seleccione---</option>
                    <option value={1}>Noroeste</option>
                    <option value={2}>Norte</option>
                    <option value={3}>Noreste</option>
                    <option value={4}>Occidente</option>
                    <option value={5}>Centro</option>
                    <option value={6}>Sureste</option>
                </select>
            </div>
            {/* Estado */}
            <div className='col-12 col-md-6'>
                {/* TODO: select Cat-estado */}
                <label className="control-label pt-2">Estado</label>
                <SelectEstados
                    className={`form-control ${(state.estado) ? null : 'myInput'}`}
                    name='estado'
                    value={state.estado}
                    onBlur={setInfo}
                    onChange={getMunicipios}
                    placeholder='Ingrese Estado...'
                />
            </div>
            {/* Municipio */}
            <div className='col-12 col-md-6'>
                {/* TODO: select Cat-estado */}
                <label className="control-label pt-2">Municipio</label>
                <select
                    disabled={(municipios.length <= 0) ? true : false}
                    className={`form-control ${(state.municipio) ? null : 'myInput'}`}
                    name='municipio'
                    value={state.municipio}
                    onChange={setInfo}
                    placeholder='Ingrese Municipio...'
                >
                    <option value=''>---Seleccione---</option>
                    {municipios.map((item) => <option key={item.cve_mun} value={item.cve_mun}>{item.nom_mun}</option>)}
                </select>
            </div>

            {/* Número telefónico para notificaciones */}
            <div className='col-12 col-md-6'>
                <label className="control-label pt-2">Número telefónico para notificaciones</label>
                <input
                    className={`form-control ${(state.numero_telefonico_notificaciones) ? null : 'myInput'}`}
                    name='numero_telefonico_notificaciones'
                    value={state.numero_telefonico_notificaciones}
                    maxLength="10"
                    onChange={setInfo}
                    placeholder='Ingrese Número telefónico para notificaciones...'
                />
            </div>

            {/* Correo electrónico */}
            <div className='col-12 col-md-8'>
                <label className="control-label pt-2">Correo electrónico</label>
                <input
                    className={`form-control ${(state.correo_electronico) ? null : 'myInput'}`}
                    name='correo_electronico'
                    value={state.correo_electronico}
                    type='email'
                    onBlur={(input) => {
                        if (input.target.value) {
                            setCorreoValido(emailValid(input.target.value))
                        }
                    }}
                    onChange={setInfo}
                    placeholder='Ingrese Correo electrónico...'
                />
                {correoValido === false &&
                    <div className="col-sm-12">
                        <small className="text-danger">
                            El correo no es valido.
                    </small>
                    </div>
                }
            </div>

            {/* Posicion Candidato */}
            <div className='col-12 col-md-4'>
                <label className="control-label pt-2">Posición a la que es candidato:</label>
                <select
                    className={`form-control ${(state.posicion_candidato) ? null : 'myInput'}`}
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

            {/* Dependencia */}
            <div className='col-12 col-md-6'>
                <label className="control-label pt-2">Dependencia (No usar acronimos)</label>
                <input
                    className={`form-control ${(state.dependencia) ? null : 'myInput'}`}
                    name='dependencia'
                    value={state.dependencia}
                    onChange={setInfo}
                    onChangeCapture={ToMayus}
                    placeholder='Ingrese Dependencia...'
                />
            </div>

            {/* Tipo de dependencia */}
            <div className='col-12 col-md-6'>
                <label className="control-label pt-2">Tipo de dependencia</label>
                <select
                    className={`form-control ${(state.tipo_dependencia) ? null : 'myInput'}`}
                    name='tipo_dependencia'
                    value={state.tipo_dependencia}
                    onChange={setInfo}
                    placeholder='Ingrese Tipo de dependencia...'
                >
                    <option value=''>---Seleccione---</option>
                    <option value='federal'>Federal</option>
                    <option value='estatal'>Estatal</option>
                    <option value='municipal'>Municipal</option>
                    <option value='sector_social'>Sector Social</option>
                    <option value='privada'>Privada</option>
                </select>
            </div>

            {/* Fecha de ingreso a la dependencia */}
            <div className='col-12 col-md-4'>
                <label className="control-label pt-2">Fecha de ingreso a la dependencia</label>
                <input
                    className={`form-control ${(state.fecha_ingreso_dependencia) ? null : 'myInput'}`}
                    name='fecha_ingreso_dependencia'
                    value={state.fecha_ingreso_dependencia}
                    type='date'
                    onChange={setInfo}
                    placeholder='Ingrese Fecha de ingreso a la dependencia...'
                />
            </div>

            {/* Años de experiencia en actividades de manejo del fuego (comprobables) */}
            <div className='col-12 col-md-8'>
                <label className="control-label pt-2">Años de experiencia en actividades de manejo del fuego (comprobables)</label>
                <InputNumber
                    className={`form-control ${(state.anios_experiencia) ? null : 'myInput'}`}
                    name='anios_experiencia'
                    value={state.anios_experiencia}
                    limitLength={2}
                    min={0}
                    type='number'
                    onChange={setInfo}
                    placeholder='Ingrese Años de experiencia en actividades de manejo del fuego comprobables...'
                />
            </div>
            {/* Puesto dependencia */}
            <div className='col-12 col-md-6'>
                <label className="control-label pt-2">Puesto en su dependencia</label>
                <input
                    className={`form-control ${(state.puesto_en_dependencia) ? null : 'myInput'}`}
                    name='puesto_en_dependencia'
                    value={state.puesto_en_dependencia}
                    onChange={setInfo}
                    onChangeCapture={ToMayus}
                    placeholder='Ingrese su puesto en la dependencia...'
                />
            </div>
            {/* Funciones en dependencia */}
            <div className='col-12 col-md-6'>
                <label className="control-label pt-2">Funciones en su dependencia</label>
                <select
                    className={`form-control ${(state.funciones_dependencia) ? null : 'myInput'}`}
                    name='funciones_dependencia'
                    value={state.funciones_dependencia}
                    onChange={setInfo}
                    placeholder='Ingrese su puesto en la dependencia...'
                >
                    <option value=''>---Seleccione---</option>
                    <option value='operaciones'>Operaciones</option>
                    <option value='planificacion'>Planificación</option>
                    <option value='logostica'>Logística</option>
                    <option value='finanzas'>Finanzas</option>
                </select>
            </div>

            {/* Nombre Beneficiario */}
            <div className='col-12'>
                <label className="control-label pt-2">Nombre de Beneficiario</label>
                <input
                    className={`form-control ${(state.nombre_beneficiario) ? null : 'myInput'}`}
                    name='nombre_beneficiario'
                    value={state.nombre_beneficiario}
                    onChange={setInfo}
                    onChangeCapture={ToMayus}
                    placeholder='Ingrese nombre de Beneficiario...'
                />
            </div>

            {/* Telefono Beneficiario */}
            <div className='col-12 col-md-6'>
                <label className="control-label pt-2">Teléfono del Beneficiario</label>
                <InputNumber
                    className={`form-control ${(state.telefono_beneficiario) ? null : 'myInput'}`}
                    name='telefono_beneficiario'
                    limitLength={10}
                    min={0}
                    type='number'
                    value={state.telefono_beneficiario}
                    onChange={setInfo}
                    placeholder='Ingrese Teléfono del Beneficiario...'
                />
            </div>

            {/* Correo Beneficiario */}
            <div className='col-12 col-md-6'>
                <label className="control-label pt-2">Correo electrónico de Beneficiario</label>
                <input
                    className={`form-control ${(state.correo_beneficiario) ? null : 'myInput'}`}
                    name='correo_beneficiario'
                    value={state.correo_beneficiario}
                    onChange={setInfo}
                    onBlur={(input) => {
                        if (input.target.value) {
                            setCorreBenefValido(emailValid(input.target.value))
                        }
                    }}
                    placeholder='Ingrese Correo electrónico de Beneficiario...'
                />
                {correBenefValido === false &&
                    <div className="col-sm-12">
                        <small className="text-danger">
                            El correo no es valido.
                        </small>
                    </div>
                }
            </div>

            {/* BTN Continuar */}
            <div className='col-12 pt-5 btn-margin'>
                <button
                    // disabled={(correoValido && correBenefValido && rfcCorrecto) ? false : true}
                    className='btn btn-primary'
                    onClick={() => AlertaSiguiente("Si continúa, no será posible volver a esta seccion", checkData)}
                >Continuar</button>
            </div>
        </div>
    );
}
export default S1;