import React, { useState, useEffect } from 'react'
import SelectSiNo from '../singles/SelectSiNo'
import ExSCI100 from '../components/ExSCI100';
import AlertaSiguiente from '../singles/AlertaSiguiente'
import { Modal, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import AlertError from '../singles/AlertError';
import moment from 'moment'

const S4 = (props) => {
    const { state, setState, checkData, files, setStateFiles } = props

    const [showExam, setShowExam] = useState(false)

    const [preguntas_smi_100, setPreguntas_smi_100] = useState(false)
    const [examResp, setExamResp] = useState({
        curp: state.curp,
        "1_asegurar_comunicacion": "x",
        "2_implementando_actividades": "x",
        "3_actividades_principales": "x",
        "4_primera_tarea_personal": "x",
        "5_instalacion_incidente": "x",
        "6_equipo_intervencion": "x",
        "7_incidente_complejo": "x",
        "8_retirarse_incidente": "x",
        "9_alcance_control": "x",
        "10_entidades_organizacionales": "x",
        "11_sistema_comando": "x",
        "12_contiene_informacion": "x",
        "13_recursos_areas": "x",
        "14_reunion_informativa": "x",
        "15_documento_proporciona": "x",
        "16_formato_encuentran": "x",
        "17_formato_hospitales": "x",
        "18_formato_trabajo": "x",
        "19_plan_accion": "x",
        "20_asignado_incidente": "x"
    })
    const [smi_100Examen, setSmi_100Examen] = useState(false)

    /* TIMER */

    // initialize timeLeft with the seconds prop
    const [timeLeft, setTimeLeft] = useState(1500000000000);

    useEffect(() => {
        // exit early when we reach 0
        if (!timeLeft) {
            terminarExamen();
        }
        // save intervalId to clear the interval when the
        // component re-renders
        const intervalId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);

        // clear interval on re-render to avoid memory leaks
        return () => clearInterval(intervalId)
        // add timeLeft as a dependency to re-rerun the effect
        // when we update it
    }, [timeLeft]);

    const handleShow = () => {
        setTimeLeft(600)
        setShowExam(true)
    }

    const terminarExamen = async () => {
        try {
            const respuesta = await axios.post(process.env.REACT_APP_BACKEN_URL +'smi100_exam', examResp);

            if (respuesta.status === 200) {
                if (respuesta.data.calificacion === 'reprobado') {
                    setState({
                        ...state,
                        rechazo: true,
                        motivo_rechazo: 'no aprobo examen smi_100',
                        examen_smi_100: respuesta.data.calificacion
                    })
                } else {
                    setState({
                        ...state,
                        rechazo: false,
                        motivo_rechazo: null,
                        examen_smi_100: respuesta.data.calificacion
                    })
                }
                setShowExam(false)
                setSmi_100Examen(true)
            }
        } catch (error) {
            AlertError('Error', error)
        }
        console.log('envio de resultados');
    }
    const handleClose = () => {
        Swal.fire({
            title: 'Esta seguro que desea terminar la prueba?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Continuar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.value) {
                terminarExamen(examResp)
            }
        })
    };

    const setInfo = (input) => {
        if (input.target.name === 'sci_smi_100' || input.target.name === 'sci_smi_200') {
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

    const siguienteExamen = () => {
        Swal.fire({
            title: 'Esta por iniciar una prueba',
            text: "Asegurese de tener una conexion estable de internet.\n" +
                "Cuenta con 10 minutos para responderla.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Continuar',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.value) {
                /* INICIAR EXAMEN */
                handleShow(true)
            }
        })
        // setSmi_100Examen(true)
    }

    return (
        <div className='row body_wrap'>
            <Modal
                show={showExam}
                dialogClassName='modal-90w'
            >
                <Modal.Header>
                    <Modal.Title>
                        SCI/SMI 1005
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tiempo Restante
                    <h2>
                        {moment.utc(moment.duration(timeLeft, 'seconds').asMilliseconds()).format('m:ss ')}
                    </h2>
                    {/* <ExS190 /> */}
                    <ExSCI100
                        state={examResp}
                        setState={setExamResp}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button
                        variant="primary"
                        onClick={handleClose}
                    >
                        Terminar
                    </Button>
                </Modal.Footer>
            </Modal>


            {/* SCI/SMI 100 */}
            <div className='col-12 col-md-6'>
                <label className="control-label pt-2">SCI/SMI 100</label>
                <input
                    className="form-control myInput"
                    name='sci_smi_100'
                    type='file'
                    accept="application/pdf"
                    onChange={setInfo}
                    onBlur={() => { setPreguntas_smi_100((files.sci_smi_100_fl && files.sci_smi_200_fl) ? true : false) }}
                    onMouseLeave={() => { setPreguntas_smi_100((files.sci_smi_100_fl && files.sci_smi_200_fl) ? true : false) }}
                    placeholder='Ingrese SCI/SMI 100...'
                />
            </div>

            {/* SCI/SMI 200 */}
            <div className='col-12 col-md-6'>
                <label className="control-label pt-2">SCI/SMI 200</label>
                <input
                    className="form-control myInput"
                    name='sci_smi_200'
                    type='file'
                    accept="application/pdf"
                    onChange={setInfo}
                    onBlur={() => { setPreguntas_smi_100((files.sci_smi_100_fl && files.sci_smi_200_fl) ? true : false) }}
                    onMouseLeave={() => { setPreguntas_smi_100((files.sci_smi_100_fl && files.sci_smi_200_fl) ? true : false) }}
                    placeholder='Ingrese SCI/SMI 200...'
                />
            </div>

            {
                preguntas_smi_100 && <React.Fragment>
                    {/* ¿El evaluado ha participado en eventos planeados o no...? */}
                    <div className='col-12'>
                        <label className="control-label danger pt-2">¿El evaluado ha participado en eventos planeados o no planeados atendidos bajo el SCI?</label>
                        <SelectSiNo
                            className="form-control myInput"
                            name='eventos_plnaeados_sci'
                            onChange={setInfo}
                        />
                    </div>

                    {/* ¿El evaluado ha participado en eventos planeados o no planeados...? */}
                    <div className='col-12'>
                        <label className="control-label danger pt-2">¿El evaluado ha participado en eventos planeados o no planeados atendidos bajo el SCI fuera de su país?</label>
                        <SelectSiNo
                            className="form-control myInput"
                            name='eventos_plnaeados_sci_fuera'
                            onChange={setInfo}
                        />
                    </div>

                    {/* ¿El evaluado ha ocupado en eventos planeados o no estructura...? */}
                    <div className='col-12'>
                        <label className="control-label danger pt-2">¿El evaluado ha ocupado en eventos planeados o no planeados alguna posición dentro de la estructura del SCI?</label>
                        <SelectSiNo
                            className="form-control myInput"
                            name='eventos_plnaeados_dentro_estructura'
                            onChange={setInfo}
                        />
                    </div>

                    {/* SCI/SMI 200 */}
                    {state.eventos_plnaeados_dentro_estructura === '1' && <React.Fragment>
                        <div className='col-5'>
                            <label className="control-label pt-2">Indique cual</label>
                            <input
                                className="form-control myInput"
                                name='sci_cual'
                                type=''
                                onChange={setInfo}
                                placeholder='Indique cual...'
                            />
                        </div>
                    </React.Fragment>}

                    {/* ¿El evaluado pertenece a algún Equipo de Manejo de Incidentes? */}
                    <div className='col-7'>
                        <label className="control-label danger pt-2">¿El evaluado pertenece a algún Equipo de Manejo de Incidentes?</label>
                        <SelectSiNo
                            className="form-control myInput"
                            name='evaluado_menejo_incidentes'
                            onChange={setInfo}
                        />
                    </div>

                </React.Fragment>
            }

            {/* BTN SCI/SMI 100 */}
            <div className='col-12 pt-5 btn-margin'>
                <button
                    hidden={(state.eventos_plnaeados_sci &&
                        state.eventos_plnaeados_sci_fuera &&
                        state.eventos_plnaeados_dentro_estructura &&
                        state.evaluado_menejo_incidentes && !smi_100Examen) ? false : true}

                    onClick={siguienteExamen}
                    className='btn btn-warning'
                //  onClick={() =>AlertaSiguiente("Si continúa, no será posible volver a esta seccion",checkData)}
                >Tomar examen SCI/SMI 100-200</button>
            </div>


            <div className='col-12 pt-5 btn-margin'>
                <button
                    disabled={!smi_100Examen}
                    className='btn btn-primary'
                     onClick={() =>AlertaSiguiente("Si continúa, no será posible volver a esta seccion",checkData)}
                >Continuar</button>
            </div>
        </div>
    );
}

export default S4;