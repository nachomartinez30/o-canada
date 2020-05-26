import React from 'react';
import { PDFViewer, Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import imagen_persona from '../assets/fotos/demo_1.jpg'

// Create styles
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
    sectionImg: {
        width: '20%',
        position: 'relative',
        left: '0',
        marginBottom: '40mm',
        paddingTop: '2mm',
    },
    image: {
        width: '100%',
        border: '2pt solid #C8C8C8',
        borderRadius: '8pt',
    },
    sectionDatos: {
        width: '80%',
        position: 'absolute',
        float: 'right',
        right: '8mm',
        top: '23mm',
        paddingLeft: '1cm',
        paddingTop: '2mm',
    },
    DatosInfo:{
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
        bottom: '78.1mm',
        paddingBottom: '2mm',
    },
    sectionResultados: {
        width: '20%',
        position: 'absolute',
        bottom: '78.1mm',
        right: '8mm',
        paddingBottom: '2mm',
        textAlign: 'center',
    },
    RequisitosInfo:{
        borderBottom: '2pt solid #C8C8C8',
        fontSize: '15pt',
    },
    RequisitosColor: {
        color: '#256708',
    }
});

// Create Document Component
const ConstanciaRegistro = () => (
    <PDFViewer
        width={window.innerWidth}
        height={window.innerHeight}
    >
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.sectionTitle} debug={false}>
                    <Text style={styles.header}>
                        Constancia de registro
                    </Text>
                </View>
                <View style={styles.sectionImg} debug={false}>
                    <Image
                        style={styles.image}
                        src={imagen_persona}
                    />
                </View>
                <View style={styles.sectionDatos} debug={false}>
                    <Text style={styles.DatosInfo}>{'Institucion'}</Text>
                    <Text style={styles.DatosInfo}>{'Fecha.Nacimiento'}</Text>
                    <Text style={styles.DatosInfo}>{'Apellid.Paterno'}</Text>
                    <Text style={styles.DatosInfo}>{'Apellid.Materno'}</Text>
                    <Text style={styles.DatosInfo}>{'Nombre'}</Text>
                    <Text style={styles.DatosInfo}>{'Municipio'}</Text>
                    <Text style={styles.DatosInfo}>{'Estado'}</Text>
                    <Text style={styles.DatosInfo}>{'Puesto'}</Text>
                    <Text style={styles.DatosInfo}>{'CURP'}</Text>
                    <Text style={styles.DatosInfo}>{'Peso'}</Text>
                    <Text style={styles.DatosInfo}>{'Estatura'}</Text>
                </View>
                <View style={styles.sectionTitle, styles.sectionTitlePosition2} debug={false}>
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
                    <Text style={styles.RequisitosInfo}>10.</Text>
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
                    <Text style={styles.RequisitosInfo}>Aptitud física</Text>
                    <Text style={styles.RequisitosInfo}>GPS</Text>
                    <Text style={styles.RequisitosInfo}>Motobomba Mark III</Text>
                </View>  
                <View style={styles.sectionResultados} debug={false}>
                    <Text style={[styles.RequisitosInfo, { color: '#256708' }]}>{'Aprobado'}</Text>
                    <Text style={[styles.RequisitosInfo, { color: '#256708' }]}>{'Aprobado'}</Text>
                    <Text style={[styles.RequisitosInfo, { color: '#256708' }]}>{'Aprobado'}</Text>
                    <Text style={[styles.RequisitosInfo, { color: '#256708' }]}>{'Aprobado'}</Text>
                    <Text style={[styles.RequisitosInfo, { color: '#256708' }]}>{'Aprobado'}</Text>
                    <Text style={[styles.RequisitosInfo, { color: '#256708' }]}>{'Aprobado'}</Text>
                    <Text style={[styles.RequisitosInfo, { color: '#256708' }]}>{'Aprobado'}</Text>
                    <Text style={[styles.RequisitosInfo, { color: '#256708' }]}>{'Aprobado'}</Text>
                    <Text style={[styles.RequisitosInfo, { color: '#256708' }]}>{'Aprobado'}</Text>
                    <Text style={[styles.RequisitosInfo, { color: '#256708' }]}>{'Aprobado'}</Text>
                    <Text style={[styles.RequisitosInfo, { color: '#256708' }]}>{'Aprobado'}</Text>
                    <Text style={[styles.RequisitosInfo, { color: '#256708' }]}>{'Aprobado'}</Text>
                    <Text style={[styles.RequisitosInfo, { color: '#256708' }]}>{'Aprobado'}</Text>
                    <Text style={[styles.RequisitosInfo, { color: '#256708' }]}>{'Aprobado'}</Text>
                </View>                
            </Page>
        </Document>
    </PDFViewer>
);

export default ConstanciaRegistro