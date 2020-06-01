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
                "curp": "MADO921030HJCRZS05",
                "pass": "",
                "grupo_sanguineo": "",
                "nombres": "Oscar Ignacio",
                "apellido_paterno": "Martinez",
                "apellido_materno": "diaz",
                "rfc": "MADO921030QD9",
                "estado": "05",
                "numero_telefonico_notificaciones": "3319638873",
                "correo_electronico": "nachomartinez3010@gmail.com",
                "posicion_candidato": "combatiente",
                "dependencia": "cnf",
                "tipo_dependencia": "forestal",
                "nombre_beneficiario": "lorem",
                "telefono_beneficiario": "1",
                "correo_beneficiario": "nachomartinez3010@gmail.com",
                "carta_antecedentes": "",
                "pasaporte_archivo": "",
                "pasaporte_numero": "",
                "eta_visa_archivo": "",
                "documento_viajar_canada": "",
                "eta_visa_num": "",
                "licencia_manejo": "",
                "tipo_licencia": "",
                "cert_toxicologico": "",
                "cert_medico": "",
                "que_enfermedad": "",
                "que_medicamentos": "",
                "autoevaluacion_salud": "",
                "nivel_ingles": "",
                "toeic_toefl": "",
                "examen_toeic_toefl_punt": "",
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
                "opera_autonoma_gps": 0,
                "opera_autonoma_mark3": 0,
                "opera_autonoma_motosierra": 0,
                "tiene_epp_completo": 0,
                "tiene_mochila_linea": 0,
                "tiene_duffel_bag": 0,
                "tiene_casa_campania": 0,
                "tiene_sleeping_bag": 0,
                "tiene_sleeping_pad": 0,
                "l_280": 0,
                "s_290": 0,
                "cert_intern_incendios": 0,
                "cert_intern_ate_emerg_med": 0,
                "fecha_nacimiento": "1992-10-30",
                "fecha_ingreso_dependencia": "2020-12-31",
                "antecedentes_fecha": null,
                "pasaporte_fecha_cad": null,
                "eta_visa_fecha_exp": null,
                "eta_visa_fecha_cad": null,
                "licencia_fecha_cad": null,
                "fecha_cert_toxicologico": null,
                "fecha_cert_medico": null,
                "sexo": 1,
                "anios_experiencia": 1,
                "imc": null,
                "altura": null,
                "peso": null,
                "rechazo": 0,
                "motivo_rechazo": null,
                "municipio": "012",
                "fotografia": null,
                "puesto_en_dependencia": "lorem",
                "funciones_dependencia": "operaciones",
                "cpcif_s_190": null,
                "cpcif_s_130": null,
                "s_190": null,
                "s_130": null,
                "eventos_plnaeados_sci": 0,
                "eventos_plnaeados_sci_fuera": 0,
                "eventos_plnaeados_dentro_estructura": 0,
                "evaluado_menejo_incidentes": 0,
                "sci_cual": null,
                "sci_smi_100": null,
                "sci_smi_200": null,
                "examen_smi_100": null,
                "asignado_recurso_nacional": null,
                "asignado_recurso_otro_pais": null,
                "examen_s_190": null,
                "cert_intern_ate_emerg_med_file": null,
                "l_280_file": null,
                "s_290_file": null,
                "cert_intern_incendios_file": null,
                "examen_toeic_toefl_archivo": null
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