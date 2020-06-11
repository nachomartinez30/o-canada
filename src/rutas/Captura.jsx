import React, { useState, useContext, useEffect } from 'react'
import imagen_persona from '../assets/user.svg'
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
import AlertError from '../singles/AlertError';
import Login from '../components/Login';
/* CONTEXT */

import candidatoContext from "./../context/candidato/candidatoContext";
const API_REQUEST = process.env.REACT_APP_BACKEN_URL

/* TODO: */

const Captura = () => {

    const candidatos = useContext(candidatoContext);

    const [infoBrigadista, setInfoBrigadista] = useState(candidatos.candidatos.infoBrigadista)
    // const [infoBrigadista, setInfoBrigadista] = useState()
    const [archivos, setArchivos] = useState({})

    const [secciones, setSecciones] = useState({
        login: { status: 'faltante', visible: !false },
        s1: { status: 'faltante', visible: false },
        s2: { status: 'faltante', visible: false },
        s3: { status: 'faltante', visible: false },
        s4: { status: 'faltante', visible: false },
        s5: { status: 'faltante', visible: false },
        s6: { status: 'faltante', visible: false },
        s7: { status: 'faltante', visible: false },
        s8: { status: 'faltante', visible: false },
    })

    const seccionCompleta = { status: 'completa', visible: false };
    const seccionSiguiente = { status: 'actual', visible: true };

    useEffect(() => {
        if (candidatos.candidatos.infoBrigadista.rechazo) {
            setRechazo({
                rechazo: true,
                motivo_rechazo: infoBrigadista.motivo_rechazo
            })
        }
        if (secciones.s8.status === 'completa') {
            setRechazo({
                rechazo: true,
                motivo_rechazo: null
            })
        }
        setInfoBrigadista(candidatos.candidatos.infoBrigadista)
    }, [secciones])


    const [rechazo, setRechazo] = useState({
        rechazo: false,
        motivo_rechazo: null
    })

    const msgFaltanCampos = () => {
        console.log(candidatos);
        Swal.fire({
            icon: 'error',
            title: 'Todos los campos son necesarios'
        })
    }

    /* VALIDACIONES */
    const checkDataS1 = async () => {

        const {
            anios_experiencia,
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
            correo_beneficiario, region } = infoBrigadista
        /* que no falte ningun dato */
        if (
            !anios_experiencia ||
            !region ||
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
            !correo_beneficiario || !archivos.fotografia_fl
        ) {
            msgFaltanCampos()
            return
        }
        // SE AGREGA A CONTEXT
        candidatos.candidatos.agregarCandidato({
            ...candidatos.candidatos,
            infoBrigadista
        })
        const url = `${API_REQUEST}candidato_update`;
        try {

            const formData = new FormData();
            formData.append("file", archivos.fotografia_fl[0]);
            formData.append("curp", infoBrigadista.curp);
            formData.append("name", "fotografia");

            const archivo = await axios.post(`${API_REQUEST}carga_archivo`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const respuesta = await axios.post(url, { data: infoBrigadista, secuencia: secciones });
            if (respuesta.status === 200 && archivo.status === 200) {
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
                        login: false
                    })
                    // se muestra pantalla motivo de rechazo
                    setRechazo({
                        rechazo: true,
                        motivo_rechazo: infoBrigadista.motivo_rechazo
                    })
                } else {
                    /*  axios actualizacion de INFOCandidato */
                    /* Agrega al context general */

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

        const {
            pasaporte_numero,
            pasaporte_fecha_cad,
            documento_viajar_canada,
            eta_visa_num,
            eta_visa_fecha_exp,
            eta_visa_fecha_cad,
            tipo_licencia,
            licencia_fecha_cad } = infoBrigadista
        const { pasaporte_archivo_fl, eta_visa_archivo_fl, licencia_manejo_fl } = archivos
        /* revision de campos vacíos */
        if (
            !pasaporte_numero || !pasaporte_fecha_cad ||
            !documento_viajar_canada || !eta_visa_num || !eta_visa_fecha_exp ||
            !eta_visa_fecha_cad || !tipo_licencia || !licencia_fecha_cad ||
            !pasaporte_archivo_fl || !eta_visa_archivo_fl ||
            !licencia_manejo_fl
        ) {
            msgFaltanCampos()
            return
        }

        // SE AGREGA A CONTEXT
        candidatos.candidatos.agregarCandidato({
            ...candidatos.candidatos,
            infoBrigadista
        })

        /* PASAPORTE_ARCHIVO */
        const formData_pasaporte_archivo = new FormData();
        formData_pasaporte_archivo.append("file", archivos.pasaporte_archivo_fl[0]);
        formData_pasaporte_archivo.append("curp", infoBrigadista.curp);
        formData_pasaporte_archivo.append("name", "pasaporte_archivo");
        /* ETA_VISA_ARCHIVO */
        const formData_eta_visa_archivo = new FormData();
        formData_eta_visa_archivo.append("file", archivos.eta_visa_archivo_fl[0]);
        formData_eta_visa_archivo.append("curp", infoBrigadista.curp);
        formData_eta_visa_archivo.append("name", infoBrigadista.documento_viajar_canada);
        /* LICENCIA_MANEJO */
        const formData_licencia_manejo = new FormData();
        formData_licencia_manejo.append("file", archivos.licencia_manejo_fl[0]);
        formData_licencia_manejo.append("curp", infoBrigadista.curp);
        formData_licencia_manejo.append("name", "licencia_manejo");




        /*   actualizacion de informacion por AXIOS */
        const url = `${API_REQUEST}candidato_update`;

        try {
            const archivo_pasaporte_archivo = await axios.post(`${API_REQUEST}carga_archivo`, formData_pasaporte_archivo, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const archivo_eta_visa_archivo = await axios.post(`${API_REQUEST}carga_archivo`, formData_eta_visa_archivo, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const archivo_licencia_manejo = await axios.post(`${API_REQUEST}carga_archivo`, formData_licencia_manejo, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const respuesta = await axios.post(url, { data: infoBrigadista, secuencia: secciones });

            if (
                respuesta.status === 200 &&
                archivo_pasaporte_archivo.status === 200 &&
                archivo_eta_visa_archivo.status === 200 &&
                archivo_licencia_manejo.status === 200
            ) {
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
                        login: false
                    })
                    // se muestra pantalla motivo de rechazo
                    setRechazo({
                        rechazo: true,
                        motivo_rechazo: infoBrigadista.motivo_rechazo
                    })
                } else {
                    /* Agrega al context general */

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
            fecha_cert_toxicologico,
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
        } = infoBrigadista

        const { cert_toxicologico_fl, cert_medico_fl } = archivos

        if (
            !sexo || !altura || !peso || !imc || !grupo_sanguineo ||
            !cert_toxicologico_fl || !fecha_cert_toxicologico || !cert_medico_fl ||
            !fecha_cert_medico || !padece_enfermedad || !requiere_medicamentos_perm ||
            !experimento_dolor_pecho || !experimento_dificultad_respirar
            || !presion_arterial_sistolica_diastolica || !enfermedad_cardiaca ||
            !cirugia_corazon || !pulso_mayor_100 || !problemas_afeccion_osea ||
            !experiencia_personal_consejos || !medico_personal_recomendo
        ) {

            msgFaltanCampos()
            return
        }

        // SE AGREGA A CONTEXT
        candidatos.candidatos.agregarCandidato({
            ...candidatos.candidatos,
            infoBrigadista
        })

        const formData_cert_toxicologico = new FormData();
        formData_cert_toxicologico.append("file", archivos.cert_toxicologico_fl[0]);
        formData_cert_toxicologico.append("curp", infoBrigadista.curp);
        formData_cert_toxicologico.append("name", 'cert_toxicologico');

        const formData_cert_medico = new FormData();
        formData_cert_medico.append("file", archivos.cert_medico_fl[0]);
        formData_cert_medico.append("curp", infoBrigadista.curp);
        formData_cert_medico.append("name", 'cert_medico');
        const url = `${API_REQUEST}candidato_update`;
        try {
            /*  actualizacion de informacion por AXIOS */
            const archivo_cert_toxicologico = await axios.post(`${API_REQUEST}carga_archivo`, formData_cert_toxicologico, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const archivo_cert_medico = await axios.post(`${API_REQUEST}carga_archivo`, formData_cert_medico, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const respuesta = await axios.post(url, { data: infoBrigadista, secuencia: secciones });

            if (respuesta.status === 200 && archivo_cert_toxicologico.status === 200 && archivo_cert_medico.status === 200) {
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
                        login: false
                    })
                    // se muestra pantalla motivo de rechazo
                    setRechazo({
                        rechazo: true,
                        motivo_rechazo: infoBrigadista.motivo_rechazo
                    })
                } else {
                    /* Agrega al context general */


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
        // SE AGREGA A CONTEXT
        candidatos.candidatos.agregarCandidato({
            ...candidatos.candidatos,
            infoBrigadista
        })
        /* update AXIOS */
        const url = `${API_REQUEST}candidato_update`;
        try {
            const formData_sci_smi_100_fl = new FormData();
            formData_sci_smi_100_fl.append("file", archivos.sci_smi_100_fl[0]);
            formData_sci_smi_100_fl.append("curp", infoBrigadista.curp);
            formData_sci_smi_100_fl.append("name", 'sci_smi_100');

            const archivo_sci_smi_100 = await axios.post(`${API_REQUEST}carga_archivo`, formData_sci_smi_100_fl, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });


            const formData_sci_smi_200_fl = new FormData();
            formData_sci_smi_200_fl.append("file", archivos.sci_smi_200_fl[0]);
            formData_sci_smi_200_fl.append("curp", infoBrigadista.curp);
            formData_sci_smi_200_fl.append("name", 'sci_smi_200');

            const archivo_sci_smi_200 = await axios.post(`${API_REQUEST}carga_archivo`, formData_sci_smi_200_fl, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });


            const respuesta = await axios.post(url, { data: infoBrigadista, secuencia: secciones });

            if (respuesta.status === 200 && archivo_sci_smi_100.status === 200 && archivo_sci_smi_200.status === 200) {
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
                        login: false
                    })
                    // se muestra pantalla motivo de rechazo
                    setRechazo({
                        rechazo: true,
                        motivo_rechazo: infoBrigadista.motivo_rechazo
                    })
                } else {
                    /* Agrega al context general */


                    setSecciones({
                        ...secciones,
                        s4: seccionCompleta,
                        s5: seccionSiguiente,
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
    const checkDataS5 = async () => {
        // SE AGREGA A CONTEXT
        candidatos.candidatos.agregarCandidato({
            ...candidatos.candidatos,
            infoBrigadista
        })
        /* update AXIOS */

        const formData_s_190_fl = new FormData();
        formData_s_190_fl.append("file", archivos.s_190_fl[0]);
        formData_s_190_fl.append("curp", infoBrigadista.curp);
        formData_s_190_fl.append("name", 's_190');

        const formData_s_130_fl = new FormData();
        formData_s_130_fl.append("file", archivos.s_130_fl[0]);
        formData_s_130_fl.append("curp", infoBrigadista.curp);
        formData_s_130_fl.append("name", 's_130');

        const url = `${API_REQUEST}candidato_update`;

        try {
            const respuesta = await axios.post(url, { data: infoBrigadista, secuencia: secciones });
            const archivo_s_190 = await axios.post(`${API_REQUEST}carga_archivo`, formData_s_190_fl, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            const archivo_s_130 = await axios.post(`${API_REQUEST}carga_archivo`, formData_s_130_fl, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (respuesta.status === 200 && archivo_s_190.status === 200 && archivo_s_130.status === 200) {

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
                        login: false
                    })
                    // se muestra pantalla motivo de rechazo
                    setRechazo({
                        rechazo: true,
                        motivo_rechazo: infoBrigadista.motivo_rechazo
                    })
                } else {
                    /* Agrega al context general */


                    setSecciones({
                        ...secciones,
                        s5: seccionCompleta,
                        s6: seccionSiguiente,
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
    const checkDataS6 = async () => {

        const { opera_autonoma_gps,
            opera_autonoma_mark3,
            opera_autonoma_motosierra,
            conocimientos_primeros_auxilios,
            niv_primeros_auxilios } = infoBrigadista
        const { doc_acred_primeros_auxilios_fl } = archivos

        if (!opera_autonoma_gps || !opera_autonoma_mark3 || !opera_autonoma_motosierra ||
            (conocimientos_primeros_auxilios === '1' && (!niv_primeros_auxilios || !doc_acred_primeros_auxilios_fl))
        ) {
            msgFaltanCampos()
            return
        }

        const formData_doc_acred_primeros_auxilios_fl = new FormData();

        if (doc_acred_primeros_auxilios_fl) {
            formData_doc_acred_primeros_auxilios_fl.append("file", archivos.doc_acred_primeros_auxilios_fl[0]);
            formData_doc_acred_primeros_auxilios_fl.append("curp", infoBrigadista.curp);
            formData_doc_acred_primeros_auxilios_fl.append("name", "doc_acred_primeros_auxilios");
        }

        // SE AGREGA A CONTEXT
        candidatos.candidatos.agregarCandidato({
            ...candidatos.candidatos,
            infoBrigadista
        })
        /* actualizacion de informacion por AXIOS */
        const url = `${API_REQUEST}candidato_update`;
        try {
            const respuesta = await axios.post(url, { data: infoBrigadista, secuencia: secciones });

            if (doc_acred_primeros_auxilios_fl) {
                const archivo_doc_acred_primeros_auxilios_fl = await axios.post(`${API_REQUEST}carga_archivo`, formData_doc_acred_primeros_auxilios_fl, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                if (archivo_doc_acred_primeros_auxilios_fl.status !== 200) {
                    AlertError('no se pudo cargar archivo', 'examen_toeic_toefl_ar')
                }

            }
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
                        login: false
                    })
                    /* Muestra ppantalla de rechazo */
                    setRechazo({
                        rechazo: true,
                        motivo_rechazo: infoBrigadista.motivo_rechazo
                    })
                } else {
                    /* Agrega al context general */


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

        const {
            antecedentes_fecha,
            tiene_epp_completo,
            tiene_mochila_linea,
            tiene_duffel_bag,
            tiene_casa_campania,
            tiene_sleeping_bag,
            tiene_sleeping_pad } = infoBrigadista
        const { carta_antecedentes_fl } = archivos
        if (
            !antecedentes_fecha ||
            !carta_antecedentes_fl ||
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
        // SE AGREGA A CONTEXT
        candidatos.candidatos.agregarCandidato({
            ...candidatos.candidatos,
            infoBrigadista
        })
        /* CARTA_ANTECEDENTES */
        const formData_carta_antecedentes = new FormData();
        formData_carta_antecedentes.append("file", archivos.carta_antecedentes_fl[0]);
        formData_carta_antecedentes.append("curp", infoBrigadista.curp);
        formData_carta_antecedentes.append("name", "carta_antecedentes");


        const url = `${API_REQUEST}candidato_update`;
        try {
            const archivo_carta_antecedentes = await axios.post(`${API_REQUEST}carga_archivo`, formData_carta_antecedentes, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            const respuesta = await axios.post(url, { data: infoBrigadista, secuencia: secciones });
            if (respuesta.status === 200 && archivo_carta_antecedentes.status === 200) {
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
                        login: false
                    })
                    // se muestra pantalla motivo de rechazo
                    setRechazo({
                        rechazo: true,
                        motivo_rechazo: infoBrigadista.motivo_rechazo
                    })
                } else {
                    /* Agrega al context general */


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
            posicion_candidato } = infoBrigadista

        const { examen_toeic_toefl_archivo_fl, l_280_file_fl,
            s_290_file_fl, cert_intern_incendios_file_fl,
            cert_intern_ate_emerg_med_file_fl
        } = archivos

        if (posicion_candidato === 'jefe_de_brigada' || posicion_candidato === 'tecnico') {
            /* si es jefe de brigada o tecnico, debe tener las variables de idioma */
            if (!nivel_ingles || !toeic_toefl || !examen_toeic_toefl_punt ||
                (l_280 === '1' && !l_280_file_fl) ||
                (s_290 === '1' && !s_290_file_fl) ||
                (cert_intern_incendios === '1' && !cert_intern_incendios_file_fl) ||
                (cert_intern_ate_emerg_med === '1' && !cert_intern_ate_emerg_med_file_fl) ||
                !examen_toeic_toefl_archivo_fl
            ) {

                msgFaltanCampos()
                return
            }
            const formData_examen_toeic_toefl_archivo_fl = new FormData();
            formData_examen_toeic_toefl_archivo_fl.append("file", archivos.examen_toeic_toefl_archivo_fl[0]);
            formData_examen_toeic_toefl_archivo_fl.append("curp", infoBrigadista.curp);
            formData_examen_toeic_toefl_archivo_fl.append("name", infoBrigadista.toeic_toefl);
        } else {
            // SI tiene s1, debe cargar los archivos, o responder algo
            if (
                (l_280 === '1' && !l_280_file_fl) || l_280 === '' ||
                (s_290 === '1' && !s_290_file_fl) || s_290 === '' ||
                (cert_intern_incendios === '1' && !cert_intern_incendios_file_fl) || cert_intern_incendios === '' ||
                (cert_intern_ate_emerg_med === '1' && !cert_intern_ate_emerg_med_file_fl) || cert_intern_ate_emerg_med === ''
            ) {

                msgFaltanCampos()
                return
            }
        }
        // SE AGREGA A CONTEXT
        candidatos.candidatos.agregarCandidato({
            ...candidatos.candidatos,
            infoBrigadista
        })

        const formData_examen_toeic_toefl_archivo_fl = new FormData();
        const formData_l_280_file_fl = new FormData();
        const formData_s_290_file_fl = new FormData();
        const formData_cert_intern_incendios_file_fl = new FormData();
        const formData_cert_intern_ate_emerg_med_file_fl = new FormData();


        if (examen_toeic_toefl_archivo_fl) {
            formData_examen_toeic_toefl_archivo_fl.append("file", archivos.examen_toeic_toefl_archivo_fl[0]);
            formData_examen_toeic_toefl_archivo_fl.append("curp", infoBrigadista.curp);
            formData_examen_toeic_toefl_archivo_fl.append("name", infoBrigadista.toeic_toefl);
        }

        if (l_280_file_fl) {
            formData_l_280_file_fl.append("file", archivos.l_280_file_fl[0]);
            formData_l_280_file_fl.append("curp", infoBrigadista.curp);
            formData_l_280_file_fl.append("name", 'l_280_file');
        }

        if (s_290_file_fl) {
            formData_s_290_file_fl.append("file", archivos.s_290_file_fl[0]);
            formData_s_290_file_fl.append("curp", infoBrigadista.curp);
            formData_s_290_file_fl.append("name", 's_290_file');
        }

        if (cert_intern_incendios_file_fl) {
            formData_cert_intern_incendios_file_fl.append("file", archivos.cert_intern_incendios_file_fl[0]);
            formData_cert_intern_incendios_file_fl.append("curp", infoBrigadista.curp);
            formData_cert_intern_incendios_file_fl.append("name", 'cert_intern_incendios_file');
        }

        if (cert_intern_ate_emerg_med_file_fl) {
            formData_cert_intern_ate_emerg_med_file_fl.append("file", archivos.cert_intern_ate_emerg_med_file_fl[0]);
            formData_cert_intern_ate_emerg_med_file_fl.append("curp", infoBrigadista.curp);
            formData_cert_intern_ate_emerg_med_file_fl.append("name", 'cert_intern_ate_emerg_med_file');
        }


        const url = `${API_REQUEST}candidato_update`;
        try {
            setSecciones({
                ...secciones,
                s8: seccionCompleta
            })
            if (examen_toeic_toefl_archivo_fl) {
                const archivo_examen_toeic_toefl_archivo_fl = await axios.post(`${API_REQUEST}carga_archivo`, formData_examen_toeic_toefl_archivo_fl, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                if (archivo_examen_toeic_toefl_archivo_fl.status !== 200) {
                    AlertError('no se pudo cargar archivo', 'examen_toeic_toefl_ar')
                }

            }
            if (l_280_file_fl) {
                const archivo_l_280_file_fl = await axios.post(`${API_REQUEST}carga_archivo`, formData_l_280_file_fl, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                if (archivo_l_280_file_fl.status !== 200) {
                    AlertError('no se pudo cargar archivo', 'l_280')
                }

            }
            if (s_290_file_fl) {
                const archivo_s_290_file_fl = await axios.post(`${API_REQUEST}carga_archivo`, formData_s_290_file_fl, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                if (archivo_s_290_file_fl.status !== 200) {
                    AlertError('no se pudo cargar archivo', 's_290')
                }

            }
            if (cert_intern_incendios_file_fl) {
                const archivo_cert_intern_incendios_file_fl = await axios.post(`${API_REQUEST}carga_archivo`, formData_cert_intern_incendios_file_fl, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });

                if (archivo_cert_intern_incendios_file_fl.status !== 200) {
                    AlertError('no se pudo cargar archivo', 'cert_intern_incendios')
                }

            }
            if (cert_intern_ate_emerg_med_file_fl) {
                const archivo_cert_intern_ate_emerg_med_file_fl = await axios.post(`${API_REQUEST}carga_archivo`, formData_cert_intern_ate_emerg_med_file_fl, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                });
                if (archivo_cert_intern_ate_emerg_med_file_fl.status !== 200) {
                    AlertError('no se pudo cargar archivo', 'cert_intern_ate_emerg_med')
                }
            }

            const respuesta = await axios.post(url, {
                data: infoBrigadista, secuencia: {
                    login: seccionCompleta,
                    s1: seccionCompleta,
                    s2: seccionCompleta,
                    s3: seccionCompleta,
                    s4: seccionCompleta,
                    s5: seccionCompleta,
                    s6: seccionCompleta,
                    s7: seccionCompleta,
                    s8: seccionCompleta,
                }
            })

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
                        login: false
                    })
                    // se muestra pantalla motivo de rechazo
                    setRechazo({
                        rechazo: true,
                        motivo_rechazo: infoBrigadista.motivo_rechazo
                    })
                } else {
                    /* Agrega al context general */



                    Swal.fire(
                        'Buen trabajo',
                        'Se le notificará sobre su proceso de seleccion',
                        'success'
                    )
                    setRechazo({
                        rechazo: true,
                        motivo_rechazo: null
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

    return (
        <>
            <div className='container'>
                {secciones.login.visible &&
                    <Login
                        secciones={secciones}
                        setSecciones={setSecciones}
                        archivos={archivos}
                        setArchivos={setArchivos}
                    />
                }
                {secciones.s1.visible &&
                    <S1
                        state={infoBrigadista}
                        setState={setInfoBrigadista}
                        checkData={checkDataS1}
                        files={archivos}
                        setStateFiles={setArchivos}
                    />
                }

                {secciones.s2.visible &&
                    <S2
                        state={infoBrigadista}
                        setState={setInfoBrigadista}
                        checkData={checkDataS2}
                        files={archivos}
                        setStateFiles={setArchivos}
                    />
                }
                {/* S2 y 3 estan cambiados en hoja de requerimientos */}
                {secciones.s3.visible &&
                    <S3
                        state={infoBrigadista}
                        setState={setInfoBrigadista}
                        checkData={checkDataS3}
                        files={archivos}
                        setStateFiles={setArchivos}
                    />
                }
                {secciones.s4.visible &&
                    <S4
                        state={infoBrigadista}
                        setState={setInfoBrigadista}
                        checkData={checkDataS4}
                        files={archivos}
                        setStateFiles={setArchivos}
                    />
                }
                {secciones.s5.visible &&
                    <S5
                        state={infoBrigadista}
                        setState={setInfoBrigadista}
                        checkData={checkDataS5}
                        files={archivos}
                        setStateFiles={setArchivos}
                    />
                }
                {secciones.s6.visible &&
                    <S6
                        state={infoBrigadista}
                        setState={setInfoBrigadista}
                        checkData={checkDataS6}
                        files={archivos}
                        setStateFiles={setArchivos}
                    />
                }
                {secciones.s7.visible &&
                    <S7
                        state={infoBrigadista}
                        setState={setInfoBrigadista}
                        checkData={checkDataS7}
                        files={archivos}
                        setStateFiles={setArchivos}
                    />
                }
                {secciones.s8.visible &&
                    <S8
                        state={infoBrigadista}
                        setState={setInfoBrigadista}
                        checkData={checkDataS8}
                        files={archivos}
                        setStateFiles={setArchivos}
                    />
                }
            </div>
            {/* rechazo.rechazo */}
            {rechazo.rechazo && <Finalizar
                photo={(archivos.fotografia_fl) ? archivos.fotografia_fl[0] : imagen_persona}
                state={infoBrigadista} />
            }
        </>
    );
}

export default Captura;