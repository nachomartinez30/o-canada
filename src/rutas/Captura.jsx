import React, { useState } from 'react'
import Swal from 'sweetalert2'
import S1 from '../components/S1';
import S3 from '../components/S3';
import S2 from '../components/S2';
import S4 from '../components/S4';
import S5 from '../components/S5';
import S6 from '../components/S6';
import S7 from '../components/S7';
import S8 from '../components/S8';
import Finalizar from '../components/Finalizar';
import axios from 'axios';

const API_REQUEST = 'http://localhost/o_canada/api/'
// const API_REQUEST = 'http://187.218.230.38:81/o_canada/api/'

const defaultCaptura = {
    "fotografia": "C:\\fakepath\\898408.jpg",
    "nombres": "oscar ignacio",
    "apellido_paterno": "martine",
    "apellido_materno": "diaz",
    "fecha_nacimiento": "2020-12-31",
    "curp": "MADO921030HJCRZS05",
    "rfc": "MADO921030QD9",
    "estado": "Jalisco",
    "numero_telefonico_notificaciones": "3319638873",
    "correo_electronico": "nachomartinez3010@gmail.com",
    "posicion_candidato": "combatiente",
    "sexo": "2",
    "altura": "170",
    "peso": "85",
    "imc": 29.411764705882355,
    "sci_smi_100": "C:\\fakepath\\898408.jpg",
    "sci_smi_200": "C:\\fakepath\\898408.jpg",
    "eventos_plnaeados_sci": "1",
    "eventos_plnaeados_sci_fuera": "1",
    "eventos_plnaeados_dentro_estructura": "1",
    "sci_cual": "Lorem",
    "evaluado_menejo_incidentes": "1"
}




/* TODO: 10 min por examen */
/* TODO: manejo de sesiones */



const Captura = () => {
    // const [infoBrigadista, setInfoBrigadista] = useState({    })
    const [infoBrigadista, setInfoBrigadista] = useState(defaultCaptura)

    const [secciones, setSecciones] = useState({
        s1: { status: 'faltante', visible: false },
        s2: { status: 'faltante', visible: false },
        s3: { status: 'faltante', visible: false },
        s4: { status: 'faltante', visible: !false },
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
            anios_experiencia,
            fotografia,
            apellido_paterno,
            apellido_materno,
            nombres,
            curp,
            fecha_nacimiento,
            sexo,
            rfc,
            estado,
            municipio,
            numero_telefonico_notificaciones,
            correo_electronico,
            posicion_candidato,
            dependencia,
            tipo_dependencia,
            fecha_ingreso_dependencia,
            puesto_en_dependencia,
            funciones_dependencia,
            nombre_beneficiario,
            telefono_beneficiario,
            correo_beneficiario } = infoBrigadista
        /* que no falte ningun dato */
        if (
            !anios_experiencia ||
            !fotografia ||
            !apellido_paterno ||
            !apellido_materno ||
            !nombres ||
            !curp ||
            !fecha_nacimiento ||
            !sexo ||
            !rfc ||
            !estado ||
            !municipio ||
            !numero_telefonico_notificaciones ||
            !correo_electronico ||
            !posicion_candidato ||
            !dependencia ||
            !tipo_dependencia ||
            !fecha_ingreso_dependencia ||
            !puesto_en_dependencia ||
            !funciones_dependencia ||
            !nombre_beneficiario ||
            !telefono_beneficiario ||
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
                    /*  axios actualizacion de INFOCandidato */
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
    const checkDataS3 = async () => {
        const { sexo,
            altura,
            peso,
            imc,
            grupo_sanguineo,
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
            autoevaluacion_salud } = infoBrigadista

        if (
            !sexo || !altura || !peso || !imc || !grupo_sanguineo ||
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
        const { opera_autonoma_gps, opera_autonoma_mark3, opera_autonoma_motosierra } = infoBrigadista

        if (!opera_autonoma_gps || !opera_autonoma_mark3 || !opera_autonoma_motosierra) {
            msgFaltanCampos()
            return
        }
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
                    /* Muestra ppantalla de rechazo */
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
        const { nivel_ingles, toeic_toefl, l_280, s_290, cert_intern_incendios, cert_intern_ate_emerg_med,
            examen_toeic_toefl_punt, examen_toeic_toefl_archivo, l_280_file, s_290_file,
            cert_intern_incendios_file, cert_intern_ate_emerg_med_file, posicion_candidato } = infoBrigadista
        if (posicion_candidato === 'jefe_de_cuadrilla' || posicion_candidato === 'tecnico') {
            if (!nivel_ingles || !toeic_toefl || !examen_toeic_toefl_punt || !examen_toeic_toefl_archivo ||
                !cert_intern_ate_emerg_med_file || !l_280 || !s_290 || !cert_intern_incendios ||
                !cert_intern_ate_emerg_med || !l_280_file || !s_290_file || !cert_intern_incendios_file
            ) {
                msgFaltanCampos()
                return
            }
        } else {
            if (!l_280 || !s_290 || !cert_intern_incendios ||
                !cert_intern_ate_emerg_med || !l_280_file ||
                !s_290_file || !cert_intern_incendios_file
            ) {
                msgFaltanCampos()
                return
            }
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

            {secciones.s2.visible &&
                <S2
                    state={infoBrigadista}
                    setState={setInfoBrigadista}
                    checkData={checkDataS2}
                />
            }
            {/* S2 y 3 estan cambiados en hoja de requerimientos */}
            {secciones.s3.visible &&
                <S3
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
            {/* {rechazo.rechazo && <Finalizar />} */}
            {rechazo.rechazo && <Finalizar />}
        </div>
    );
}

export default Captura;