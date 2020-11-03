import axios from '../../config/axios';
import React, { Fragment, useState, useEffect, useContext } from 'react'
import { Button } from 'react-bootstrap';
import AlertCargando from '../../singles/AlertCargando';
import AlertError from '../../singles/AlertError';
import AlertExito from '../../singles/AlertExito'
import InfomacionCandidato from '../estatales/InfomacionCandidato';
import sessionContext from "../../context/session/sessionContext";







const EvaluacionDesepenio = ({ data, backTable, setReload, reload }) => {


    const sessContext = useContext(sessionContext)
    const [files, setFiles] = useState({ evaluacion_desempenio_archivo_fl: null })
    const [sumatoria, setSumatoria] = useState(0)
    /* TODO: El evento debe ser de forma dinamica para futuros deploys */
    const evento = 'california2020'
    const [edicion, setEdicion] = useState((data.evaluaciones[0]) ? true : false)
    const evaluacionDefault = (data.evaluaciones[0]) ? data.evaluaciones[0] : {
        fk_curp: data.curp,
        aptitud_fisica: null,
        uso_gps: null,
        conducta: null,
        productividad: null,
        liderazgo: null,
        licencia_manejo: null,
        estado_salud: null,
        exp_incendios_forestales: null,
        sis_comando_incendios: null,
        cadena_mando: null,
        idioma_ingles: null,
        equipo_despliegue: null,
        uso_markIII: null,
        uso_motosierra: null,
        observacion_conducta: null,
        observacion_idioma_ingles: null,
        observacion_aptitud_fisica: null,
        observacion_liderazgo: null,
        observacion_equipo_despliegue: null,
        observacion_uso_gps: null,
        observacion_uso_markIII: null,
        observacion_uso_motosierra: null,
        observacion_licencia_manejo: null,
        observacion_estado_salud: null,
        observacion_exp_incendios_forestales: null,
        observacion_productividad: null,
        observacion_sis_comando_incendios: null,
        observacion_cadena_mando: null,
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
            aptitud_fisica,
            uso_gps,
            conducta,
            productividad,
            liderazgo,
            licencia_manejo,
            estado_salud,
            exp_incendios_forestales,
            sis_comando_incendios,
            cadena_mando,
            idioma_ingles,
            equipo_despliegue,
            uso_markIII,
            uso_motosierra,
            capacidad_gestion
        } = state

        if (!files.evaluacion_desempenio_archivo_fl) {
            AlertError('El formato fisico debe ser adjunto');
            return
        }
        else if (!aptitud_fisica) {
            AlertError('falta seccion APTITUD FISICA')
            return
        }
        else if (!uso_gps) {
            AlertError('falta seccion USO GPS')
            return
        }
        else if (!conducta) {
            AlertError('falta seccion CONDUCTA')
            return
        }
        else if (!productividad) {
            AlertError('falta seccion PRODUCTIVIDAD')
            return
        }
        else if (!liderazgo) {
            AlertError('falta seccion LIDERAZGO')
            return
        }
        else if (!licencia_manejo) {
            AlertError('falta seccion LICENCIA MANEJO')
            return
        }
        else if (!estado_salud) {
            AlertError('falta seccion ESTADO SALUD')
            return
        }
        else if (!exp_incendios_forestales) {
            AlertError('falta seccion EXPERIENCIA INCENDIOS FORESTALES')
            return
        }
        else if (!sis_comando_incendios) {
            AlertError('falta seccion SISTEMA COMANDO INCENDIOS')
            return
        }
        else if (!cadena_mando) {
            AlertError('falta seccion CADENA MANDO')
            return
        }
        else if (!idioma_ingles) {
            AlertError('falta seccion IDIOMA INGLES')
            return
        }
        else if (!equipo_despliegue) {
            AlertError('falta seccion EQUIPO DESPLIEGUE')
            return
        }
        else if (!uso_markIII) {
            AlertError('falta seccion USO MARKIII')
            return
        }
        else if (!uso_motosierra) {
            AlertError('falta seccion USO MOTOSIERRA')
            return
        }
        else if (data.posicion_candidato === 'jefe_de_cuadrilla' || data.posicion_candidato === 'jefe_de_brigada') {
            if (!capacidad_gestion) {
                AlertError('falta CAPACIDAD GESTION');
                return
            }
        }
        /* ENVIAR VIA AXIOS LA INFORMACION */
        AlertCargando('Enviando evaluación...');
        try {


            /* Envio del archivo */
            const formData = new FormData();
            formData.append("file", files.evaluacion_desempenio_archivo_fl[0]);
            formData.append("curp", state.fk_curp);
            formData.append("name", `evaluacion_desempenio_${evento}`);

            const archivo = await axios.post(`/carga_archivo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            /* crea un nuevo registro */
            const resp = await axios.post('/create_evaluacion', { user: user, data: { ...state, suma: sumatoria } })

            if (resp.status === 200 && archivo.status === 200) {
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
        const uso_gps = (state.uso_gps) ? parseInt(state.uso_gps) : 0;
        const conducta = (state.conducta) ? parseInt(state.conducta) : 0;
        const productividad = (state.productividad) ? parseInt(state.productividad) : 0;
        const liderazgo = (state.liderazgo) ? parseInt(state.liderazgo) : 0;
        const licencia_manejo = (state.licencia_manejo) ? parseInt(state.licencia_manejo) : 0;
        const estado_salud = (state.estado_salud) ? parseInt(state.estado_salud) : 0;
        const exp_incendios_forestales = (state.exp_incendios_forestales) ? parseInt(state.exp_incendios_forestales) : 0;
        const sis_comando_incendios = (state.sis_comando_incendios) ? parseInt(state.sis_comando_incendios) : 0;
        const cadena_mando = (state.cadena_mando) ? parseInt(state.cadena_mando) : 0;
        const idioma_ingles = (state.idioma_ingles) ? parseInt(state.idioma_ingles) : 0;
        const equipo_despliegue = (state.equipo_despliegue) ? parseInt(state.equipo_despliegue) : 0;
        const uso_markIII = (state.uso_markIII) ? parseInt(state.uso_markIII) : 0;
        const uso_motosierra = (state.uso_motosierra) ? parseInt(state.uso_motosierra) : 0;

        const suma = aptitud_fisica + uso_gps + conducta + productividad + liderazgo +
            licencia_manejo + estado_salud + exp_incendios_forestales + sis_comando_incendios +
            cadena_mando + idioma_ingles + equipo_despliegue + uso_markIII + uso_motosierra;

        setSumatoria(suma)
    }

    useEffect(() => {
        sumarPuntos();
    }, [state])



    /* CREACION DE COMPONENTE SELECTOR */
    const SelectCalificacion = ({ name, onChange, className, defaultValue }) =>
        <select name={name} onChange={onChange} className={className} defaultValue={defaultValue} disabled={(edicion) ? true : false}>
            <option value={null}>--Seleccione---</option>
            <option value='0'>0-No cumple</option>
            <option value='1'>1-Cumple, pero con dificultades</option>
            <option value='2'>2-Cumple de acuerdo a lo requerido</option>
        </select>


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
                    <label>
                        1.-LICENCIA DE MANEJO
                    </label>
                    <p>
                        ¿Demostró la capacidad para conducir en el extranjero?
                    </p>
                    <SelectCalificacion
                        defaultValue={state.licencia_manejo}
                        className='form-control'
                        name='licencia_manejo'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_licencia_manejo'
                        defaultValue={state.observacion_licencia_manejo}
                        disabled={(edicion) ? true : false}
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>
                <div className='col-12 pt-4'>
                    <label>
                        2.- ESTADO DE SALUD
                    </label>
                    <p>
                        ¿Mantuvo un estado de salud adecuado durante el despliegue?
                    </p>
                    <SelectCalificacion
                        defaultValue={state.estado_salud}
                        className='form-control'
                        name='estado_salud'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_estado_salud'
                        defaultValue={state.observacion_estado_salud}
                        disabled={(edicion) ? true : false}
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>
                <div className='col-12 pt-4'>
                    <label>
                        3.- INCENDIOS FORESTALES
                    </label>
                    <p>
                        ¿Cuenta con los conocimientos y experiencia necesaria para el desarrollo de sus asignaciones de manera adecuada?
                    </p>
                    <SelectCalificacion
                        defaultValue={state.exp_incendios_forestales}
                        className='form-control'
                        name='exp_incendios_forestales'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_exp_incendios_forestales'
                        defaultValue={state.observacion_exp_incendios_forestales}
                        disabled={(edicion) ? true : false}
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>
                <div className='col-12 pt-4'>
                    <label>
                        4.- PRODUCTIVIDAD
                    </label>
                    <p>
                        Habilidad para cumplir los objetivos. ¿Concretó las asignaciones de manera adecuada y en los tiempos requeridos?
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
                        defaultValue={state.observacion_productividad}
                        disabled={(edicion) ? true : false}
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>
                <div className='col-12 pt-4'>
                    <label>
                        5- SISTEMA DE COMANDO DE INCIDENTES
                    </label>
                    <p>
                        ¿Cuenta con los conocimientos y experiencia para la aplicación  del sistema de manera adecuada?
                    </p>
                    <SelectCalificacion
                        defaultValue={state.sis_comando_incendios}
                        className='form-control'
                        name='sis_comando_incendios'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_sis_comando_incendios'
                        defaultValue={state.observacion_sis_comando_incendios}
                        disabled={(edicion) ? true : false}
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>
                <div className='col-12 pt-4'>
                    <label>
                        6.- CADENA DE MANDO
                    </label>
                    <p>
                        ¿Utilizó los canales establecidos y respeto la línea de comunicación?
                    </p>
                    <SelectCalificacion
                        defaultValue={state.cadena_mando}
                        className='form-control'
                        name='cadena_mando'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_cadena_mando'
                        defaultValue={state.observacion_cadena_mando}
                        disabled={(edicion) ? true : false}
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>
                <div className='col-12 pt-4'>
                    <label>
                        7.- CONDUCTA
                    </label>
                    <p>
                        Forma en que la persona EVALUADA se comportó en el equipo y en sus acciones durante el despliegue. ¿Mostró flexibilidad, disponibilidad, puntualidad, buena actitud y se adaptó a las condiciones de acuerdo las situaciones prevalecientes?
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
                        defaultValue={state.observacion_conducta}
                        disabled={(edicion) ? true : false}
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>
                <div className='col-12 pt-4'>
                    <label>
                        8.- IDIOMA INGLÉS
                    </label>
                    <p>
                        ¿Recibió y transmite información en inglés adecuadamente?
                    </p>
                    <SelectCalificacion
                        defaultValue={state.idioma_ingles}
                        className='form-control'
                        name='idioma_ingles'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_idioma_ingles'
                        defaultValue={state.observacion_idioma_ingles}
                        disabled={(edicion) ? true : false}
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>
                <div className='col-12 pt-4'>
                    <label>
                        9.- APTITUD FISICA
                    </label>
                    <p>
                        ¿Demostró buena aptitud física en el desarrollo de sus actividades?
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
                        defaultValue={state.observacion_aptitud_fisica}
                        disabled={(edicion) ? true : false}
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>
                <div className='col-12 pt-4'>
                    <label>
                        10.- LIDERAZGO
                    </label>
                    <p>
                        ¿Muestra decisión e iniciativa, brinda buen ejemplo e instrucciones claras a sus subordinados o compañeros? Aplica los valores DEBER, INTEGRIDAD, RESPETO.
                    </p>
                    <SelectCalificacion
                        defaultValue={state.liderazgo}
                        className='form-control'
                        name='liderazgo'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_liderazgo'
                        defaultValue={state.observacion_liderazgo}
                        disabled={(edicion) ? true : false}
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>
                <div className='col-12 pt-4'>
                    <label>
                        11.-EQUIPO DE DESPLIEGUE
                    </label>
                    <p>
                        ¿El equipo de despliegue fue el adecuado para el cumplimento de la asignación?
                    </p>
                    <SelectCalificacion
                        defaultValue={state.equipo_despliegue}
                        className='form-control'
                        name='equipo_despliegue'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_equipo_despliegue'
                        defaultValue={state.observacion_equipo_despliegue}
                        disabled={(edicion) ? true : false}
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>
                <div className='col-12 pt-4'>
                    <label>
                        12.- USO DE EQUIPO DE GEOREFERENCIACIÓN
                    </label>
                    <p>
                        ¿Opera el GPS, AVENZA u otra herramienta de georreferenciación de forma autónoma?
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
                        defaultValue={state.observacion_uso_gps}
                        disabled={(edicion) ? true : false}
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>
                <div className='col-12 pt-4'>
                    <label>
                        13.- MANEJO DE BOMBA PORTATIL MARK
                    </label>
                    <p>
                        3 	¿Opera la motobomba y equipo de forma autónoma? ¿Utilizó adecuadamente los accesorios y equipo complementario?
                    </p>
                    <SelectCalificacion
                        defaultValue={state.uso_markIII}
                        className='form-control'
                        name='uso_markIII'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_uso_markIII'
                        defaultValue={state.observacion_uso_markIII}
                        disabled={(edicion) ? true : false}
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>
                <div className='col-12 pt-4'>
                    <label>
                        14.- MANEJO DE MOTOSIERRA
                    </label>
                    <p>
                        ¿Opera la motosierra y equipo de forma autónoma? ¿Utilizó adecuadamente los accesorios y equipo complementario?
                    </p>
                    <SelectCalificacion
                        defaultValue={state.uso_motosierra}
                        className='form-control'
                        name='uso_motosierra'
                        onChange={setInfo}
                    />
                    <br />
                    <textarea className='form-control'
                        name='observacion_uso_motosierra'
                        defaultValue={state.observacion_uso_motosierra}
                        disabled={(edicion) ? true : false}
                        onChange={setInfo}
                        placeholder='Observaciones...'
                    />
                </div>


                {(data.posicion_candidato === 'jefe_de_cuadrilla' || data.posicion_candidato === 'jefe_de_brigada') && <Fragment>
                    <div className='col-12 pt-4'>
                        <label>
                            15.- CAPACIDAD DE GESTIÓN
                        </label>
                        <p>
                            Resuelve situaciones urgentes y establece planes de contingencia, negocia al interior y al exterior del grupo para mejorar las condiciones del grupo. Analiza, evalúa, propone soluciones. ¿Se anticipa a los problemas y actúa antes de que aparezcan?.
                        </p>
                        <SelectCalificacion
                            defaultValue={state.capacidad_gestion}
                            className='form-control'
                            name='capacidad_gestion'
                            onChange={setInfo}
                        />
                        <br />
                        <textarea className='form-control'
                            name='observacion_capacidad_gestion'
                            defaultValue={state.observacion_capacidad_gestion}
                            disabled={(edicion) ? true : false}
                            onChange={setInfo}
                            placeholder='Observaciones...'
                        />
                    </div>
                </Fragment>
                }
                <div className='col-12 pt-4 d-flex justify-content-end'>

                    {
                        (!edicion) && <button className='btn btn-success '
                            onClick={handleSubmit}
                        >
                            Guardar
                    </button>
                    }
                </div>
                <div className='col-12 pt-4'>
                    <label className='form-control'>Sumatoria:</label>
                    <input className='form-control'
                        readOnly
                        value={sumatoria}
                    />
                </div>
            </div>
            <Button onClick={backTable}>Volver</Button>
        </Fragment>
    );
}

export default EvaluacionDesepenio;