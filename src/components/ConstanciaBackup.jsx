import React from 'react';
import { PDFViewer, Page, Text, View, Document, StyleSheet, Image } from '@react-pdf/renderer';
import imagen_persona from '../assets/fotos/demo_1.jpg'
import diferenciaFechasAnios from '../helpers/diferenciaFechasAnios';

// Create styles
const styles = StyleSheet.create({
    page: {
        display: 'flex',
        //flexDirection: 'row',
        flexWrap: 'wrap',
        //flexFlow: 'column wrap',
        justifyContent: 'flex-start',
        backgroundColor: '#E4E4E4',
        padding: '8mm',
        columnCount: '2',
    },
    sectionTitle: {
        width: '100%',
        maxHeight: '2cm',
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100%',
        //flex: '1',
    },
    header: {
        fontSize: 25,
        //marginBottom: 20,
        //marginTop: 20,
        textAlign: 'center',
        color: 'grey',
        backgroundColor: '#f6f6f6',
        padding: '1mm',
    },
    sectionImg: {
        width: '19%',
        //alignSelf: 'flex-start',
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100%',
        //flex: '1',
    },
    image: {
        width: '100%',
    },
    sectionDatos: {
        width: '79%',
        alignSelf: 'flex-end',
        display: 'flex',
        flexDirection: 'column',
        flexBasis: '100%',
    },
});

// Create Document Component
const ConstanciaRegistro = () => (
    <PDFViewer
        width={window.innerWidth}
        height={window.innerHeight}
    >
        <Document>
            <Page size="A4" style={styles.page}>
                <View style={styles.sectionTitle} debug={true} flex={true}>
                    <Text style={styles.header}>
                        Constancia de registro
                    </Text>
                </View>
                <View style={styles.sectionImg} debug={true} flex={true}>
                    <Image
                        style={styles.image}
                        src={imagen_persona}
                    />
                </View>
                <View style={styles.sectionDatos} debug={true}>
                    <Text>{'Fecha.Nacimiento'}</Text>
                    <Text>{'Institucion'}</Text>
                    <Text>{'Apellid.Paterno'}</Text>
                    <Text>{'Apellid.Materno'}</Text>
                    <Text>{'Nombre'}</Text>
                    <Text>{'Municipio'}</Text>
                    <Text>{'Estado'}</Text>
                    <Text>{'Puesto'}</Text>
                    <Text>{'CURP'}</Text>
                    <Text>{'Peso'}</Text>
                    <Text>{'Estatura'}</Text>
                </View>
                <View style={styles.sectionTitle}>
                    <Text style={styles.header}>
                        Requisitos
                    </Text>
                    <Text>1. Pasaporte Vigente {'Aprobado'}</Text>
                    <Text>2. Documento para viajar a Canadá {'Aprobado'}</Text>
                    <Text>3. Licencia de manejo {'Aprobado'}</Text>
                    <Text>4. Índice de Masa Corporal {'Aprobado'}</Text>
                    <Text>5. Salud {'Aprobado'}</Text>
                    <Text>6.1. Conocimiento y experiencia SCI {'Aprobado'}</Text>
                    <Text>6.2. Conocimiento y experiencia en incendios {'Aprobado'}</Text>
                    <Text>7.1. Buena conducta {'Aprobado'}</Text>
                    <Text>7.2. Disponibilidad en condiciones ambientales adversas {'Aprobado'}</Text>
                    <Text>8. Capacidad para comunicarse en inglés {'Aprobado'}</Text>
                    <Text>9. Liderazgo {'Aprobado'}</Text>
                    <Text>10. Aptitud física {'Aprobado'}</Text>
                    <Text>11. GPS {'Aprobado'}</Text>
                    <Text>12. Motobomba Mark III {'Aprobado'}</Text>
                </View>                
            </Page>
        </Document>
    </PDFViewer>
);

export default ConstanciaRegistro