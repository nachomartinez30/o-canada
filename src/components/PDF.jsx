import React, { useState, useContext } from 'react';
import moment from 'moment'
import { PDFViewer, Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';

import logo_conafor from '../assets/logo_cnf_2.png'
//import logo_conafor from '../assets/prueba.jpg'
// Create styles cambio menor
const styles = StyleSheet.create({
    page: {
        backgroundColor: '#ffffff',
        paddingTop: '12mm',
        paddingBottom: '8mm',
        paddingLeft: '8mm',
        paddingRight: '8mm',
    },
    sectionTitle: {
        width: '100%',
        maxHeight: '2cm',
    },
    header: {
        fontSize: 25,
        //marginBottom: 20,
        //marginTop: 20,
        textAlign: 'center',
        color: '#f6f6f6',
        backgroundColor: 'grey',
        padding: '1mm',
        borderRadius: '3pt',
    },
    sectionImgTop: {
        width: '100%',
        position: 'relative',
        left: '0',
        marginBottom: '0mm',
        paddingTop: '2mm',
    },
    imageTop: {
        width: '100%',
    },
    sectionImg: {
        width: '20%',
        position: 'relative',
        left: '0',
        marginBottom: '40mm',
        paddingTop: '2mm',
    },
    image: {
        width: '100%',
        height: '131px',
        border: '2pt solid #C8C8C8',
        borderRadius: '8pt',
    },
    sectionDatos: {
        width: '80%',
        position: 'absolute',
        float: 'right',
        right: '8mm',
        top: '49mm',
        paddingLeft: '1cm',
        paddingTop: '2mm',
    },
    DatosInfo: {
        border: '2pt solid #C8C8C8',
        width: 'auto',
        borderRadius: '4pt',
        textAlign: 'center',
        marginTop: '1pt',
        marginBottom: '1pt',
        fontSize: '12pt',
        paddingTop: '1pt',
        paddingBottom: '1pt',
    },
    sectionRequisitosNum: {
        width: '5%',
        position: 'relative',
        left: '0',
        paddingTop: '2mm',
    },
    sectionRequisitos: {
        width: '75%',
        position: 'absolute',
        left: '20mm',
        bottom: '72.1mm',
        paddingBottom: '2mm',
    },
    sectionResultados: {
        width: '20%',
        position: 'absolute',
        bottom: '72.1mm',
        right: '8mm',
        paddingBottom: '2mm',
        textAlign: 'center',
    },
    RequisitosInfo: {
        borderBottom: '2pt solid #C8C8C8',
        fontSize: '15pt',
    },
    RequisitosColor: {
        color: '#256708',
    }
});

const aprobadoColor = { color: '#256708' }
const reprobadoColor = { color: '#a83232' }

// Create Document Component
const PDF = (props) => {



    const { state = {
        "curp": "MADO921030HJCRZS05",
        "rechazo": true,
        "motivo_rechazo": "pasaporte vence en menos de 8 meses",
        "grupo_sanguineo": "",
        "nombres": "Oscar Jaime",
        "apellido_paterno": "Martinez",
        "apellido_materno": "Diaz",
        "rfc": "MADO921030QD9",
        "estado": "19",
        "numero_telefonico_notificaciones": "3319638873",
        "correo_electronico": "nachomartinez3010@gmail.com",
        "posicion_candidato": "jefe_de_cuadrilla",
        "dependencia": "cnf",
        "tipo_dependencia": "forestal",
        "nombre_beneficiario": "Francisco Moreno",
        "telefono_beneficiario": "4657687987",
        "correo_beneficiario": "nachomartinez3010@gmail.com",
        "carta_antecedentes": "",
        "pasaporte_archivo": "",
        "pasaporte_numero": "21212121212",
        "eta_visa_archivo": "",
        "documento_viajar_canada": "eTA",
        "eta_visa_num": "24654657657",
        "licencia_manejo": "",
        "tipo_licencia": "Nacional Traducida",
        "cert_toxicologico": "",
        "cert_medico": "",
        "que_enfermedad": "",
        "que_medicamentos": "",
        "autoevaluacion_salud": "",
        "nivel_ingles": "",
        "toeic_toefl": "",
        "examen_toeic_toefl_punt": null,
        "padece_enfermedad": false,
        "requiere_medicamentos_perm": false,
        "experimento_dolor_pecho": false,
        "experimento_dificultad_respirar": false,
        "presion_arterial_sistolica_diastolica": false,
        "enfermedad_cardiaca": false,
        "cirugia_corazon": false,
        "pulso_mayor_100": false,
        "problemas_afeccion_osea": false,
        "experiencia_personal_consejos": false,
        "medico_personal_recomendo": false,
        "opera_autonoma_gps": false,
        "opera_autonoma_mark3": false,
        "opera_autonoma_motosierra": false,
        "tiene_epp_completo": false,
        "l_280": false,
        "s_290": false,
        "cert_intern_incendios": false,
        "cert_intern_ate_emerg_med": false,
        "fecha_nacimiento": "1992-10-30",
        "fecha_ingreso_dependencia": "2020-01-01",
        "antecedentes_fecha": null,
        "pasaporte_fecha_cad": "2020-09-03",
        "eta_visa_fecha_exp": "2020-12-31",
        "eta_visa_fecha_cad": "2021-12-30",
        "licencia_fecha_cad": "2020-01-01",
        "fecha_cert_toxicologico": null,
        "fecha_cert_medico": null,
        "sexo": "1",
        "anios_experiencia": "1",
        "imc": null,
        "altura": null,
        "peso": null,
        "municipio": "21",
        "fotografia": null,
        "puesto_en_dependencia": "lorem",
        "funciones_dependencia": "logostica",
        "cpcif_s_190": null,
        "cpcif_s_130": null,
        "s_190": null,
        "s_130": null,
        "eventos_plnaeados_sci": false,
        "eventos_plnaeados_sci_fuera": false,
        "eventos_plnaeados_dentro_estructura": false,
        "evaluado_menejo_incidentes": false,
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
        "examen_toeic_toefl_archivo": null,
        "acuerdo_aviso": true
    }, photo = '../assets/user.svg', sections = {
        "login": false,
        "s1": false,
        "s2": false,
        "s3": false,
        "s4": false,
        "s5": false,
        "s6": false,
        "s7": false,
        "s8": false
    }, puesto } = props

    let idioma = ((state.posicion_candidato === 'jefe_de_brigada' || state.posicion_candidato === 'tecnico')
        && state.toeic_toefl)
        ?
        'Aprobado' :
        'No Aplica'



    return (
        <PDFViewer PDFViewer
            width={window.innerWidth}
            height={window.innerHeight}
        >
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.sectionImgTop} debug={false}>
                        <Image
                            style={styles.imageTop}
                            src={logo_conafor}
                        
                        />
                    </View>
                    <View style={styles.sectionTitle} debug={false}>
                        <Text style={styles.header}>
                            Constancia de registro
                    </Text>
                    </View>
                    <View style={styles.sectionImg} debug={false}>
                        <Image
                            style={styles.image}
                            src={(typeof photo === 'object') ? URL.createObjectURL(photo) : photo}
                        />
                    </View>
                    <View style={styles.sectionDatos} debug={false}>
                        <Text style={styles.DatosInfo}>{state.apellido_paterno.toLocaleUpperCase()}</Text>
                        <Text style={styles.DatosInfo}>{state.apellido_materno.toLocaleUpperCase()}</Text>
                        <Text style={styles.DatosInfo}>{state.nombres.toLocaleUpperCase()}</Text>
                        <Text style={styles.DatosInfo}>{'CURP: ' + state.curp}</Text>
                        <Text style={styles.DatosInfo}>{(state.peso) ? 'PESO: ' + state.peso + ' kg' : 'PESO'}</Text>
                        <Text style={styles.DatosInfo}>{(state.altura) ? 'ALTURA: ' + state.altura + ' cm' : 'ALTURA'}</Text>
                        <Text style={styles.DatosInfo}>{'Puesto: ' + puesto}</Text>
                        <Text style={styles.DatosInfo}>{moment(state.fecha_nacimiento).format('DD-MMM-YYYY')}</Text>
                        <Text style={styles.DatosInfo}>{state.dependencia.toLocaleUpperCase()}</Text>

                    </View>
                    <View style={[styles.sectionTitle, styles.sectionTitlePosition2]} debug={false}>
                        <Text style={styles.header}>
                            Requisitos y estándares
                    </Text>
                    </View>
                    <View style={styles.sectionRequisitosNum} debug={false}>
                        <Text style={styles.RequisitosInfo}>1.</Text>
                        {/* <Text style={styles.RequisitosInfo}>2.</Text> */}
                        <Text style={styles.RequisitosInfo}>3.</Text>
                        <Text style={styles.RequisitosInfo}>4.1</Text>
                        <Text style={styles.RequisitosInfo}>4.2</Text>
                        <Text style={styles.RequisitosInfo}>5.1</Text>
                        <Text style={styles.RequisitosInfo}>5.2</Text>
                        <Text style={styles.RequisitosInfo}>6</Text>
                        <Text style={styles.RequisitosInfo}>7</Text>
                        <Text style={styles.RequisitosInfo}>8.</Text>
                        <Text style={styles.RequisitosInfo}>10.1</Text>

                        <Text style={styles.RequisitosInfo}>10.2</Text>
                        {/* <Text style={styles.RequisitosInfo}>12.</Text> */}
                    </View>
                    <View style={styles.sectionRequisitos} debug={false}>
                        <Text style={styles.RequisitosInfo}>Pasaporte Mexicano</Text>
                        <Text style={styles.RequisitosInfo}>Documento para viajar a Canadá</Text>
                        {/* <Text style={styles.RequisitosInfo}>Licencia de manejo</Text> */}
                        <Text style={styles.RequisitosInfo}>Índice de Masa Corporal</Text>
                        <Text style={styles.RequisitosInfo}>Estado de salud</Text>
                        <Text style={styles.RequisitosInfo}>Conocimiento y experiencia SCI</Text>
                        <Text style={styles.RequisitosInfo}>Conocimiento y experiencia en incendios</Text>
                        <Text style={styles.RequisitosInfo}>Buena conducta y equipo de despliegue</Text>
                        {/* <Text style={styles.RequisitosInfo}>Disponibilidad en condiciones ambientales adversas</Text> */}
                        <Text style={styles.RequisitosInfo}>Capacidad para comunicarse en inglés</Text>
                        <Text style={styles.RequisitosInfo}>Liderazgo</Text>

                        <Text style={styles.RequisitosInfo}>GPS</Text>
                        <Text style={styles.RequisitosInfo}>Motobomba Mark III</Text>
                    </View>
                    <View style={styles.sectionResultados} debug={false}>
                        <Text style={[styles.RequisitosInfo, (sections.pasaporte_vigente) ? aprobadoColor : reprobadoColor]}>{(sections.pasaporte_vigente) ? 'Aprobado' : 'No Aprobado'}</Text>
                        <Text style={[styles.RequisitosInfo, (sections.documento_para_viajar_a_canad) ? aprobadoColor : reprobadoColor]}>{(sections.documento_para_viajar_a_canad) ? 'Aprobado' : 'No Aprobado'}</Text>
                        {/* <Text style={[styles.RequisitosInfo, (sections.licencia_de_manejo) ? aprobadoColor : reprobadoColor]}>{(sections.licencia_de_manejo) ? 'Aprobado' : 'No Aprobado'}</Text> */}
                        <Text style={[styles.RequisitosInfo, (sections.indice_de_masa_corporal) ? aprobadoColor : reprobadoColor]}>{(sections.indice_de_masa_corporal) ? 'Aprobado' : 'No Aprobado'}</Text>
                        <Text style={[styles.RequisitosInfo, (sections.salud) ? aprobadoColor : reprobadoColor]}>{(sections.salud) ? 'Aprobado' : 'No Aprobado'}</Text>
                        <Text style={[styles.RequisitosInfo, (sections.conocimiento_y_experiencia_sci) ? aprobadoColor : reprobadoColor]}>{(sections.conocimiento_y_experiencia_sci) ? 'Aprobado' : 'No Aprobado'}</Text>
                        <Text style={[styles.RequisitosInfo, (sections.conocimiento_y_experiencia_en_incendios) ? aprobadoColor : reprobadoColor]}>{(sections.conocimiento_y_experiencia_en_incendios) ? 'Aprobado' : 'No Aprobado'}</Text>
                        <Text style={[styles.RequisitosInfo, (sections.buena_conducta) ? aprobadoColor : reprobadoColor]}>{(sections.buena_conducta) ? 'Aprobado' : 'No Aprobado'}</Text>
                        {/*<Text style={[styles.RequisitosInfo, (sections.disponibilidad_en_condiciones_ambientales_adversas) ? aprobadoColor : reprobadoColor]}>{(sections.disponibilidad_en_condiciones_ambientales_adversas) ? 'Aprobado' : 'No Aprobado'}</Text>*/}
                        <Text style={[styles.RequisitosInfo]}>{idioma}</Text>
                        <Text style={[styles.RequisitosInfo, (sections.liderazgo) ? aprobadoColor : reprobadoColor]}>{(sections.liderazgo) ? 'Aprobado' : 'No Aprobado'}</Text>
                        <Text style={[styles.RequisitosInfo, (state.opera_autonoma_gps) ? aprobadoColor : reprobadoColor]}>{(state.opera_autonoma_gps) ? 'Aprobado' : 'No Aprobado'}</Text>
                        <Text style={[styles.RequisitosInfo, (state.opera_autonoma_mark3) ? aprobadoColor : reprobadoColor]}>{(state.opera_autonoma_mark3) ? 'Aprobado' : 'No Aprobado'}</Text>

                    </View>
                </Page>
            </Document>
        </PDFViewer>
    );
}

export default PDF