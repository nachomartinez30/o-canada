import React, { useState, useEffect } from 'react'
import ExS190 from '../components/ExS190';
import AlertaSiguiente from '../singles/AlertaSiguiente'
import { Modal, Button } from 'react-bootstrap';
import Swal from 'sweetalert2';
import axios from 'axios';
import AlertError from '../singles/AlertError';
import moment from 'moment'

const S5 = (props) => {
    const { state, setState, checkData, setStateFiles, files } = props
    const [showExam, setShowExam] = useState(false)

    const [examResp, setExamResp] = useState({
        curp: state.curp,
        "1_partes_incendio": "x",
        "2_triangulo_fuego": "x",
        "3_comportamiento_fuego": "x",
        "4_terreno_desconocido": "x",
        "5_combate_incendios": "x",
        "6_significa_vcrz": "x",
        "7_carga_combustible": "x",
        "8_linea_control": "x",
        "9_movimiento_incendio": "x",
        "10_conduce_incendio": "x",
        "11_topografia_elemento": "x",
        "12_elemento_variable": "x",
        "13_referente_combustible": "x",
        "14_tipos_combustible": "x",
        "15_agua_combustible": "x",
        "16_denominadores_comunes": "x",
        "17_lugares_combatiente": "x",
        "18_nivel_minimo": "x",
        "19_accion_conocer": "x",
        "20_cantidad_humedad": "x",
    })
    const [preguntas_s_190, setPreguntas_s_190] = useState(false)
    const [sci_190Examen, setSci_190Examen] = useState(false)

    const terminarExamen = async () => {
        try {
            const respuesta = await axios.post(process.env.REACT_APP_BACKEN_URL + 's_190_exam', examResp);

            if (respuesta.status === 200) {
                if (respuesta.data.calificacion === 'reprobado') {
                    setState({
                        ...state,
                        rechazo: true,
                        motivo_rechazo: 'no aprobo examen si_190',
                        examen_s_190: respuesta.data.calificacion
                    })
                } else {
                    setState({
                        ...state,
                        rechazo: false,
                        motivo_rechazo: null,
                        examen_s_190: respuesta.data.calificacion
                    })
                }
                setShowExam(false)
                setSci_190Examen(true)
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
    const handleShow = () => {
        setTimeLeft(600)
        setShowExam(true)
    }

    const setInfo = (input) => {
        if (input.target.name === 's_190' || input.target.name === 's_130') {
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

    const siguienteExamen = () => {
        // AlertExito('Examen')
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
                        S-130/S-190
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    Tiempo Restante
                    <h2>
                        {moment.utc(moment.duration(timeLeft, 'seconds').asMilliseconds()).format('m:ss ')}
                    </h2>
                    {/* <ExS190 /> */}
                    <ExS190
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


            {/* S-190 */}
            <div className='col-6'>
                <label className="control-label pt-2">S-190</label>
                <input
                    className="form-control myInput"
                    name='s_190'
                    type='file'
                    accept="application/pdf"
                    onChange={setInfo}
                    onBlur={() => { setPreguntas_s_190((files.s_190_fl && files.s_130_fl) ? true : false) }}
                    onMouseLeave={() => { setPreguntas_s_190((files.s_190_fl && files.s_130_fl) ? true : false) }}
                    placeholder='Ingrese S-190...'
                />
            </div>

            {/* S-130 */}
            <div className='col-6'>
                <label className="control-label pt-2">S-130</label>
                <input
                    className="form-control myInput"
                    name='s_130'
                    type='file'
                    accept="application/pdf"
                    onChange={setInfo}
                    onBlur={() => { setPreguntas_s_190((files.s_190_fl && files.s_130_fl) ? true : false) }}
                    onMouseLeave={() => { setPreguntas_s_190((files.s_190_fl && files.s_130_fl) ? true : false) }}
                    placeholder='Ingrese S-130...'
                />
            </div>

            {preguntas_s_190 && <React.Fragment>
                {/* S-130 */}
                <div className='col-12'>
                    <label className="control-label pt-2">¿Cuántas veces ha sido asignado como recurso nacional en incendios forestales en una entidad federativa distinta a su base?</label>
                    <input
                        className="form-control myInput"
                        name='asignado_recurso_nacional'
                        type='number'
                        onChange={setInfo}
                        placeholder='¿Cuántas veces ha sido asignado como recurso nacional en incendios forestales...'
                    />
                </div>

                {/* S-130 */}
                <div className='col-12'>
                    <label className="control-label pt-2">¿Cuántas veces ha sido asignado como recurso en incendios forestales en otro país?</label>
                    <input
                        className="form-control myInput"
                        name='asignado_recurso_otro_pais'
                        type='number'
                        onChange={setInfo}
                        placeholder='¿Cuántas veces ha sido asignado como recurso en incendios forestales en otro país?'
                    />
                </div>


            </React.Fragment>}

            {/* BTN SCI/SMI 100 */}
            <div className='col-12 pt-5 btn-margin'>
                
                <button
                    hidden={(state.asignado_recurso_nacional && state.asignado_recurso_otro_pais && !sci_190Examen) ? false : true}
                    onClick={siguienteExamen}
                    className='btn btn-warning'
                >Tomar examen S-190/S-130</button>
            </div>


            {/* BTN Continuar */}
            <div className='col-12 pt-5 btn-margin'>
                <button
                    disabled={!sci_190Examen}
                    className='btn btn-primary'
                     onClick={() =>AlertaSiguiente(checkData)}
                >Continuar</button>
            </div>
        </div>
    );
}

export default S5;