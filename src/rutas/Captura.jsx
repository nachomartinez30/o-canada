import React, { useState } from 'react'
import Swal from 'sweetalert2'
import S1 from '../components/S1';
import S2 from '../components/S2';
import S3 from '../components/S3';
import S4 from '../components/S4';
import S5 from '../components/S5';
import S6 from '../components/S6';
import S7 from '../components/S7';
import S8 from '../components/S8';
import Finalizar from '../components/Finalizar';
import diferenciaFechasMeses from '../helpers/diferenciaFechasMeses';
import diferenciaFechasAnios from '../helpers/diferenciaFechasAnios';
import axios from 'axios';

// const API_REQUEST = 'http://localhost/o_canada/api/'
const API_REQUEST = 'http://187.218.230.38:81/o_canada/api/'
// const defaultCaptura = {
//     "fotografia": "C:\\fakepath\\898408.jpg",
//     "nombres": "oscar ignacio",
//     "apellido_paterno": "martine",
//     "apellido_materno": "diaz",
//     "fecha_nacimiento": "2020-12-31",
//     "curp": "MADO921030HJCRZS05",
//     "rfc": "MADO921030QD9",
//     "estado": "Jalisco",
//     "numero_telefonico_notificaciones": "3319638873",
//     "correo_electronico": "nachomartinez3010@gmail.com",
//     "posicion_candidato": "combatiente",
//     "sexo": "2",
//     "altura": "170",
//     "peso": "85",
//     "imc": 29.411764705882355,
//     "rechazo": false,
//     "motivo_rechazo": null,
//     "grupo_sanguineo": "o+",
//     "dependencia": "cnf",
//     "tipo_dependencia": "forestal",
//     "fecha_ingreso_dependencia": "2020-12-31",
//     "anios_experiencia": "1",
//     "nombre_beneficiario": "lorem",
//     "telefono_beneficiario": "lorem",
//     "correo_beneficiario": "correo",
//     "carta_antecedentes": "C:\\fakepath\\898408.jpg",
//     "antecedentes_fecha": "2020-01-01",
//     "pasaporte_archivo": "C:\\fakepath\\node.png",
//     "pasaporte_numero": "21212121212",
//     "pasaporte_fecha_cad": "2020-12-31",
//     "eta_visa_archivo": "C:\\fakepath\\node.png",
//     "documento_viajar_canada": "VISA",
//     "eta_visa_num": "1654",
//     "eta_visa_fecha_exp": "2020-12-31",
//     "eta_visa_fecha_cad": "2020-12-01",
//     "licencia_manejo": "C:\\fakepath\\node.png",
//     "tipo_licencia": "Nacional",
//     "licencia_fecha_cad": "2020-12-01",
//     "cert_toxicologico": "C:\\fakepath\\898408.jpg",
//     "cert_medico": "C:\\fakepath\\node.png",
// }



/* TODO: 
beneficiario del seguro
cambiar estado-municipio a Desplegable

vigencias dentro de 8 meses

10 min por examen
carga de certificacion
preguntas y posterior examen
si repruebe examen, no carga siguiente

eliminar validacion motosierra

variables idioma jefe de brigada y tecnico

comprobantes de registro

 */

/* TODO: manejo de sesiones */


const Captura = () => {
    const [infoBrigadista, setInfoBrigadista] = useState({})
    // const [infoBrigadista, setInfoBrigadista] = useState(defaultCaptura)
    const [secciones, setSecciones] = useState({
        s1: { status: 'faltante', visible: true },
        s2: { status: 'faltante', visible: false },
        s3: { status: 'faltante', visible: false },
        s4: { status: 'faltante', visible: false },
        s5: { status: 'faltante', visible: false },
        s6: { status: 'faltante', visible: false },
        s7: { status: 'faltante', visible: false },
        s8: { status: 'faltante', visible: false },
    })

    const seccionCompleta = { status: 'completo', visible: false };
    const seccionSiguiente = { status: 'actual', visible: true };


    

    const [rechazo, setRechazo] = useState({
        rechazo: false,
        motivo_rechazo: null
    })

    const msgFaltanCampos = () => {
        Swal.fire({
            icon: 'error',
            title: 'Todos los campos son necesarios'
        })
    }



    /* VALIDACIONES */
    const checkDataS1 = async () => {
        const {
            imc,
            nombres,
            apellido_paterno,
            apellido_materno,
            fecha_nacimiento,
            curp,
            rfc,
            estado,
            numero_telefonico_notificaciones,
            correo_electronico,
            posicion_candidato,
            sexo,
            altura,
            peso,
            grupo_sanguineo,
            dependencia,
            tipo_dependencia,
            fecha_ingreso_dependencia,
            anios_experiencia,
            nombre_beneficiario,
            telefono_beneficiario,
            correo_beneficiario } = infoBrigadista
        /* que no falte ningun dato */
        if (
            !imc || !nombres || !apellido_paterno ||
            !apellido_materno || !fecha_nacimiento ||
            !curp || !rfc || !estado || !numero_telefonico_notificaciones ||
            !correo_electronico || !posicion_candidato ||
            !sexo || !altura || !peso || !grupo_sanguineo || !dependencia ||
            !tipo_dependencia || !fecha_ingreso_dependencia ||
            !anios_experiencia || !nombre_beneficiario || !telefono_beneficiario ||
            !correo_beneficiario
        ) {
            msgFaltanCampos()
            return
        }
        const url = `${API_REQUEST}create_candidato`;
        try {
            const respuesta = await axios.post(url, infoBrigadista);

            if (respuesta.status === 200) {
                if (infoBrigadista.rechazo) {
                    // se ocultan las secciones
                    setSecciones({
                        s1: false,
                        s2: false,
                        s3: false,
                        s4: false,
                        s5: false,
                        s6: false,
                        s7: false,
                        s8: false,
                    })
                    // se muestra pantalla motivo de rechazo
                    setRechazo({
                        rechazo: true,
                        motivo_rechazo: infoBrigadista.motivo_rechazo
                    })
                } else {
                    /* TODO: axios actualizacion de INFOCandidato */
                    setSecciones({
                        ...secciones,
                        s1: seccionCompleta,
                        s2: seccionSiguiente,
                    })
                }
            }
        } catch (error) {
            if (error.response.status === 400) {
                Swal.fire({
                    icon: 'error',
                    title: 'Este candidato ya fué registrado.'
                })
                return
            }
            console.error('error', error);
        }
        /*  mostrar siguiente seccion*/
    }
    const checkDataS2 = async () => {
        const { carta_antecedentes,
            pasaporte_archivo,
            eta_visa_archivo,
            antecedentes_fecha,
            pasaporte_numero,
            pasaporte_fecha_cad,
            documento_viajar_canada,
            eta_visa_num,
            eta_visa_fecha_exp,
            eta_visa_fecha_cad,
            licencia_manejo,
            tipo_licencia,
            licencia_fecha_cad } = infoBrigadista
        /* revision de campos vacíos */
        if (
            !carta_antecedentes || !pasaporte_archivo || !eta_visa_archivo ||
            !antecedentes_fecha || !pasaporte_numero || !pasaporte_fecha_cad ||
            !documento_viajar_canada || !eta_visa_num || !eta_visa_fecha_exp ||
            !eta_visa_fecha_cad || !licencia_manejo || !tipo_licencia ||
            !licencia_fecha_cad
        ) {

            msgFaltanCampos()
            return
        }

        /* por cada fecha de licencia revisar vigencia */
        if (diferenciaFechasMeses(antecedentes_fecha) > 10 || diferenciaFechasMeses(pasaporte_fecha_cad) > 10 ||
            diferenciaFechasMeses(eta_visa_fecha_cad) > 10 || diferenciaFechasMeses(licencia_fecha_cad) > 10
        ) {
            // rechazarCandidato('vigencias menores a 10 meses')
        } else {
            /*   actualizacion de informacion por AXIOS */
            const url = `${API_REQUEST}candidato_update`;
            try {
                const respuesta = await axios.post(url, infoBrigadista);

                if (respuesta.status === 200) {
                    if (infoBrigadista.rechazo) {
                        // se ocultan las secciones
                        setSecciones({
                            s1: false,
                            s2: false,
                            s3: false,
                            s4: false,
                            s5: false,
                            s6: false,
                            s7: false,
                            s8: false,
                        })
                        // se muestra pantalla motivo de rechazo
                        setRechazo({
                            rechazo: true,
                            motivo_rechazo: infoBrigadista.motivo_rechazo
                        })
                    } else {
                        setSecciones({
                            ...secciones,
                            s2: seccionCompleta,
                            s3: seccionSiguiente,
                        })
                    }
                }
            } catch (error) {
                if (error.response.status === 400) {
                    Swal.fire({
                        icon: 'error',
                        title: 'No se encontró candidato'
                    })
                    return
                }
                console.error('error', error);
            }

        }
    }
    const checkDataS3 = async () => {
        const {
            cert_toxicologico,
            fecha_cert_toxicologico,
            cert_medico,
            fecha_cert_medico,
            padece_enfermedad,
            requiere_medicamentos_perm,
            experimento_dolor_pecho,
            experimento_dificultad_respirar,
            presion_arterial_sistolica_diastolica,
            enfermedad_cardiaca,
            cirugia_corazon,
            pulso_mayor_100,
            problemas_afeccion_osea,
            experiencia_personal_consejos,
            medico_personal_recomendo,
            autoevaluacion_salud
        } = infoBrigadista

        if (
            !cert_toxicologico || !fecha_cert_toxicologico || !cert_medico ||
            !fecha_cert_medico || !padece_enfermedad || !requiere_medicamentos_perm ||
            !experimento_dolor_pecho || !experimento_dificultad_respirar
            || !presion_arterial_sistolica_diastolica || !enfermedad_cardiaca ||
            !cirugia_corazon || !pulso_mayor_100 || !problemas_afeccion_osea ||
            !experiencia_personal_consejos || !medico_personal_recomendo || !autoevaluacion_salud
        ) {
            msgFaltanCampos()
            return
        }

        /* TODO: rechazo si alguna respuesta is true */
        // if (
        //     padece_enfermedad === 'si' || requiere_medicamentos_perm === 'si' ||
        //     experimento_dolor_pecho === 'si' || experimento_dificultad_respirar === 'si' ||
        //     presion_arterial_sistolica_diastolica === 'si' ||
        //     enfermedad_cardiaca === 'si' || cirugia_corazon === 'si' ||
        //     pulso_mayor_100 === 'si' || problemas_afeccion_osea === 'si' ||
        //     experiencia_personal_consejos === 'si' || medico_personal_recomendo === 'si'
        // ) {
        //     // rechazarCandidato('problemas de salud')
        // } else {
        /*  actualizacion de informacion por AXIOS */
        const url = `${API_REQUEST}candidato_update`;
        try {
            const respuesta = await axios.post(url, infoBrigadista);

            if (respuesta.status === 200) {
                if (infoBrigadista.rechazo) {
                    // se ocultan las secciones
                    setSecciones({
                        s1: false,
                        s2: false,
                        s3: false,
                        s4: false,
                        s5: false,
                        s6: false,
                        s7: false,
                        s8: false,
                    })
                    // se muestra pantalla motivo de rechazo
                    setRechazo({
                        rechazo: true,
                        motivo_rechazo: infoBrigadista.motivo_rechazo
                    })
                } else {
                    setSecciones({
                        ...secciones,
                        s3: seccionCompleta,
                        s4: seccionSiguiente,
                    })
                }
            }
        } catch (error) {
            if (error.response.status === 400) {
                Swal.fire({
                    icon: 'error',
                    title: 'No se encontró candidato'
                })
                return
            }
            console.error('error', error);
        }
    }
    const checkDataS4 = async () => {
        /* TODO:completar update AXIOS */
        setSecciones({
            ...secciones,
            s4: seccionCompleta,
            s5: seccionSiguiente,
        })
    }
    const checkDataS5 = async () => {
        /* TODO:completar update AXIOS */
        setSecciones({
            ...secciones,
            s5: seccionCompleta,
            s6: seccionSiguiente,
        })
    }
    const checkDataS6 = async () => {
        const { opera_autonoma_gps,
            opera_autonoma_mark3,
            opera_autonoma_motosierra } = infoBrigadista

        if (!opera_autonoma_gps ||
            !opera_autonoma_mark3 ||
            !opera_autonoma_motosierra) {
            msgFaltanCampos()
            return
        }
        /* Tiene todo el equipo */
        if (opera_autonoma_gps === 'no' ||
            opera_autonoma_mark3 === 'no' ||
            opera_autonoma_motosierra === 'no') {
            // rechazarCandidato('falta de habilidad')
        } else {
            /* actualizacion de informacion por AXIOS */
            const url = `${API_REQUEST}candidato_update`;
            try {
                const respuesta = await axios.post(url, infoBrigadista);

                if (respuesta.status === 200) {
                    if (infoBrigadista.rechazo) {
                        // se ocultan las secciones
                        setSecciones({
                            s1: false,
                            s2: false,
                            s3: false,
                            s4: false,
                            s5: false,
                            s6: false,
                            s7: false,
                            s8: false,
                        })
                        // se muestra pantalla motivo de rechazo
                        setRechazo({
                            rechazo: true,
                            motivo_rechazo: infoBrigadista.motivo_rechazo
                        })
                    } else {
                        setSecciones({
                            ...secciones,
                            s6: seccionCompleta,
                            s7: seccionSiguiente,
                        })
                    }
                }
            } catch (error) {
                if (error.response.status === 400) {
                    Swal.fire({
                        icon: 'error',
                        title: 'No se encontró candidato'
                    })
                    return
                }
                console.error('error', error);
            }

        }
    }
    const checkDataS7 = async () => {
        const { tiene_epp_completo,
            tiene_mochila_linea,
            tiene_duffel_bag,
            tiene_casa_campania,
            tiene_sleeping_bag,
            tiene_sleeping_pad } = infoBrigadista

        if (
            !tiene_epp_completo ||
            !tiene_mochila_linea ||
            !tiene_duffel_bag ||
            !tiene_casa_campania ||
            !tiene_sleeping_bag ||
            !tiene_sleeping_pad
        ) {
            msgFaltanCampos()
            return
        }

        if (tiene_epp_completo === 'no' ||
            tiene_mochila_linea === 'no' ||
            tiene_duffel_bag === 'no' ||
            tiene_casa_campania === 'no' ||
            tiene_sleeping_bag === 'no' ||
            tiene_sleeping_pad === 'no') {
            // rechazarCandidato('falta de equipo')
            return
        }

        const url = `${API_REQUEST}candidato_update`;
        try {
            const respuesta = await axios.post(url, infoBrigadista);
            if (respuesta.status === 200) {
                if (infoBrigadista.rechazo) {
                    // se ocultan las secciones
                    setSecciones({
                        s1: false,
                        s2: false,
                        s3: false,
                        s4: false,
                        s5: false,
                        s6: false,
                        s7: false,
                        s8: false,
                    })
                    // se muestra pantalla motivo de rechazo
                    setRechazo({
                        rechazo: true,
                        motivo_rechazo: infoBrigadista.motivo_rechazo
                    })
                } else {
                    setSecciones({
                        ...secciones,
                        s7: seccionCompleta,
                        s8: seccionSiguiente,
                    })
                }
            }
        } catch (error) {
            if (error.response.status === 400) {
                Swal.fire({
                    icon: 'error',
                    title: 'No se encontró candidato'
                })
                return
            }
            console.error('error', error);
        }

    }
    const checkDataS8 = async () => {
        const url = `${API_REQUEST}candidato_update`;
        try {
            const respuesta = await axios.post(url, infoBrigadista);

            if (respuesta.status === 200) {
                if (infoBrigadista.rechazo) {
                    // se ocultan las secciones
                    setSecciones({
                        s1: false,
                        s2: false,
                        s3: false,
                        s4: false,
                        s5: false,
                        s6: false,
                        s7: false,
                        s8: false,
                    })
                    // se muestra pantalla motivo de rechazo
                    setRechazo({
                        rechazo: true,
                        motivo_rechazo: infoBrigadista.motivo_rechazo
                    })
                } else {
                    setSecciones({
                        ...secciones,
                        s8: seccionCompleta
                    })
                    Swal.fire(
                        'Buen trabajo',
                        'Se le notificará sobre su proceso de seleccion',
                        'success'
                    )
                }
            }
        } catch (error) {
            if (error.response.status === 400) {
                Swal.fire({
                    icon: 'error',
                    title: 'No se encontró candidato'
                })
                return
            }
            console.error('error', error);
        }

    }

    return (
        <div className='container'>
            {secciones.s1.visible &&
                <S1
                    state={infoBrigadista}
                    setState={setInfoBrigadista}
                    checkData={checkDataS1}
                />
            }
            {/* S2 y 3 estan cambiados en hoja de requerimientos */}
            {secciones.s2.visible &&
                <S3
                    state={infoBrigadista}
                    setState={setInfoBrigadista}
                    checkData={checkDataS2}
                />
            }
            {/* S2 y 3 estan cambiados en hoja de requerimientos */}
            {secciones.s3.visible &&
                <S2
                    state={infoBrigadista}
                    setState={setInfoBrigadista}
                    checkData={checkDataS3}
                />
            }

            {secciones.s4.visible &&
                <S4
                    state={infoBrigadista}
                    setState={setInfoBrigadista}
                    checkData={checkDataS4}
                />
            }
            {secciones.s5.visible &&
                <S5
                    state={infoBrigadista}
                    setState={setInfoBrigadista}
                    checkData={checkDataS5}
                />
            }
            {secciones.s6.visible &&
                <S6
                    state={infoBrigadista}
                    setState={setInfoBrigadista}
                    checkData={checkDataS6}
                />
            }
            {secciones.s7.visible &&
                <S7
                    state={infoBrigadista}
                    setState={setInfoBrigadista}
                    checkData={checkDataS7}
                />
            }
            {secciones.s8.visible &&
                <S8
                    state={infoBrigadista}
                    setState={setInfoBrigadista}
                    checkData={checkDataS8}
                />
            }
            {rechazo.rechazo && <Finalizar />}
        </div>
    );
}

export default Captura;