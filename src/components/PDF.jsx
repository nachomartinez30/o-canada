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
        bottom: '59mm',
        paddingBottom: '2mm',
    },
    sectionResultados: {
        width: '20%',
        position: 'absolute',
        bottom: '59mm',
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



    const { state, photo, sections, puesto } = props

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
                        //src={'../assets/logo_cnf.png'}
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
                            Requisitos
                    </Text>
                    </View>
                    <View style={styles.sectionRequisitosNum} debug={false}>
                        <Text style={styles.RequisitosInfo}>1.</Text>
                        <Text style={styles.RequisitosInfo}>2.</Text>
                        <Text style={styles.RequisitosInfo}>3.</Text>
                        <Text style={styles.RequisitosInfo}>4.</Text>
                        <Text style={styles.RequisitosInfo}>5.</Text>
                        <Text style={styles.RequisitosInfo}>6.1.</Text>
                        <Text style={styles.RequisitosInfo}>6.2.</Text>
                        <Text style={styles.RequisitosInfo}>7.1.</Text>
                        <Text style={styles.RequisitosInfo}>7.2.</Text>
                        <Text style={styles.RequisitosInfo}>8.</Text>
                        <Text style={styles.RequisitosInfo}>9.</Text>

                        <Text style={styles.RequisitosInfo}>11.</Text>
                        <Text style={styles.RequisitosInfo}>12.</Text>
                    </View>
                    <View style={styles.sectionRequisitos} debug={false}>
                        <Text style={styles.RequisitosInfo}>Pasaporte Vigente</Text>
                        <Text style={styles.RequisitosInfo}>Documento para viajar a Canadá</Text>
                        <Text style={styles.RequisitosInfo}>Licencia de manejo</Text>
                        <Text style={styles.RequisitosInfo}>Índice de Masa Corporal</Text>
                        <Text style={styles.RequisitosInfo}>Salud</Text>
                        <Text style={styles.RequisitosInfo}>Conocimiento y experiencia SCI</Text>
                        <Text style={styles.RequisitosInfo}>Conocimiento y experiencia en incendios</Text>
                        <Text style={styles.RequisitosInfo}>Buena conducta</Text>
                        <Text style={styles.RequisitosInfo}>Disponibilidad en condiciones ambientales adversas</Text>
                        <Text style={styles.RequisitosInfo}>Capacidad para comunicarse en inglés</Text>
                        <Text style={styles.RequisitosInfo}>Liderazgo</Text>

                        <Text style={styles.RequisitosInfo}>GPS</Text>
                        <Text style={styles.RequisitosInfo}>Motobomba Mark III</Text>
                    </View>
                    <View style={styles.sectionResultados} debug={false}>
                        <Text style={[styles.RequisitosInfo, (sections.pasaporte_vigente) ? aprobadoColor : reprobadoColor]}>{(sections.pasaporte_vigente) ? 'Aprobado' : 'No Aprobado'}</Text>
                        <Text style={[styles.RequisitosInfo, (sections.documento_para_viajar_a_canad) ? aprobadoColor : reprobadoColor]}>{(sections.documento_para_viajar_a_canad) ? 'Aprobado' : 'No Aprobado'}</Text>
                        <Text style={[styles.RequisitosInfo, (sections.licencia_de_manejo) ? aprobadoColor : reprobadoColor]}>{(sections.licencia_de_manejo) ? 'Aprobado' : 'No Aprobado'}</Text>
                        <Text style={[styles.RequisitosInfo, (sections.indice_de_masa_corporal) ? aprobadoColor : reprobadoColor]}>{(sections.indice_de_masa_corporal) ? 'Aprobado' : 'No Aprobado'}</Text>
                        <Text style={[styles.RequisitosInfo, (sections.salud) ? aprobadoColor : reprobadoColor]}>{(sections.salud) ? 'Aprobado' : 'No Aprobado'}</Text>
                        <Text style={[styles.RequisitosInfo, (sections.conocimiento_y_experiencia_sci) ? aprobadoColor : reprobadoColor]}>{(sections.conocimiento_y_experiencia_sci) ? 'Aprobado' : 'No Aprobado'}</Text>
                        <Text style={[styles.RequisitosInfo, (sections.conocimiento_y_experiencia_en_incendios) ? aprobadoColor : reprobadoColor]}>{(sections.conocimiento_y_experiencia_en_incendios) ? 'Aprobado' : 'No Aprobado'}</Text>
                        <Text style={[styles.RequisitosInfo, (sections.buena_conducta) ? aprobadoColor : reprobadoColor]}>{(sections.buena_conducta) ? 'Aprobado' : 'No Aprobado'}</Text>
                        <Text style={[styles.RequisitosInfo, (sections.disponibilidad_en_condiciones_ambientales_adversas) ? aprobadoColor : reprobadoColor]}>{(sections.disponibilidad_en_condiciones_ambientales_adversas) ? 'Aprobado' : 'No Aprobado'}</Text>
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