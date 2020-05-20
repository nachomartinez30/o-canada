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
import diferenciaFechas from '../helpers/diferenciaFechas';



const Captura = () => {
    const seccionCompleta = { status: 'completo', visible: false };
    const seccionSiguiente = { status: 'actual', visible: true };

    const [secciones, setSecciones] = useState({
        s1: { status: 'faltante', visible: false },
        s2: { status: 'faltante', visible: false },
        s3: { status: 'faltante', visible: false },
        s4: { status: 'faltante', visible: false },
        s5: { status: 'faltante', visible: false },
        s6: { status: 'faltante', visible: false },
        s7: { status: 'faltante', visible: false },
        s8: { status: 'faltante', visible: !false },
    })

    // const [infoBrigadista, setInfoBrigadista] = useState({imc:0})
    const [infoBrigadista, setInfoBrigadista] = useState({ "imc": 28.73174689021093, "nombres": "oscar ignacio", "apellido_paterno": "martinez", "apellido_materno": "diaz", "fecha_nacimiento": "1992-10-30", "curp": "MADO921030HJCRZS05", "rfc": "MADO921030QD9", "estado": "Zapopan", "numero_telefonico_notificaciones": "3319638873", "correo_electronico": "nachomartinez3010@gmail.com", "posicion_candidato": "jefe_de_cuadrilla", "sexo": "1", "altura": "172", "peso": "85", "grupo_sanguineo": "O+", "dependencia": "Conafor", "tipo_dependencia": "forestal", "fecha_ingreso_dependencia": "2020-09-01", "anios_experiencia": "2", "nombre_beneficiario": "Oscar Raul Martinez Blanco", "telefono_beneficiario": "3310438042", "correo_beneficiario": "osrama8@hotmail.com", "carta_antecedentes": "C:\\fakepath\\node.png", "antecedentes_fecha": "2020-05-20", "pasaporte_archivo": "C:\\fakepath\\898408.jpg", "pasaporte_numero": "21212121212", "pasaporte_fecha_cad": "2019-01-01", "eta_visa_archivo": "C:\\fakepath\\que-es-nodejs.png", "documento_viajar_canada": "VISA", "eta_visa_num": "132146574", "eta_visa_fecha_exp": "2019-01-01", "eta_visa_fecha_cad": "2020-01-01", "licencia_manejo": "C:\\fakepath\\898408.jpg", "tipo_licencia": "Nacional", "licencia_fecha_cad": "2020-01-21" })

    const [rechazo, setRechazo] = useState({
        status: false,
        motivo: null
    })


    const rechazarCandidato = (motivo) => {
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
        setRechazo({
            status: true,
            motivo
        })
    }


    /* VALIDACIONES */
    const checkDataS1 = () => {
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
        /* revisar campos vacíos */
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
            Swal.fire({
                icon: 'error',
                title: 'Todos los campos son necesarios'
            })
            return
        }
        /* if IMC > 30  finalizar*/
        if (imc > 30) {
            rechazarCandidato('imc mayo 30')
            return
        } else {
            /*  mostrar siguiente seccion*/
            setSecciones({
                ...secciones,
                s1: seccionCompleta,
                s2: seccionSiguiente,
            })
        }
    }
    const checkDataS2 = () => {
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
        if (!carta_antecedentes ||
            !pasaporte_archivo ||
            !eta_visa_archivo ||
            !antecedentes_fecha ||
            !pasaporte_numero ||
            !pasaporte_fecha_cad ||
            !documento_viajar_canada ||
            !eta_visa_num ||
            !eta_visa_fecha_exp ||
            !eta_visa_fecha_cad ||
            !licencia_manejo ||
            !tipo_licencia ||
            !licencia_fecha_cad) {
            Swal.fire({
                icon: 'error',
                title: 'Todos los campos son necesarios'
            })
            return
        }
        /* por cada fecha de licencia revisar vigencia */

        if (diferenciaFechas(antecedentes_fecha) < 10 || diferenciaFechas(pasaporte_fecha_cad) < 10 ||
            diferenciaFechas(eta_visa_fecha_cad) < 10 || diferenciaFechas(licencia_fecha_cad) < 10
        ) {
            rechazarCandidato('vigencias menores a 10 meses')
        } else {
            setSecciones({
                ...secciones,
                s2: seccionCompleta,
                s3: seccionSiguiente,
            })
        }
    }
    const checkDataS3 = () => {
        /* TODO: rechazo si alguna respuesta is true */
        setSecciones({
            ...secciones,
            s3: seccionCompleta,
            s4: seccionSiguiente,
        })
    }
    const checkDataS4 = () => {
        setSecciones({
            ...secciones,
            s4: seccionCompleta,
            s5: seccionSiguiente,
        })
    }
    const checkDataS5 = () => {
        /* TODO: rechazo si alguna respuesta false */

        setSecciones({
            ...secciones,
            s5: seccionCompleta,
            s6: seccionSiguiente,
        })
    }
    const checkDataS6 = () => {
        setSecciones({
            ...secciones,
            s6: seccionCompleta,
            s7: seccionSiguiente,
        })
    }
    const checkDataS7 = () => {
        setSecciones({
            ...secciones,
            s7: seccionCompleta,
            s8: seccionSiguiente,
        })
    }
    const checkDataS8 = () => {
        setSecciones({
            ...secciones,
            s8: seccionCompleta
        })
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
            {rechazo.status && <Finalizar />}
        </div>
    );
}

export default Captura;