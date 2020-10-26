import axios from '../../config/axios';
import React, { Fragment, useState, useEffect, useContext } from 'react'
import { Button } from 'react-bootstrap';
import AlertCargando from '../../singles/AlertCargando';
import AlertError from '../../singles/AlertError';
import AlertExito from '../../singles/AlertExito'
import InfomacionCandidato from '../estatales/InfomacionCandidato';
import sessionContext from "../../context/session/sessionContext";



/* CREACION DE COMPONENTE SELECTOR */
const SelectCalificacion = ({ name, onChange, className, defaultValue }) => <select name={name} onChange={onChange} className={className} defaultValue={defaultValue}>
    <option value={null}>--Seleccione---</option>
    <option value='0'>1-No cumple</option>
    <option value='1'>2-Cumple, pero con dificultades</option>
    <option value='2'>3-Cumple de acuerdo a lo requerido</option>
</select>



const EvaluacionDesepenio = ({ data, backTable, setReload, reload }) => {

    /* TODO: 
            => texbox añadir seccion de comentarios 
    */

    const sessContext = useContext(sessionContext)
    const [files, setFiles] = useState({ evaluacion_desempenio_archivo_fl: null })
    const [sumatoria, setSumatoria] = useState(0)
    const [edicion, setEdicion] = useState((data.evaluaciones[0]) ? true : false)
    const evaluacionDefault = (data.evaluaciones[0]) ? data.evaluaciones[0] : {
        fk_curp: data.curp,
        aptitud_fisica: null,
        conocimiento_incendios: null,
        ap_cmdo_incidentes: null,
        uso_gps: null,
        uso_equipo_agua: null,
        disponibilidad: null,
        conducta: null,
        productividad: null,
        seguridad: null,
        comunicacion: null,
        responsabilidad: null,
        eq_acampar: null,
        dom_ingles: null,
        liderazgo: null,
        capacidad_gestion: null,
    }
    const [state, setState] = useState(evaluacionDefault)

    const setInfo = (input) => {
        /* setea al state las variables */

        if (
            input.target.name === 'evaluacion_desempenio_archivo'
        ) {
            setFiles({
                ...files,
                [input.target.name + '_fl']: input.target.files
            })
        } else {
            setState({
                ...state,
                [input.target.name]: input.target.value,

            })
        }
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const { user } = sessContext.login
        /* REVISAR QUE EL ARCHIVO NO ESTEN VACÍOS */
        const {
            aptitud_fisica, conocimiento_incendios, ap_cmdo_incidentes,
            uso_gps, uso_equipo_agua, disponibilidad, conducta,
            productividad, seguridad, comunicacion, responsabilidad,
            eq_acampar, dom_ingles, liderazgo, capacidad_gestion
        } = state

        if (!files.evaluacion_desempenio_archivo_fl) {
            AlertError('El formato fisico debe ser adjunto');
            return
        }
        else if (aptitud_fisica === '0') {
            AlertError('falta aptitud_fisica');
            return
        }
        else if (conocimiento_incendios === '0') {
            AlertError('falta conocimiento_incendios');
            return
        }
        else if (ap_cmdo_incidentes === '0') {
            AlertError('falta ap_cmdo_incidentes');
            return
        }
        else if (uso_gps === '0') {
            AlertError('falta uso_gps');
            return
        }
        else if (uso_equipo_agua === '0') {
            AlertError('falta uso_equipo_agua');
            return
        }
        else if (disponibilidad === '0') {
            AlertError('falta disponibilidad');
            return
        }
        else if (conducta === '0') {
            AlertError('falta conducta');
            return
        }
        else if (productividad === '0') {
            AlertError('falta productividad');
            return
        }
        else if (seguridad === '0') {
            AlertError('falta seguridad');
            return
        }
        else if (comunicacion === '0') {
            AlertError('falta comunicacion');
            return
        }
        else if (responsabilidad === '0') {
            AlertError('falta responsabilidad');
            return
        }
        else if (eq_acampar === '0') {
            AlertError('falta eq_acampar');
            return
        }
        else if (dom_ingles === '0') {
            AlertError('falta dom_ingles');
            return
        }
        else if (data.posicion_candidato === 'jefe_de_cuadrilla' || data.posicion_candidato === 'jefe_de_brigada') {
            if (liderazgo === '0') {
                AlertError('falta liderazgo');
                return
            }
            else if (capacidad_gestion === '0') {
                AlertError('falta capacidad_gestion');
                return
            }
        }
        /* ENVIAR VIA AXIOS LA INFORMACION */
        AlertCargando('Enviando evaluación...');
        try {
            let resp;
            if (edicion) {
                /* envia a edicion */
                resp = await axios.put('/edit_evaluacion', { user: user, data: { ...state, suma: sumatoria } })
            } else {
                /* crea un nuevo registro */
                resp = await axios.post('/create_evaluacion', { user: user, data: { ...state, suma: sumatoria } })
            }

            if (resp.status === 200) {
                AlertExito('Se cargo correctamente');
                backTable()
                setReload(!reload)
            }
        } catch (error) {
            AlertError('ERROR:', error)
        }
        /* CAMBIAR STATUS DE ENVIADO PARA MODIFICACIÓN */
    }

    const sumarPuntos = () => {
        const aptitud_fisica = (state.aptitud_fisica) ? parseInt(state.aptitud_fisica) : 0;
        const conocimiento_incendios = (state.conocimiento_incendios) ? parseInt(state.conocimiento_incendios) : 0;
        const ap_cmdo_incidentes = (state.ap_cmdo_incidentes) ? parseInt(state.ap_cmdo_incidentes) : 0;
        const uso_gps = (state.uso_gps) ? parseInt(state.uso_gps) : 0;
        const uso_equipo_agua = (state.uso_equipo_agua) ? parseInt(state.uso_equipo_agua) : 0;
        const disponibilidad = (state.disponibilidad) ? parseInt(state.disponibilidad) : 0;
        const conducta = (state.conducta) ? parseInt(state.conducta) : 0;
        const productividad = (state.productividad) ? parseInt(state.productividad) : 0;
        const seguridad = (state.seguridad) ? parseInt(state.seguridad) : 0;
        const comunicacion = (state.comunicacion) ? parseInt(state.comunicacion) : 0;
        const responsabilidad = (state.responsabilidad) ? parseInt(state.responsabilidad) : 0;
        const eq_acampar = (state.eq_acampar) ? parseInt(state.eq_acampar) : 0;
        const dom_ingles = (state.dom_ingles) ? parseInt(state.dom_ingles) : 0;
        const liderazgo = (state.liderazgo) ? parseInt(state.liderazgo) : 0;
        const capacidad_gestion = (state.capacidad_gestion) ? parseInt(state.capacidad_gestion) : 0;

        const suma = aptitud_fisica + conocimiento_incendios + ap_cmdo_incidentes +
            uso_gps + uso_equipo_agua + disponibilidad + conducta +
            productividad + seguridad + comunicacion + responsabilidad +
            eq_acampar + dom_ingles + liderazgo + capacidad_gestion;

        setSumatoria(suma)
    }

    useEffect(() => {
        sumarPuntos();
    }, [state])

    return (
        <Fragment>
            <Button onClick={backTable}>Volver</Button>
            <div className='row body_wrap'>
                <InfomacionCandidato state={data} />
                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        Formato escaneado
                    </label>
                    <input
                        className="form-control myInput"
                        name='evaluacion_desempenio_archivo'
                        // value={state.pasaporte_archivo}
                        type='file'
                        accept="application/pdf"
                        onChange={setInfo}
                        placeholder='Pasaporte'
                    />
                </div>
                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        1.Aptitud física
                    </label>
                    <p>
                        Demostró buena condición física en el desarrollo de sus actividades
                    </p>
                    <SelectCalificacion
                        defaultValue={state.aptitud_fisica}
                        className='form-control'
                        name='aptitud_fisica'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_aptitud_fisica'
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        2.Conocimientos en Incendios
                    </label>
                    <p>
                        Forestales Cuenta con la experiencia necesaria para el desarrollo de sus asignaciones
                    </p>
                    <SelectCalificacion
                        defaultValue={state.conocimiento_incendios}
                        className='form-control'
                        name='conocimiento_incendios'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_conocimiento_incendios'
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        3.Aplicación del Sistema de
                    </label>
                    <p>
                        Comando de Incidentes Tiene el conocimiento y aplica el sistema de manera adecuada
                    </p>
                    <SelectCalificacion
                        defaultValue={state.ap_cmdo_incidentes}
                        className='form-control'
                        name='ap_cmdo_incidentes'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_ap_cmdo_incidentes'
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        4.Uso del GPS,
                    </label>
                    <p>
                        Georreferenciación Operó el equipo de manera autónoma
                    </p>
                    <SelectCalificacion
                        defaultValue={state.uso_gps}
                        className='form-control'
                        name='uso_gps'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_uso_gps'
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        5.Uso de equipo de uso de agua
                    </label>
                    <p>
                        Operó el equipo de manera autónoma
                    </p>
                    <SelectCalificacion
                        defaultValue={state.uso_equipo_agua}
                        className='form-control'
                        name='uso_equipo_agua'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_uso_equipo_agua'
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        6.Disponibilidad
                    </label>
                    <p>
                        Presentó disponibilidad en todo momento
                    </p>
                    <SelectCalificacion
                        defaultValue={state.disponibilidad}
                        className='form-control'
                        name='disponibilidad'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_disponibilidad'
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        7.Presentó buena conducta en todo momento
                    </label>
                    <p>
                        Presentó buena conducta en todo
                        momento
                    </p>
                    <SelectCalificacion
                        defaultValue={state.conducta}
                        className='form-control'
                        name='conducta'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_conducta'
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        8.Productividad / Habilidad para cumplir los objetivos
                    </label>
                    <p>
                        Concretó las asignaciones de manera adecuada y en los tiempos requeridos
                    </p>
                    <SelectCalificacion
                        defaultValue={state.productividad}
                        className='form-control'
                        name='productividad'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_productividad'
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>


                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        9.Seguridad
                    </label>
                    <p>
                        (Transporte, operación, campamento) Realizó sus actividades privilegiando su seguridad y la de sus compañeros
                    </p>
                    <SelectCalificacion
                        defaultValue={state.seguridad}
                        className='form-control'
                        name='seguridad'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_seguridad'
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        10.Comunicación
                    </label>
                    <p>
                        Utilizó los canales establecidos y respeto la línea de comunicación
                    </p>
                    <SelectCalificacion
                        defaultValue={state.comunicacion}
                        className='form-control'
                        name='comunicacion'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_comunicacion'
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        11.Responsabilidad con el equipo y herramienta asignados
                    </label>
                    <p>
                        Utilizó de manera responsable los recursos que le fueron asignados, y al finalizar la asignaciónrealizó el proceso correspondiente para devolver el equipo
                    </p>
                    <SelectCalificacion
                        defaultValue={state.responsabilidad}
                        className='form-control'
                        name='responsabilidad'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_responsabilidad'
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>
                {/* 
                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        12.Equipo de Protección
                    </label>
                    <p>
                        Personal Presentó durante las actividades su Equipo de Protección Personal completo
                    </p>
                   
                </div> */}

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        13.Equipo de Protección
                    </label>
                    <p>
                        Personal Presentó durante las actividades su Equipo de Protección Personal completo
                    </p>
                    <SelectCalificacion
                        defaultValue={state.eq_proteccion_personal}
                        className='form-control'
                        name='eq_proteccion_personal'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_eq_proteccion_personal'
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        14.Equipo para acampar
                    </label>
                    <p>
                        Presentó el equipo completo(Casa de campaña, sleeping bag, sleeping pad y mochila)
                    </p>
                    <SelectCalificacion
                        defaultValue={state.eq_acampar}
                        className='form-control'
                        name='eq_acampar'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_eq_acampar'
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>

                <div className='col-12 pt-4'>
                    <label className="control-label pt-2">
                        15.dominio del inglés
                    </label>
                    <p>
                        Se desempeñó de manera autónoma en un ambiente donde únicamente se habla inglés
                    </p>
                    <SelectCalificacion
                        defaultValue={state.dom_ingles}
                        className='form-control'
                        name='dom_ingles'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_dom_ingles'
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>

                {(data.posicion_candidato === 'jefe_de_cuadrilla' || data.posicion_candidato === 'jefe_de_brigada') && <Fragment>
                    <div className='col-12 pt-4'>
                        <label className="control-label pt-2">
                            16.Liderazgo
                    </label>
                        <p>
                            Muestra decisión e iniciativa, brinda buen ejemplo einstrucciones claras a sus subordinados
                    </p>
                        <SelectCalificacion
                            defaultValue={state.liderazgo}
                            className='form-control'
                            name='liderazgo'
                            onChange={setInfo}
                        />
                        <textarea className='form-control'
                            name='observacion_liderazgo'
                            onChange={setInfo}
                        />
                    </div>

                    <div className='col-12 pt-4'>
                        <label className="control-label pt-2">
                            17.Capacidad de Gestión
                    </label>
                        <p>
                            Resuelve situaciones urgentes y establece planes de contingencia, negocia al interior y al exterior del grupo para mejorar las condiciones del despliegue.
                    </p>
                        <SelectCalificacion
                            defaultValue={state.capacidad_gestion}
                            className='form-control'
                            name='capacidad_gestion'
                            onChange={setInfo}
                        />
                        <textarea className='form-control'
                            name='observacion_capacidad_gestion'
                            onChange={setInfo}
                        />
                    </div>
                </Fragment>
                }
                <div className='col-12 pt-4 d-flex justify-content-end'>
                    <button className='btn btn-success '
                        onClick={handleSubmit}
                        disabled={sumatoria <= 0}
                    >
                        {(edicion) ? 'Editar' : 'Guardar'}
                    </button>
                </div>

            </div>
            <Button onClick={backTable}>Volver</Button>
        </Fragment>
    );
}

export default EvaluacionDesepenio;