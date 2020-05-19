import React from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap'
import SelectSiNo from '../singles/SelectSiNo';

const FrmDatos = (props) => {

    const { data, setData } = props

    return (
        <div className='row'>
            <Form.Label>Apellido Paterno</Form.Label>
            <Form.Control
                name='apellido_paterno'
                type=''
                onChange
                placeholder='Ingrese Apellido Paterno'
            />

            <Form.Label>Apellido Materno</Form.Label>
            <Form.Control
                name='apellido_materno'
                type=''
                onChange
                placeholder='Ingrese Apellido Materno'
            />

            <Form.Label>Nombre (s)</Form.Label>
            <Form.Control
                name='nombres'
                type=''
                onChange
                placeholder='Ingrese Nombre(s)'
            />

            <Form.Label>Estado</Form.Label>
            <Form.Control
                name='estado'
                type=''
                onChange
                placeholder='Ingrese Estado'
            />

            <Form.Label>Número telefónico para notificaciones</Form.Label>
            <Form.Control
                name='numero_telefonico_notificaciones'
                type=''
                onChange
                placeholder='Ingrese Número telefónico para notificaciones'
            />

            <Form.Label>Correo electrónico</Form.Label>
            <Form.Control
                name='correo_electronico'
                type=''
                onChange
                placeholder='Ingrese Correo electrónico'
            />

            <Form.Label>Fecha de Nacimiento</Form.Label>
            <Form.Control
                name='fecha_nacimiento'
                type=''
                onChange
                placeholder='Ingrese Fecha de Nacimiento'
            />

            <Form.Label>Sexo</Form.Label>
            <Form.Control
                name='sexo'
                type=''
                onChange
                placeholder='Ingrese Sexo'
            />

            <Form.Label>Altura (centímetros)</Form.Label>
            <Form.Control
                name='altura'
                type=''
                onChange
                placeholder='Ingrese Altura (cm)'
            />

            <Form.Label>Peso (kilogramos)</Form.Label>
            <Form.Control
                name='peso'
                type=''
                onChange
                placeholder='Ingrese Peso (kg)'
            />

            <Form.Label>IMC</Form.Label>
            <Form.Control
                name='imc'
                type=''
                onChange
                placeholder='Ingrese IMC'
            />

            <Form.Label>Grupo Sanguíneo</Form.Label>
            <Form.Control
                name='grupo_sanguineo'
                type=''
                onChange
                placeholder='Ingrese Grupo Sanguíneo'
            />

            <Form.Label>CURP</Form.Label>
            <Form.Control
                name='curp'
                type=''
                onChange
                placeholder='Ingrese CURP'
            />

            <Form.Label>RFC</Form.Label>
            <Form.Control
                name='rfc'
                type=''
                onChange
                placeholder='Ingrese RFC'
            />

            <Form.Label>Pasaporte No.</Form.Label>
            <Form.Control
                name='pasaporte_num'
                type=''
                onChange
                placeholder='Ingrese Pasaporte No'
            />

            <Form.Label>Pasaporte F. caducidad</Form.Label>
            <Form.Control
                name='pasaporte_fecha_cad'
                type=''
                onChange
                placeholder='Ingrese Pasaporte F. caducidad'
            />

            <Form.Label>ETA/Visa No</Form.Label>
            <Form.Control
                name='eta-visa_num'
                type=''
                onChange
                placeholder='Ingrese ETA/Visa No'
            />

            <Form.Label>ETA/Visa F. caducidad</Form.Label>
            <Form.Control
                name='eta-visa_fecha_cad'
                type=''
                onChange
                placeholder='Ingrese ETA/Visa F. caducidad'
            />

            <Form.Label>Licencia de manejo</Form.Label>
            <Form.Control
                name='licencia_manejo'
                type=''
                onChange
                placeholder='Ingrese Licencia de manejo'
            />

            <Form.Label>Internacional</Form.Label>
            <Form.Control
                name='internacional'
                type=''
                onChange
                placeholder='Ingrese Internacional'
            />

            <Form.Label>Nacional traducida</Form.Label>
            <Form.Control
                name='nacional_traducida'
                type=''
                onChange
                placeholder='Ingrese Nacional traducida'
            />

            <Form.Label>Licencia Tipo</Form.Label>
            <Form.Control
                name='licencia_tipo'
                type=''
                onChange
                placeholder='Ingrese Licencia Tipo'
            />

            <Form.Label>Licencia Tipo F. caducidad</Form.Label>
            <Form.Control
                name='licencia__fecha_cad'
                type=''
                onChange
                placeholder='Ingrese Licencia Tipo F. caducidad'
            />

            <Form.Label>Dependencia</Form.Label>
            <Form.Control
                name='dependencia'
                type=''
                onChange
                placeholder='Ingrese Dependencia'
            />

            <Form.Label>Tipo de dependencia</Form.Label>
            <Form.Control
                name='tipo_dependencia'
                type=''
                onChange
                placeholder='Ingrese Tipo de dependencia'
            />

            <Form.Label>Fecha de ingreso a la dependencia</Form.Label>
            <Form.Control
                name='fecha_ingreso_dependencia'
                type=''
                onChange
                placeholder='Ingrese Fecha de ingreso a la dependencia'
            />

            <Form.Label>Puesto en su dependencia</Form.Label>
            <Form.Control
                name='puesto_dependencia'
                type=''
                onChange
                placeholder='Ingrese Puesto en su dependencia'
            />

            <Form.Label>Funciones en su dependencia</Form.Label>
            <Form.Control
                name='funciones_dependencia'
                type=''
                onChange
                placeholder='Ingrese Funciones en su dependencia'
            />

            <Form.Label>Años de experiencia en actividades de manejo del fuego (comprobables)</Form.Label>
            <Form.Control
                name='anios_experiencia'
                type=''
                onChange
                placeholder='Ingrese Años de experiencia en actividades de manejo del fuego (comprobables'
            />

            <Form.Label>Certificado toxicológico</Form.Label>
            <Form.Control
                name='cert_toxicologico'
                type=''
                onChange
                placeholder='Ingrese Certificado toxicológico'
            />

            <Form.Label>Certificado toxicológico Fecha</Form.Label>
            <Form.Control
                name='fecha_cert_toxicologico'
                type=''
                onChange
                placeholder='Ingrese Certificado toxicológico Fecha'
            />

            <Form.Label>Certificado médico</Form.Label>
            <Form.Control
                name='cert_medico'
                type=''
                onChange
                placeholder='Ingrese Certificado médico'
            />

            <Form.Label>Certificado médico Fecha</Form.Label>
            <Form.Control
                name='fecha_cert_medico'
                type=''
                onChange
                placeholder='Ingrese Certificado médico Fecha'
            />

            <Form.Label>¿Padece alguna enfermedad?</Form.Label>
            <Form.Control
                name='padece_enfermedad'
                type=''
                onChange
                placeholder='Ingrese ¿Padece alguna enfermedad'
            />

            <Form.Label>¿Requiere medicamentos de manera permanente?</Form.Label>
            <Form.Control
                name='requiere_medicamentos_perm'
                type=''
                onChange
                placeholder='Ingrese ¿Requiere medicamentos de manera permanente'
            />

            <Form.Label>Autoevaluación de salud (formato A)</Form.Label>
            <Form.Control
                name='autoevaluacion_salud'
                type=''
                onChange
                placeholder='Ingrese Autoevaluación de salud (formato A'
            />

            <Form.Label>SCI/SMI 100</Form.Label>
            <Form.Control
                name='sci-smi_100'
                type=''
                onChange
                placeholder='Ingrese SCI/SMI 100'
            />

            <Form.Label>SCI/SMI 200</Form.Label>
            <Form.Control
                name='sci-smi_200'
                type=''
                onChange
                placeholder='Ingrese SCI/SMI 200'
            />

            <Form.Label>S-190</Form.Label>
            <Form.Control
                name='s-190'
                type=''
                onChange
                placeholder='Ingrese S-190'
            />

            <Form.Label>S-130</Form.Label>
            <Form.Control
                name='s-130'
                type=''
                onChange
                placeholder='Ingrese S-130'
            />

            <Form.Label>CPCIF</Form.Label>
            <Form.Control
                name='cpcif'
                type=''
                onChange
                placeholder='Ingrese CPCIF'
            />

            <Form.Label>S-290</Form.Label>
            <Form.Control
                name='s-290'
                type=''
                onChange
                placeholder='Ingrese S-290'
            />

            <Form.Label>L-280</Form.Label>
            <Form.Control
                name='l-280'
                type=''
                onChange
                placeholder='Ingrese L-280'
            />

            <Form.Label>Certificación internacional de incendios forestales</Form.Label>
            <Form.Control
                name='cert_intern_incendios'
                type=''
                onChange
                placeholder='Ingrese Certificación internacional de incendios forestales'
            />

            <Form.Label>Certificación internacional en atención de emergencias medicas</Form.Label>
            <Form.Control
                name='cert_intern_ate_emerg_med'
                type=''
                onChange
                placeholder='Ingrese Certificación internacional en atención de emergencias medicas'
            />

            <Form.Label>Opera de manera autónoma GPS</Form.Label>
            <Form.Control
                name='opera__gps'
                type=''
                onChange
                placeholder='Ingrese Opera de manera autónoma GPS'
            />

            <Form.Label>Opera de manera autónoma Bomba Mark 3</Form.Label>
            <Form.Control
                name='opera__bomba_mark_3'
                type=''
                onChange
                placeholder='Ingrese Opera de manera autónoma Bomba Mark 3'
            />

            <Form.Label>Opera de manera autónoma Motosierra</Form.Label>
            <Form.Control
                name='opera__motosierra'
                type=''
                onChange
                placeholder='Ingrese Opera de manera autónoma Motosierra'
            />

            <Form.Label>Cuenta con EPP completo</Form.Label>
            <Form.Control
                name='tiene_epp_completo'
                type=''
                onChange
                placeholder='Ingrese Cuenta con EPP completo'
            />

            <Form.Label>Cuenta con Mochila de línea</Form.Label>
            <Form.Control
                name='tiene_mochila_linea'
                type=''
                onChange
                placeholder='Ingrese Cuenta con Mochila de línea'
            />

            <Form.Label>Cuenta con Mochila de viaje Duffel Bag</Form.Label>
            <Form.Control
                name='tiene_duffel_bag'
                type=''
                onChange
                placeholder='Ingrese Cuenta con Mochila de viaje Duffel Bag'
            />

            <Form.Label>Cuenta con casa de campaña</Form.Label>
            <Form.Control
                name='tiene_casa_campania'
                type=''
                onChange
                placeholder='Ingrese Cuenta con casa de campaña'
            />

            <Form.Label>Cuenta con sleeping bag</Form.Label>
            <Form.Control
                name='tiene_sleeping_bag'
                type=''
                onChange
                placeholder='Ingrese Cuenta con sleeping bag'
            />

            <Form.Label>Cuenta con sleeping pad</Form.Label>
            <Form.Control
                name='tiene_sleeping_pad'
                type=''
                onChange
                placeholder='Ingrese Cuenta con sleeping pad'
            />

            <Form.Label>Nivel de inglés</Form.Label>
            <Form.Control
                name='nivel_ingles'
                type=''
                onChange
                placeholder='Ingrese Nivel de inglés'
            />

            <Form.Label>Examen TOEIC/TOEFL</Form.Label>
            <Form.Control
                name='examen_toeic-toefl'
                type=''
                onChange
                placeholder='Ingrese Examen TOEIC/TOEFL'
            />

            <Form.Label>Examen TOEIC/TOEFL puntuación</Form.Label>
            <Form.Control
                name='examen_toeic-toefl_punt'
                type=''
                onChange
                placeholder='Ingrese Examen TOEIC/TOEFL puntuación'
            />

        </div>
    );
}
export default FrmDatos;