import React, { useState } from 'react'
import InputNumber from '../../singles/InputNumber'
import calculoIMC from "../../helpers/calculoIMC";
import ToMayus from '../../helpers/ToMayus';
import calculoTiempoMax from '../../helpers/calculoTiempoMax';
import { InputGroup, FormControl } from 'react-bootstrap';

const EvaluacionesFisicas = () => {
    const [evaluaciones, setEvaluaciones] = useState({})

    const setInfo = (input) => {
        setEvaluaciones({
            ...evaluaciones,
            [input.target.name]: input.target.value
        })
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

    const handleASNM = () => {
        const { altura_sobre_niv_mar } = evaluaciones
        const tiempo_max = calculoTiempoMax(altura_sobre_niv_mar)
        setEvaluaciones({
            ...evaluaciones,
            tiempo_max_correccion_altitud: tiempo_max
        })

    }

    return (
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
                    // accept="image/png,image/jpeg"
                    onChange={setInfo}
                    onBlur={handleIMC}
                    placeholder='Ingrese Peso verificado...'
                />
            </div>
            {/* Altura VERIFICADO */}
            <div className='col-12 col-md-4'>
                <label className="control-label pt-2">Altura comprobado</label>
                <InputNumber
                    className={`form-control ${(evaluaciones.altura_verificada) ? null : 'myInput'}`}
                    name='altura_verificada'
                    limitLength={3}
                    min={0}
                    type='number'
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
                    value={evaluaciones.tiempo_max_correccion_altitud}
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
                        name='minutos_prueba_trabajo_arduo'
                        onChange={setInfo}
                    />
                    <InputGroup.Prepend>
                        <InputGroup.Text>'</InputGroup.Text>
                    </InputGroup.Prepend>
                    <InputNumber
                        className={`form-control ${(evaluaciones.segundos_prueba_trabajo_arduo) ? null : 'myInput'}`}
                        placeholder="Segundos..."
                        limitLength={2}
                        min={0}
                        name='segundos_prueba_trabajo_arduo'
                        onChange={setInfo}
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
                    onChange={setInfo}

                    placeholder='Ingrese Altura sobre el nivel del mar...'
                />
            </div>
            <div className='col-12 col-md-5'>
                <label className="control-label pt-2">Prueba:</label>
                <InputNumber
                    disabled
                    className={`form-control ${(evaluaciones.prueba) ? null : 'myInput'}`}
                    name='prueba'
                    onChange={setInfo}

                    placeholder='Resultados de la prueba...'
                />
            </div>
        </div>
    );
}

export default EvaluacionesFisicas;