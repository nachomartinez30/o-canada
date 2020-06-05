import React, { useReducer } from 'react'
// se importan los types
import { AGREGAR_REGISTRO } from '../../types'
/* se importan el context y se le pasa el reducer */
import candidatoContext from "./candidatoContext";
import candidatoReducer from './candidatoReducer'

const CandidatoState = (props) => {


    const stateInicial = {
        candidato: {
            infoBrigadista: {
                "curp": "MORD800607HVZTZB02",
                "pass": "04af479c3234b9f9c69f3d1062b4fcd191f5dcdb",
                "grupo_sanguineo": "O+",
                "nombres": "Deibi Juan",
                "apellido_paterno": "Mota",
                "apellido_materno": "Ruiz",
                "rfc": "MORD8006079P4",
                "estado": "30",
                "numero_telefonico_notificaciones": "2281115581",
                "correo_electronico": "djatom33@hotmail.com",
                "posicion_candidato": "jefe_de_brigada",
                "dependencia": "Comisión Nacional Forestal",
                "tipo_dependencia": "Federal",
                "nombre_beneficiario": "Alicia Cruz Ferrer",
                "telefono_beneficiario": "2288106454",
                "correo_beneficiario": "ferrer_8525@hotmai.com",
                "carta_antecedentes": "",
                "pasaporte_archivo": "",
                "pasaporte_numero": "G17307433",
                "eta_visa_archivo": "",
                "documento_viajar_canada": "VISA",
                "eta_visa_num": "1234567891",
                "licencia_manejo": "",
                "tipo_licencia": "Nacional Traducida",
                "cert_toxicologico": "",
                "cert_medico": "",
                "que_enfermedad": "",
                "que_medicamentos": "",
                "autoevaluacion_salud": "",
                "nivel_ingles": "basico",
                "toeic_toefl": "toefl",
                "examen_toeic_toefl_punt": "3545",
                "padece_enfermedad": 0,
                "requiere_medicamentos_perm": 0,
                "experimento_dolor_pecho": 0,
                "experimento_dificultad_respirar": 0,
                "presion_arterial_sistolica_diastolica": 0,
                "enfermedad_cardiaca": 0,
                "cirugia_corazon": 0,
                "pulso_mayor_100": 0,
                "problemas_afeccion_osea": 0,
                "experiencia_personal_consejos": 0,
                "medico_personal_recomendo": 0,
                "opera_autonoma_gps": 1,
                "opera_autonoma_mark3": 1,
                "opera_autonoma_motosierra": 1,
                "tiene_epp_completo": 1,
                "tiene_mochila_linea": 1,
                "tiene_duffel_bag": 1,
                "tiene_casa_campania": 1,
                "tiene_sleeping_bag": 1,
                "tiene_sleeping_pad": 1,
                "l_280": 0,
                "s_290": 0,
                "cert_intern_incendios": 0,
                "cert_intern_ate_emerg_med": 0,
                "fecha_nacimiento": "1980-06-07",
                "fecha_ingreso_dependencia": "1998-07-01",
                "antecedentes_fecha": "2020-05-20",
                "pasaporte_fecha_cad": "2021-05-21",
                "eta_visa_fecha_exp": "2015-05-21",
                "eta_visa_fecha_cad": "2021-05-21",
                "licencia_fecha_cad": "2022-05-21",
                "fecha_cert_toxicologico": "2020-05-20",
                "fecha_cert_medico": "2020-05-20",
                "sexo": 1,
                "anios_experiencia": 17,
                "imc": 28.650137741047,
                "altura": 165,
                "peso": 78,
                "rechazo": 0,
                "motivo_rechazo": null,
                "municipio": "087",
                "fotografia": null,
                "puesto_en_dependencia": "Jefe de Departamento",
                "funciones_dependencia": "operaciones",
                "cpcif_s_190": null,
                "cpcif_s_130": null,
                "s_190": null,
                "s_130": null,
                "eventos_plnaeados_sci": 1,
                "eventos_plnaeados_sci_fuera": 1,
                "eventos_plnaeados_dentro_estructura": 1,
                "evaluado_menejo_incidentes": 1,
                "sci_cual": "operaciones",
                "sci_smi_100": null,
                "sci_smi_200": null,
                "examen_smi_100": "aprobado",
                "asignado_recurso_nacional": "9",
                "asignado_recurso_otro_pais": "5",
                "examen_s_190": "aprobado",
                "cert_intern_ate_emerg_med_file": null,
                "l_280_file": null,
                "s_290_file": null,
                "cert_intern_incendios_file": null,
                "examen_toeic_toefl_archivo": null,
                "acuerdo_aviso": 0
            }
        }
    }

    // dipatch ejecuta las acciones
    const [state, dispatch] = useReducer(candidatoReducer, stateInicial)


    const agregarCandidato = candidato => {
        dispatch({
            tipo: AGREGAR_REGISTRO,
            payload: candidato
        })
    }



    return (
        <candidatoContext.Provider
            // dota al provider de el state y los metodos para agregar a este los campos necesarios
            value={
                {
                    candidatos: {
                        ...state.candidato,
                        agregarCandidato
                    }
                }
            }
        >
            {props.children}
        </candidatoContext.Provider>
    )
}

export default CandidatoState;