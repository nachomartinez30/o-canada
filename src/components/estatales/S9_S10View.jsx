import React, { useContext, useEffect, useState } from 'react'
import InputNumber from '../../singles/InputNumber'
import calculoIMC from "../../helpers/calculoIMC";
import ToMayus from '../../helpers/ToMayus';
import moment from 'moment'
import { InputGroup } from 'react-bootstrap';
import AlertError from '../../singles/AlertError';
import pruebasFisicasContext from "../../context/pruebas_fisicas/pruebasFisicasContext";
import SelectSiNo from '../../singles/SelectSiNo';
import Axios from 'axios';
import AlertExito from '../../singles/AlertExito';

const S9_S10View = (props) => {
    const API_REQUEST = process.env.REACT_APP_BACKEN_URL
    /* TODO:
        -> si IMC mayor a 29.9 restriccion de campos siguientes y S10, excepto formato apt. fisica
        -> cuenta con equipo despliegue boolean input file archivo soporte
        -> mask IMC step 0.01
    */

    const pruebasContext = useContext(pruebasFisicasContext)

    const [archivos, setArchivos] = useState({
        formato: null,
        formato_epp: null,
        formato_eval_habilidad_uso_mark_III: null,
        constancia_curso_s_211: null
    })

    /* SECCIONES */
    const [sectionGPSMark, setSectionGPSMark] = useState(true)
    const [sectionEPP, setSectionEPP] = useState(true)
    const [sectionPruebaFisica, setSectionPruebaFisica] = useState(true)

    const [evaluaciones, setEvaluaciones] = useState(props.infoCandidato)

    const setInfo = (input) => {
        if (
            input.target.name === 'formato' ||
            input.target.name === 'formato_eval_habilidad_uso_mark_III' ||
            input.target.name === 'constancia_curso_s_211' ||
            input.target.name === 'formato_epp' ||
            input.target.name === 'formato_eval_habilidad_uso_gps'
        ) {
            setArchivos({
                ...archivos,
                [input.target.name]: input.target.files
            })
        } else {
            setEvaluaciones({
                ...evaluaciones,
                [input.target.name]: input.target.value
            })
        }
    }

    const calculoTiempoMax = (asnm) => {
        /* asnm => Altura sobre el nivel del mar */
        if (asnm) {
            if (asnm < 1200) {
                setEvaluaciones({
                    ...evaluaciones,
                    tiempo_req_max_min: 45,
                    tiempo_req_mas_seg: '00'
                });
            }

            if (asnm >= 1200 && asnm <= 1500) {
                setEvaluaciones({
                    ...evaluaciones,
                    tiempo_req_max_min: 45,
                    tiempo_req_mas_seg: 30
                });
            }

            if (asnm > 1500 && asnm <= 1800) {
                setEvaluaciones({
                    ...evaluaciones,
                    tiempo_req_max_min: 45,
                    tiempo_req_mas_seg: 45
                });
            }

            if (asnm > 1800 && asnm <= 2100) {
                setEvaluaciones({
                    ...evaluaciones,
                    tiempo_req_max_min: 46,
                    tiempo_req_mas_seg: '00'
                });
            }

            if (asnm > 2100 && asnm <= 2400) {
                setEvaluaciones({
                    ...evaluaciones,
                    tiempo_req_max_min: 46,
                    tiempo_req_mas_seg: 15
                });
            }

            if (asnm > 2400) {
                setEvaluaciones({
                    ...evaluaciones,
                    tiempo_req_max_min: 46,
                    tiempo_req_mas_seg: 30
                });
            }
        } else {
            setEvaluaciones({
                ...evaluaciones,
                tiempo_req_max_min: '',
                tiempo_req_mas_seg: ''
            })
        }
    }

    const handleEPP = (input) => {
        const presento_equipo = input.target.value
        // const { presento_equipo } = evaluaciones
        if (presento_equipo === '1') {
            setSectionGPSMark(true)
        } else {
            setSectionGPSMark(false)
        }
    }

    const handleASNM = () => {
        const { altura_sobre_niv_mar } = evaluaciones
        calculoTiempoMax(altura_sobre_niv_mar)
    }

    const handleIMC = () => {
        const { altura_verificada, peso_verificado } = evaluaciones
        if (altura_verificada && peso_verificado) {
            const imc = calculoIMC(altura_verificada, peso_verificado)
            if (imc < 29.99) {
                setSectionPruebaFisica(true)
                setEvaluaciones({
                    ...evaluaciones,
                    imc_verificado: imc.toString().slice(0, 5),
                    rechazo: null
                })
            } else {
                /* SET RECHAZO POR IMC */
                setEvaluaciones({
                    ...evaluaciones,
                    imc_verificado: imc.toString().slice(0, 5),
                    rechazo: 'imc verificado mayor a 29.99'
                })
                setSectionPruebaFisica(false)
            }
        }
    }

    const calcResultados = () => {
        const { minutos_prueba_trabajo_arduo, segundos_prueba_trabajo_arduo } = evaluaciones

        if (minutos_prueba_trabajo_arduo && segundos_prueba_trabajo_arduo) {
            const auxPrueba = calificacionPrueba(minutos_prueba_trabajo_arduo, segundos_prueba_trabajo_arduo)
            const rechazo = (auxPrueba === 'SUPERADA') ? null : 'prueba fisica no superada'

            /* SI NO ES RECHAZADO SE ABRE SECCION DE EQUIPO DE PROTECCION */
            if (rechazo) {
                setSectionEPP(false)
            } else {
                setSectionEPP(true)
            }
            setEvaluaciones({
                ...evaluaciones,
                puntuacion_estimada: puntajePrueba(minutos_prueba_trabajo_arduo, segundos_prueba_trabajo_arduo),
                prueba: calificacionPrueba(minutos_prueba_trabajo_arduo, segundos_prueba_trabajo_arduo),
                rechazo: rechazo
            })
        } else {
            setEvaluaciones({
                ...evaluaciones,
                puntuacion_estimada: '',
                prueba: ''
            })
        }
    }

    const puntajePrueba = (minutos, segundos) => {
        const tiempo = moment(`${minutos}:${segundos}`, 'mm:ss')
        const primerCaso = moment(`35:00`, 'mm:ss')
        const segundoCaso = moment(`40:00`, 'mm:ss')
        const tercerCaso = moment(`46:30`, 'mm:ss')


        if (tiempo <= primerCaso) { return '10' }
        if (tiempo > primerCaso || tiempo <= segundoCaso) { return '9.5' }
        if (tiempo > segundoCaso || tiempo <= tercerCaso) { return '9' }
    }

    const calificacionPrueba = (minutos, segundos) => {
        const { tiempo_req_max_min, tiempo_req_mas_seg } = evaluaciones

        const tiempo = moment(`${minutos}:${segundos}`, 'mm:ss')
        // const primerCaso = moment(`35:00`, 'mm:ss')
        // const segundoCaso = moment(`40:00`, 'mm:ss')
        // const tercerCaso = moment(`46:30`, 'mm:ss')

        const tiempoMaxRequerido = moment(`${tiempo_req_max_min}:${tiempo_req_mas_seg}`, 'mm:ss')

        return (tiempo <= tiempoMaxRequerido) ? 'SUPERADA' : 'NO SUPERADA'
    }

    const revisarInformacion = () => {
        const {
            nombre_evaluador, peso_verificado, altura_verificada, imc_verificado, altura_sobre_niv_mar,
            minutos_prueba_trabajo_arduo, segundos_prueba_trabajo_arduo,
            nombre_evaluador_prueba_gps, resultado_eval_presencial_gps,
            nombre_evaluador_prueba_mark_III, resultado_eval_presencial_mark_III,
            presento_constancia_s_211, presento_equipo
        } = evaluaciones

        const { formato, formato_eval_habilidad_uso_gps, formato_eval_habilidad_uso_mark_III, formato_epp } = archivos

        if (!formato) {
            AlertError("Omisión de campo", 'El archivo FORMATO debe ser completado')
            return;
        }
        if (!nombre_evaluador) {
            AlertError("Omisión de campo", 'El campo NOMBRE DEL EVALUADOR debe ser completado')
            return;
        }
        if (!peso_verificado) {
            AlertError("Omisión de campo", 'El campo PESO VERIFICADO debe ser completado')
            return;
        }
        if (!altura_verificada) {
            AlertError("Omisión de campo", 'El campo ALTURA VERIFICADA debe ser completado')
            return;
        }
        if (!imc_verificado) {
            AlertError("Omisión de campo", 'El campo IMC VERIFICADO debe ser completado')
            return;
        }

        if (sectionPruebaFisica) {
            if (!altura_sobre_niv_mar) {
                AlertError("Omisión de campo", 'El campo ALTURA SOBRE NIVEL DEL MAR debe ser completado')
                return;
            }
            if (!minutos_prueba_trabajo_arduo) {
                AlertError("Omisión de campo", 'El campo MINUTOS PRUEBA TRABAJO ARDUO debe ser completado')
                return;
            }
            if (!segundos_prueba_trabajo_arduo) {
                AlertError("Omisión de campo", 'El campo SEGUNDOS PRUEBA TRABAJO ARDUO debe ser completado')
                return;
            }
        }
        if (sectionEPP) {
            if (!presento_equipo) {
                AlertError('ERROR', 'El campo PRESENTO EQUIPO DE PROTECCIÓN debe ser completado ')
                return
            }
            if (!formato_epp) {
                AlertError('ERROR', 'El formato de EQUIPO DE PROTECCIÓN debe ser completado ')
                return
            }
        }
        if (sectionGPSMark) {
            if (!nombre_evaluador_prueba_gps) {
                AlertError('ERROR', 'El campo NOMBRE_EVALUADOR_PRUEBA_GPS debe ser completado ')
                return
            }
            if (!resultado_eval_presencial_gps) {
                AlertError('ERROR', 'El campo RESULTADO_EVAL_PRESENCIAL_GPS debe ser completado ')
                return
            }
            if (!formato_eval_habilidad_uso_gps) {
                AlertError('ERROR', 'El campo FORMATO_EVAL_HABILIDAD_USO_GPS debe ser completado ')
                return
            }
            if (!nombre_evaluador_prueba_mark_III) {
                AlertError('ERROR', 'El campo NOMBRE_EVALUADOR_PRUEBA_MARK_III debe ser completado ')
                return
            }
            if (!resultado_eval_presencial_mark_III) {
                AlertError('ERROR', 'El campo RESULTADO_EVAL_PRESENCIAL_MARK_III debe ser completado ')
                return
            }
            if (!formato_eval_habilidad_uso_mark_III) {
                AlertError('ERROR', 'El campo FORMATO_EVAL_HABILIDAD_USO_MARK_III debe ser completado ')
                return
            }
            if (!presento_constancia_s_211) {
                AlertError('ERROR', 'El campo PRESENTO_CONSTANCIA_S_211 debe ser completado ')
                return
            }
        }

        sendData()
    }

    const sendData = async () => {
        const url = `${API_REQUEST}pruebas_fisicas`
        try {
            /* ENVIO DE ARCHIVOS */

            /* ENVIO DE INFORMACION */
            const resp = await Axios.post(url, evaluaciones);
            if (resp.status === 200) {
                AlertExito('¡Registro Ingresado!')
                /* REGRESAR A LA TABLA */
                props.setVolver(false)
            } else {
                AlertError('Error', resp.data)
            }

        } catch (error) {

        }
    }

    useEffect(() => {
        /* se agrega al conext global el estate */
        pruebasContext.cand.agregarPruebas({
            ...pruebasContext.cand,
            pruebasCandidato: evaluaciones
        })
    }, [evaluaciones])


    return (
        <>
            <div className='row body_wrap'>
                {/* DATOS DEL CANDIDATO */}
                {/* ENCABEZADO */}
                <div className='col-12 col-md-12 center-text'>
                    <h2>Evaluaciones</h2>
                </div>
                {/* FORMATO APTITUD FISICA */}
                {/* <div className='col-12 col-md-12'>
                    <label className="control-label pt-2">Formato de aptitud física:</label>
                    <input
                        type='file'
                        accept="application/pdf"
                        className={`form-control ${(archivos.formato) ? null : 'myInput'}`}
                        disabled
                        name='formato'
                        onChange={setInfo}
                    />
                </div> */}
                {/* NOMBRE DEL EVALUADOR */}
                <div className='col-12 col-md-12'>
                    <label className="control-label pt-2">Nombre del evaluador</label>
                    <input
                        className={`form-control ${(evaluaciones.nombre_evaluador) ? null : 'myInput'}`}
                        disabled
                        name='nombre_evaluador'
                        value={evaluaciones.nombre_evaluador}
                        type='text'
                        // accept="image/png,image/jpeg"
                        onChange={setInfo}
                        // onChangeCapture={ToMayus}
                        placeholder='Ingrese Nombre completo...'
                    />
                </div>
                {/* PESO VERIFICADO */}
                <div className='col-12 col-md-4'>
                    <label className="control-label pt-2">Peso comprobado</label>
                    <InputNumber
                        className={`form-control ${(evaluaciones.peso_verificado) ? null : 'myInput'}`}
                        disabled
                        name='peso_verificado'
                        limitLength={5}
                        min={0}
                        step='0.1'
                        type='number'
                        value={evaluaciones.peso_verificado}
                        // accept="image/png,image/jpeg"
                        onChange={setInfo}
                        onBlur={handleIMC}
                        placeholder='Ingrese Peso verificado...'
                    />
                </div>
                {/* Altura VERIFICADO */}
                <div className='col-12 col-md-4'>
                    <label className="control-label pt-2">Altura comprobado (cm.)</label>
                    <InputNumber
                        className={`form-control ${(evaluaciones.altura_verificada) ? null : 'myInput'}`}
                        disabled
                        name='altura_verificada'
                        limitLength={3}
                        min={0}
                        type='number'
                        value={evaluaciones.altura_verificada}
                        // accept="image/png,image/jpeg"
                        onChange={setInfo}
                        onBlur={handleIMC}
                        placeholder='Ingrese Altura verificada...'
                    />
                </div>
                {/* IMC VERIFICADO */}
                <div className='col-12 col-md-4'>
                    <label className="control-label pt-2">IMC verificado</label>
                    <input
                        disabled
                        className={`form-control ${(evaluaciones.imc_verificado) ? null : 'myInput'}`}

                        name='imc_verificado'
                        type='text'
                        value={evaluaciones.imc_verificado}
                        // accept="image/png,image/jpeg"
                        onChange={setInfo}
                        placeholder='Calculo de IMC...'
                    />
                </div>
                {/* SECCION PRUEBAS FISICAS*/}
                {sectionPruebaFisica && <React.Fragment>
                    {/* Altura SOBRE NIVEL DEL MAR */}
                    <div className='col-12 col-md-6'>
                        <label className="control-label pt-2">Altura sobre el nivel del mar del lugar donde se realizó la prueba.</label>
                        <InputNumber
                            className={`form-control ${(evaluaciones.altura_sobre_niv_mar) ? null : 'myInput'}`}
                            disabled
                            name='altura_sobre_niv_mar'
                            limitLength={4}
                            min={0}
                            type='number'
                            value={evaluaciones.altura_sobre_niv_mar}
                            // accept="image/png,image/jpeg"
                            onChange={setInfo}
                            onBlur={handleASNM}
                            placeholder='Ingrese Altura sobre el nivel del mar...'
                        />
                    </div>
                    {/* TIEMPO MÁXIMO REQUERIDO CON CORRECCIÓN POR ALTITUD */}
                    <div className='col-12 col-md-6'>
                        <label className="control-label pt-2">Tiempo máximo requerido con corrección por altitud.</label>
                        <input
                            disabled
                            className={`form-control ${(evaluaciones.tiempo_req_mas_seg) ? null : 'myInput'}`}
                            name='tiempo_req_mas_seg'
                            type='text'
                            value={`${evaluaciones.tiempo_req_max_min}' ${evaluaciones.tiempo_req_mas_seg}''`}
                            placeholder='Ingrese Altura sobre el nivel del mar...'
                        />
                    </div>
                    {/* TIEMPO REALIZADO EN LA PRUEBA DE TRABAJO ARDUO */}
                    <div className='col-12 col-md-3'>
                        <label className="control-label pt-2">Tiempo realizado en la prueba de trabajo arduo.</label>
                        <InputGroup className="mb-2">
                            <InputNumber
                                className={`form-control ${(evaluaciones.minutos_prueba_trabajo_arduo) ? null : 'myInput'}`}
                                disabled
                                placeholder="Minutos..."
                                limitLength={2}
                                min={0}
                                value={evaluaciones.minutos_prueba_trabajo_arduo}
                                name='minutos_prueba_trabajo_arduo'
                                onChange={setInfo}
                                onBlur={calcResultados}
                            />
                            <InputGroup.Prepend>
                                <InputGroup.Text>'</InputGroup.Text>
                            </InputGroup.Prepend>
                            <InputNumber
                                className={`form-control ${(evaluaciones.segundos_prueba_trabajo_arduo) ? null : 'myInput'}`}
                                disabled
                                placeholder="Segundos..."
                                limitLength={2}
                                min={0}
                                value={evaluaciones.segundos_prueba_trabajo_arduo}
                                name='segundos_prueba_trabajo_arduo'
                                onChange={setInfo}
                                onBlur={calcResultados}
                            />
                            <InputGroup.Prepend>
                                <InputGroup.Text>''</InputGroup.Text>
                            </InputGroup.Prepend>
                        </InputGroup>
                    </div>
                    {/* Puntuacion estimada*/}
                    <div className='col-12 col-md-4'>
                        <label className="control-label pt-2">Puntuación estimada.</label>
                        <InputNumber
                            disabled
                            className={`form-control ${(evaluaciones.puntuacion_estimada) ? null : 'myInput'}`}
                            name='puntuacion_estimada'
                            value={evaluaciones.puntuacion_estimada}
                            // onChange={setInfo}
                            placeholder='Ingrese Minuos y Segundos de la prueba...'
                        />
                    </div>
                    {/* PRUEBA */}
                    <div className='col-12 col-md-5'>
                        <label className="control-label pt-2">Prueba:</label>
                        <input
                            disabled
                            className={`form-control ${(evaluaciones.prueba) ? null : 'myInput'}`}
                            name='prueba'
                            // onChange={setInfo}
                            value={evaluaciones.prueba}
                            placeholder='Resultados de la prueba...'
                        />
                    </div>

                </React.Fragment>}
                {/* SECCION EQUIPO DE PROTECCION */}
                {sectionEPP && <React.Fragment>
                    <div className='col-12 col-md-12 center-text pt-5'>
                        <h2>Equipo de despliegue</h2>
                    </div>
                    {/* <div className='col-12 col-md-12'>
                        <label className="control-label pt-2">Formato de equipo de protección completo</label>
                        <input
                            className={`form-control ${(evaluaciones.formato_epp) ? null : 'myInput'}`}
                            disabled
                            name='formato_epp'
                            type='file'
                            accept="application/pdf"
                            onChange={setInfo}
                            onBlur={handleASNM}
                        />
                    </div> */}
                    <div className='col-12 col-md-12'>
                        <label className="control-label pt-2">¿El candidato presentó el equipo de protección completo?</label>
                        {(!props.enabled) ? <input
                            disabled
                            className={`form-control ${(evaluaciones.presento_equipo) ? null : 'myInput'}`}
                            value={(evaluaciones.presento_equipo === '1') ? 'SI' : 'NO'}
                        />
                            :
                            <SelectSiNo
                                className={`form-control ${(evaluaciones.presento_equipo) ? null : 'myInput'}`}
                                disabled
                                name='presento_equipo'
                                defaultValue={evaluaciones.presento_equipo}
                                onChange={setInfo}
                                onChangeCapture={handleEPP}
                            />
                        }
                    </div>
                </React.Fragment>}
                {/* SECCION GPS-MARK*/}
                {sectionGPSMark && <React.Fragment>
                    {/* ENCABEZADO */}
                    <div className='col-12 col-md-12 center-text pt-5'>
                        <h2>GPS y Bomba MARK III</h2>
                    </div>
                    {/* Nombre del evaluador prueba GPS */}
                    <div className='col-12 col-md-12'>
                        <label className="control-label pt-2">Nombre del evaluador prueba GPS</label>
                        <input
                            disabled
                            className={`form-control ${(evaluaciones.nombre_evaluador_prueba_gps) ? null : 'myInput'}`}
                            type="text"
                            value={evaluaciones.nombre_evaluador_prueba_gps}
                            name='nombre_evaluador_prueba_gps'
                            // onChange={setInfo}
                            onChangeCapture={ToMayus}
                            placeholder='Ingrese Nombre del evaluador prueba GPS...'
                        />
                    </div>
                    {/* Formato de evaluación habilidad y competencia en el uso de GPS */}
                    {/* <div className='col-12 col-md-12'>
                        <label className="control-label pt-2">Formato de evaluación habilidad y competencia en el uso de GPS</label>
                        <input
                            className={`form-control ${(evaluaciones.formato_eval_habilidad_uso_gps) ? null : 'myInput'}`}
                            type="file"
                            name='formato_eval_habilidad_uso_gps'
                            onChange={setInfo}
                            placeholder='Ingrese Formato de evaluación habilidad y competencia en el uso de GPS...'
                            accept="application/pdf"
                        />
                    </div> */}
                    {/* Resultado de la evaluación presencial de GPS */}
                    <div className='col-12 col-md-6'>
                        <label className="control-label pt-2">Resultado de la evaluación presencial de GPS</label>
                        <InputNumber
                            disabled
                            className={`form-control ${(evaluaciones.resultado_eval_presencial_gps) ? null : 'myInput'}`}
                            limitLength={1}
                            value={evaluaciones.resultado_eval_presencial_gps}
                            name='resultado_eval_presencial_gps'
                            placeholder='Ingrese Resultado de la evaluación presencial de GPS...'
                        />
                    </div>
                    {/* porcentaje GPS*/}
                    <div className='col-12 col-md-6'>
                        <label className="control-label pt-2">% la evaluación presencial de GPS</label>
                        <input
                            disabled
                            className={`form-control ${(evaluaciones.porcentaje_gps) ? null : 'myInput'}`}
                            value={evaluaciones.porcentaje_gps}
                            name='porcentaje_gps'
                            // onChange={setInfo}
                            placeholder='calculo porcentaje de la evaluación presencial de GPS...'
                        />
                    </div>
                    {/* Nombre del evaluador prueba Mark III */}
                    <div className='col-12 col-md-12'>
                        <label className="control-label pt-2">Nombre del evaluador prueba Mark III</label>
                        <input
                            disabled
                            className={`form-control ${(evaluaciones.nombre_evaluador_prueba_mark_III) ? null : 'myInput'}`}
                            type="text"
                            // onChangeCapture={ToMayus}
                            value={evaluaciones.nombre_evaluador_prueba_mark_III}
                            name='nombre_evaluador_prueba_mark_III'
                            onChange={setInfo}
                            placeholder='Ingrese Nombre del evaluador prueba Mark III...'
                        />
                    </div>
                    {/* Formato de evaluación habilidad y competencia en el uso de Mark III */}
                    {/* <div className='col-12 col-md-12'>
                        <label className="control-label pt-2">Formato de evaluación habilidad y competencia en el uso de Mark III</label>
                        <input
                            className={`form-control ${(evaluaciones.formato_eval_habilidad_uso_mark_III) ? null : 'myInput'}`}
                            type="file"
                            name='formato_eval_habilidad_uso_mark_III'
                            onChange={setInfo}
                            value={evaluaciones.formato_eval_habilidad_uso_mark_III}
                            placeholder='Ingrese Formato de evaluación habilidad y competencia en el uso de Mark III...'
                            accept="application/pdf"
                        />
                    </div> */}
                    {/* Resultado de la evaluación presencial de Mark III */}
                    <div className='col-12 col-md-6'>
                        <label className="control-label pt-2">Resultado de la evaluación presencial de Mark III</label>
                        <InputNumber
                            disabled
                            className={`form-control ${(evaluaciones.resultado_eval_presencial_mark_III) ? null : 'myInput'}`}
                            limitLength={2}
                            value={evaluaciones.resultado_eval_presencial_mark_III}
                            name='resultado_eval_presencial_mark_III'
                            onChange={setInfo}
                            // onBlur={revisionMarkIII}
                            placeholder='Ingrese Resultado de la evaluación presencial de Mark III...'
                        />
                    </div>
                    {/* porcentaje GPS*/}
                    <div className='col-12 col-md-6'>
                        <label className="control-label pt-2">% la evaluación presencial de Mark III</label>
                        <input
                            disabled
                            className={`form-control ${(evaluaciones.porcentaje_mark_III) ? null : 'myInput'}`}
                            value={evaluaciones.porcentaje_mark_III}
                            name='porcentaje_mark_III'
                            // onChange={setInfo}
                            placeholder='calculo porcentaje de la evaluación presencial de mark_III...'
                        />
                    </div>
                    {/* ¿El evaluado presento constancia del curso S-211 */}
                    <div className='col-12 col-md-6'>
                        <label className="control-label pt-2">¿El evaluado presento constancia del curso S-211?</label>
                        <SelectSiNo
                            disabled
                            className={`form-control ${(evaluaciones.presento_constancia_s_211) ? null : 'myInput'}`}
                            type="text"
                            name='presento_constancia_s_211'
                            onChange={setInfo}
                            defaultValue={evaluaciones.presento_constancia_s_211}
                        />
                    </div>

                </React.Fragment>}
                <div className='text-center py-3 col-md-12'>

                </div>
                <div className='text-center py-3 col-md-12'>

                </div>
            </div>
        </>
    );
}

export default S9_S10View;