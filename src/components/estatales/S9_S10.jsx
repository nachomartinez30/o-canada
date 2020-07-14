import React, { useState } from 'react'
import InputNumber from '../../singles/InputNumber'
import calculoIMC from "../../helpers/calculoIMC";
import ToMayus from '../../helpers/ToMayus';
import moment from 'moment'
import { InputGroup } from 'react-bootstrap';
import AlertError from '../../singles/AlertError';


const S9_S10 = (props) => {
    const [evaluaciones, setEvaluaciones] = useState({
        nombre_evaluador: 'IGNACIO MARTINEZ',
        peso_verificado: 85.2,
        altura_verificada: 170,
        imc_verificado: 29.480968858131494,
        altura_sobre_niv_mar: 1521,
        tiempo_max_correccion_altitud: null,
        minutos_prueba_trabajo_arduo: null,
        segundos_prueba_trabajo_arduo: null,
        puntuacion_estimada: null,
        prueba: null,
        formato: null,
    })

    const setInfo = (input) => {
        if (input.target.name === 'formato') {

        } else {
            setEvaluaciones({
                ...evaluaciones,
                [input.target.name]: input.target.value
            })
        }
    }

    const handleIMC = () => {
        const { altura_verificada, peso_verificado } = evaluaciones
        if (altura_verificada && peso_verificado) {
            const imc = calculoIMC(altura_verificada, peso_verificado)
            setEvaluaciones({
                ...evaluaciones,
                imc_verificado: imc
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

    const handleASNM = () => {
        const { altura_sobre_niv_mar } = evaluaciones
        calculoTiempoMax(altura_sobre_niv_mar)
    }

    const calcResultados = () => {
        const { minutos_prueba_trabajo_arduo, segundos_prueba_trabajo_arduo } = evaluaciones

        if (minutos_prueba_trabajo_arduo && segundos_prueba_trabajo_arduo) {
            setEvaluaciones({
                ...evaluaciones,
                puntuacion_estimada: puntajePrueba(minutos_prueba_trabajo_arduo, segundos_prueba_trabajo_arduo),
                prueba: calificacionPrueba(minutos_prueba_trabajo_arduo, segundos_prueba_trabajo_arduo)
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
        const { nombre_evaluador, peso_verificado, altura_verificada, imc_verificado, altura_sobre_niv_mar,
            minutos_prueba_trabajo_arduo, segundos_prueba_trabajo_arduo,
            puntuacion_estimada, prueba, formato
        } = evaluaciones

        if (!nombre_evaluador) {
            AlertError("ERROR", 'El campo NOMBRE DEL EVALUADOR debe ser completado')
            return;
        }
        if (!peso_verificado) {
            AlertError("ERROR", 'El campo PESO VERIFICADO debe ser completado')
            return;
        }
        if (!altura_verificada) {
            AlertError("ERROR", 'El campo ALTURA VERIFICADA debe ser completado')
            return;
        }
        if (!imc_verificado) {
            AlertError("ERROR", 'El campo IMC VERIFICADO debe ser completado')
            return;
        }
        if (!altura_sobre_niv_mar) {
            AlertError("ERROR", 'El campo ALTURA SOBRE NIVEL DEL MAR debe ser completado')
            return;
        }

        if (!minutos_prueba_trabajo_arduo) {
            AlertError("ERROR", 'El campo MINUTOS PRUEBA TRABAJO ARDUO debe ser completado')
            return;
        }

        if (!segundos_prueba_trabajo_arduo) {
            AlertError("ERROR", 'El campo SEGUNDOS PRUEBA TRABAJO ARDUO debe ser completado')
            return;
        }

        // if (!puntuacion_estimada) {
        //     AlertError("ERROR", 'El campo PUNTUACION ESTIMADA debe ser completado')
        //     return;
        // }
        // if (!prueba) {
        //     AlertError("ERROR", 'El campo PRUEBA debe ser completado')
        //     return;
        // }

        if (!formato) {
            AlertError("ERROR", 'El archivo FORMATO debe ser completado')
            return;
        }
    }


    return (
        <>

            {/* <br /> */}
            <div className='row body_wrap'>
                {/* DATOS DEL CANDIDATO */}
                {/* ENCABEZADO */}
                <div className='col-12 col-md-12 center-text'>
                    <h2>Evaluaciones</h2>
                </div>
                {/* NOMBRE DEL EVALUADOR */}
                <div className='col-12 col-md-12'>
                    <label className="control-label pt-2">Nombre del evaluador</label>
                    <input
                        className={`form-control ${(evaluaciones.nombre_evaluador) ? null : 'myInput'}`}
                        name='nombre_evaluador'
                        value={evaluaciones.nombre_evaluador}
                        type='text'
                        // accept="image/png,image/jpeg"
                        onChange={setInfo}
                        onChangeCapture={ToMayus}
                        placeholder='Ingrese Nombre completo...'
                    />
                </div>
                {/* PESO VERIFICADO */}
                <div className='col-12 col-md-4'>
                    <label className="control-label pt-2">Peso comprobado</label>
                    <InputNumber
                        className={`form-control ${(evaluaciones.peso_verificado) ? null : 'myInput'}`}
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
                {/* Altura SOBRE NIVEL DEL MAR */}
                <div className='col-12 col-md-6'>
                    <label className="control-label pt-2">Altura sobre el nivel del mar del lugar donde se realizó la prueba.</label>
                    <InputNumber
                        className={`form-control ${(evaluaciones.altura_sobre_niv_mar) ? null : 'myInput'}`}
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
                        className={`form-control ${(evaluaciones.tiempo_max_correccion_altitud) ? null : 'myInput'}`}
                        name='tiempo_max_correccion_altitud'
                        type='text'
                        value={(evaluaciones.tiempo_req_max_min && evaluaciones.tiempo_req_mas_seg) ? `${evaluaciones.tiempo_req_max_min}' ${evaluaciones.tiempo_req_mas_seg}''` : null}
                        placeholder='Ingrese Altura sobre el nivel del mar...'
                    />
                </div>
                {/* TIEMPO REALIZADO EN LA PRUEBA DE TRABAJO ARDUO */}
                <div className='col-12 col-md-3'>
                    <label className="control-label pt-2">Tiempo realizado en la prueba de trabajo arduo.</label>
                    <InputGroup className="mb-2">
                        <InputNumber
                            className={`form-control ${(evaluaciones.minutos_prueba_trabajo_arduo) ? null : 'myInput'}`}
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
                {/* FORMATO APTITUD FISICA */}
                <div className='col-12 col-md-12'>
                    <label className="control-label pt-2">Formato de aptitud física:</label>
                    <input
                        type='file'
                        accept="application/pdf"
                        className={`form-control ${(evaluaciones.formato) ? null : 'myInput'}`}
                        name='formato'
                        onChange={setInfo}
                        placeholder='Resultados de la prueba...'
                    />
                </div>
                <div className='text-right py-3'>
                    <button className='btn btn-primary px-4'
                        onClick={revisarInformacion}
                    >
                        Registrar
                </button>
                </div>
            </div>
        </>
    );
}

export default S9_S10;