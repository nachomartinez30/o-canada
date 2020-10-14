import React, { Fragment } from 'react'
import { Button } from 'react-bootstrap';
import InputNumber from '../../singles/InputNumber';

const EvaluacionDesepenio = ({ data, backTable }) => {
    const handleSubmit = e => {
        e.preventDefault();
    }

    return (
        <Fragment>
            <Button onClick={backTable}>Volver</Button>
            <div className='row body_wrap'>
                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        1.Aptitud física
                    </label>
                    <p>
                        Demostró buena condición física en el desarrollo de sus actividades
                    </p>
                    <InputNumber
                        limitLength={1}
                        className='form-control'
                        placeholder='1 al 3...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        2.Conocimientos en Incendios
                    </label>
                    <p>
                        Forestales Cuenta con la experiencia necesaria para el desarrollo de sus asignaciones
                    </p>
                    <InputNumber
                        limitLength={1}
                        className='form-control'
                        placeholder='1 al 3...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        3.Aplicación del Sistema de
                    </label>
                    <p>
                        Comando de Incidentes Tiene el conocimiento y aplica el sistema de manera adecuada
                    </p>
                    <InputNumber
                        limitLength={1}
                        className='form-control'
                        placeholder='1 al 3...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        4.Uso del GPS,
                    </label>
                    <p>
                        Georreferenciación Operó el equipo de manera autónoma
                    </p>
                    <InputNumber
                        limitLength={1}
                        className='form-control'
                        placeholder='1 al 3...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        5.Uso de equipo de uso de agua
                    </label>
                    <p>
                        Operó el equipo de manera autónoma
                    </p>
                    <InputNumber
                        limitLength={1}
                        className='form-control'
                        placeholder='1 al 3...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        6.Disponibilidad
                    </label>
                    <p>
                        Presentó disponibilidad en todo momento
                    </p>
                    <InputNumber
                        limitLength={1}
                        className='form-control'
                        placeholder='1 al 3...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        7.ConductaPresentó buena conducta en todo momento
                    </label>
                    <p>
                        Presentó buena conducta en todo
                        momento
                    </p>
                    <InputNumber
                        limitLength={1}
                        className='form-control'
                        placeholder='1 al 3...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        8.Productividad / Habilidad para cumplir los objetivos
                    </label>
                    <p>
                        Concretó las asignaciones de manera adecuada y en los tiempos requeridos
                    </p>
                    <InputNumber
                        limitLength={1}
                        className='form-control'
                        placeholder='1 al 3...'
                    />
                </div>


                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        9.Seguridad
                    </label>
                    <p>
                        (Transporte, operación, campamento) Realizó sus actividades privilegiando su seguridad y la de sus compañeros
                    </p>
                    <InputNumber
                        limitLength={1}
                        className='form-control'
                        placeholder='1 al 3...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        10.Comunicación
                    </label>
                    <p>
                        Utilizó los canales establecidos y respeto la línea de comunicación
                    </p>
                    <InputNumber
                        limitLength={1}
                        className='form-control'
                        placeholder='1 al 3...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        11.Responsabilidad con el equipo y herramienta asignados
                    </label>
                    <p>
                        Utilizó de manera responsable los recursos que le fueron asignados, y al finalizar la asignaciónrealizó el proceso correspondiente para devolver el equipo
                    </p>
                    <InputNumber
                        limitLength={1}
                        className='form-control'
                        placeholder='1 al 3...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        13.Equipo de Protección
                    </label>
                    <p>
                        Personal Presentó durante las actividades su Equipo de Protección Personal completo
                    </p>
                    <InputNumber
                        limitLength={1}
                        className='form-control'
                        placeholder='1 al 3...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        14.Equipo para acampar
                    </label>
                    <p>
                        Presentó el equipo completo(Casa de campaña, sleeping bag, sleeping pad y mochila)
                    </p>
                    <InputNumber
                        limitLength={1}
                        className='form-control'
                        placeholder='1 al 3...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        15.dominio del inglés
                    </label>
                    <p>
                        Se desempeñó de manera autónoma en un ambiente donde únicamente se habla inglés
                    </p>
                    <InputNumber
                        limitLength={1}
                        className='form-control'
                        placeholder='1 al 3...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        16.Liderazgo
                    </label>
                    <p>
                        JEFES DE BRIGADA Y CUADRILLA Muestra decisión e iniciativa, brinda buen ejemplo einstrucciones claras a sus subordinados
                    </p>
                    <InputNumber
                        limitLength={1}
                        className='form-control'
                        placeholder='1 al 3...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        17.Capacidad de Gestión
                    </label>
                    <p>
                        JEFES DE BRIGADA Y CUADRILLA Resuelve situaciones urgentes y establece planes de contingencia, negocia al interior y al exterior del grupo para mejorar las condiciones del despliegue.
                    </p>
                    <InputNumber
                        limitLength={1}
                        className='form-control'
                        placeholder='1 al 3...'
                    />
                </div>
                <div className='col-12 pt-4'>
                    <button className='btn btn-success'>Guardar</button>
                </div>

            </div>
            <Button onClick={backTable}>Volver</Button>
        </Fragment>
    );
}

export default EvaluacionDesepenio;