import React from 'react'
import SelectSiNo from '../singles/SelectSiNo';
import SelectSexo from '../singles/SelectSexo';
import ToMayus from "../helpers/ToMayus";
import curpValida from "../helpers/curpValida";
import InputCURP from "../singles/InputCURP";
import InputRFC from "../singles/InputRFC";


const FrmDatos = (props) => {

    const { state, setState } = props

    const setInfo = (input) => {
        /* setea al state las variables */
        setState({
            ...state,
            [input.target.name]: input.target.value
        })
    }

    return (
        <div className='row'>

            {/* Nombre (s) */}
            <div className='col-12'>
                <label className="control-label pt-2">Nombre (s)</label>
                <input
                    className="form-control myInput"
                    name='nombres'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Nombre(s)...'
                />
            </div>

            {/* Apellido Paterno */}
            <div className='col-6'>
                <label className="control-label pt-2">Apellido Paterno</label>
                <input
                    className="form-control myInput"
                    name='apellido_paterno'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Apellido Paterno...'
                />
            </div>

            {/* Apellido Materno */}
            <div className='col-6'>
                <label className="control-label pt-2">Apellido Materno</label>
                <input
                    className="form-control myInput"
                    name='apellido_materno'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Apellido Materno...'
                />
            </div>

            {/* Estado */}
            <div className='col-6'>

                {/* TODO: select Cat-estado */}
                <label className="control-label pt-2">Estado</label>
                <input
                    className="form-control myInput"
                    name='estado'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Estado...'
                />
            </div>

            {/* Número telefónico para notificaciones */}
            <div className='col-6'>
                <label className="control-label pt-2">Número telefónico para notificaciones</label>
                <input
                    className="form-control myInput"
                    name='numero_telefonico_notificaciones'
                    type='phone'
                    onChange={setInfo}
                    placeholder='Ingrese Número telefónico para notificaciones...'
                />
            </div>

            {/* Correo electrónico */}
            <div className='col-12'>
                <label className="control-label pt-2">Correo electrónico</label>
                <input
                    className="form-control myInput"
                    name='correo_electronico'
                    type='email'
                    onChange={setInfo}
                    placeholder='Ingrese Correo electrónico...'
                />
            </div>

            {/* Fecha de Nacimiento */}
            <div className='col-6'>
                <label className="control-label pt-2">Fecha de Nacimiento</label>
                <input
                    className="form-control myInput"
                    name='fecha_nacimiento'
                    type='date'
                    onChange={setInfo}
                    placeholder='Ingrese Fecha de Nacimiento...'
                />
            </div>

            {/* Sexo */}
            <div className='col-6'>
                <label className="control-label pt-2">Sexo</label>
                <SelectSexo
                    className="form-control myInput"
                    name='sexo'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Sexo...'
                />
            </div>

            {/* Altura (centímetros) */}
            <div className='col-3'>
                <label className="control-label pt-2">Altura (centímetros)</label>
                <input
                    className="form-control myInput"
                    name='altura'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Altura (cm)...'
                />
            </div>

            {/* Peso (kilogramos) */}
            <div className='col-3'>
                <label className="control-label pt-2">Peso (kilogramos)</label>
                <input
                    className="form-control myInput"
                    name='peso'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Peso (kg)...'
                />
            </div>

            {/* IMC */}
            <div className='col-3'>
                <label className="control-label pt-2">IMC</label>
                <input
                    className="form-control myInput"
                    name='imc'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese IMC...'
                />
            </div>

            {/* Grupo Sanguíneo */}
            <div className='col-3'>
                <label className="control-label pt-2">Grupo Sanguíneo</label>
                <input
                    className="form-control myInput"
                    name='grupo_sanguineo'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Grupo Sanguíneo...'
                />
            </div>

            {/* CURP */}
            <div className='col-6'>
                <label className="control-label pt-2">CURP</label>
                <InputCURP
                    className="form-control myInput"
                    name='curp'
                    type=''
                    onChange={setInfo}
                    curp={state.curp}
                    onKeyPressCapture={ToMayus}
                    onBlur={curpValida}
                    placeholder='Ingrese CURP...'
                />
            </div>

            {/* RFC */}
            <div className='col-6'>
                <label className="control-label pt-2">RFC</label>
                <InputRFC
                    className="form-control myInput"
                    name='rfc'
                    rfc={state.rfc}
                    type=''
                    onKeyPressCapture={ToMayus}
                    onChange={setInfo}
                    placeholder='Ingrese RFC...'
                />
            </div>

            {/* Pasaporte No. */}
            <div className='col-6'>
                <label className="control-label pt-2">Pasaporte No.</label>
                <input
                    className="form-control myInput"
                    name='pasaporte_num'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Pasaporte No...'
                />
            </div>

            {/* Pasaporte F. caducidad */}
            <div className='col-6'>
                <label className="control-label pt-2">Pasaporte F. caducidad</label>
                <input
                    className="form-control myInput"
                    name='pasaporte_fecha_cad'
                    type='date'
                    onChange={setInfo}
                    placeholder='Ingrese Pasaporte F. caducidad...'
                />
            </div>

            {/* ETA/Visa No. */}
            <div className='col-6'>
                <label className="control-label pt-2">ETA/Visa No.</label>
                <input
                    className="form-control myInput"
                    name='eta-visa_num'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese ETA/Visa No...'
                />
            </div>

            {/* ETA/Visa F. caducidad */}
            <div className='col-6'>
                <label className="control-label pt-2">ETA/Visa F. caducidad</label>
                <input
                    className="form-control myInput"
                    name='eta-visa_fecha_cad'
                    type='date'
                    onChange={setInfo}
                    placeholder='Ingrese ETA/Visa F. caducidad...'
                />
            </div>

            {/* Licencia de manejo */}
            <div className='col-4'>
                <label className="control-label pt-2">Licencia de manejo</label>
                <input
                    className="form-control myInput"
                    name='licencia_manejo'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Licencia de manejo...'
                />
            </div>

            {/* Internacional */}
            <div className='col-4'>
                <label className="control-label pt-2">Internacional</label>
                <input
                    className="form-control myInput"
                    name='internacional'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Internacional...'
                />
            </div>

            {/* Nacional traducida */}
            <div className='col-4'>
                <label className="control-label pt-2">Nacional traducida</label>
                <input
                    className="form-control myInput"
                    name='nacional_traducida'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Nacional traducida...'
                />
            </div>

            {/* Licencia Tipo */}
            <div className='col-6'>
                <label className="control-label pt-2">Licencia Tipo</label>
                <input
                    className="form-control myInput"
                    name='licencia_tipo'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Licencia Tipo...'
                />
            </div>

            {/* Licencia Tipo F. caducidad */}
            <div className='col-6'>
                <label className="control-label pt-2">Licencia Tipo F. caducidad</label>
                <input
                    className="form-control myInput"
                    name='licencia__fecha_cad'
                    type='date'
                    onChange={setInfo}
                    placeholder='Ingrese Licencia Tipo F. caducidad...'
                />
            </div>

            {/* Dependencia */}
            <div className='col-6'>
                <label className="control-label pt-2">Dependencia</label>
                <input
                    className="form-control myInput"
                    name='dependencia'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Dependencia...'
                />
            </div>

            {/* Tipo de dependencia */}
            <div className='col-6'>
                <label className="control-label pt-2">Tipo de dependencia</label>
                <input
                    className="form-control myInput"
                    name='tipo_dependencia'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Tipo de dependencia...'
                />
            </div>

            {/* Fecha de ingreso a la dependencia */}
            <div className='col-6'>
                <label className="control-label pt-2">Fecha de ingreso a la dependencia</label>
                <input
                    className="form-control myInput"
                    name='fecha_ingreso_dependencia'
                    type='date'
                    onChange={setInfo}
                    placeholder='Ingrese Fecha de ingreso a la dependencia...'
                />
            </div>

            {/* Puesto en su dependencia */}
            <div className='col-6'>
                <label className="control-label pt-2">Puesto en su dependencia</label>
                <input
                    className="form-control myInput"
                    name='puesto_dependencia'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Puesto en su dependencia...'
                />
            </div>

            {/* Funciones en su dependencia */}
            <div className='col-12'>
                <label className="control-label pt-2">Funciones en su dependencia</label>
                <textarea
                    className="form-control myInput"
                    name='funciones_dependencia'
                    rows={5}
                    onChange={setInfo}
                    placeholder='Ingrese Funciones en su dependencia...'
                />
            </div>

            {/* Años de experiencia en actividades de manejo del fuego (comprobables) */}
            <div className='col-12'>
                <label className="control-label pt-2">Años de experiencia en actividades de manejo del fuego (comprobables)</label>
                <input
                    className="form-control myInput"
                    name='anios_experiencia'
                    type='number'
                    onChange={setInfo}
                    placeholder='Ingrese Años de experiencia en actividades de manejo del fuego (comprobables...'
                />
            </div>

            {/* Certificado toxicológico */}
            <div className='col-6'>
                <label className="control-label pt-2">Certificado toxicológico</label>
                <input
                    className="form-control myInput"
                    name='cert_toxicologico'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Certificado toxicológico...'
                />
            </div>

            {/* Certificado toxicológico Fecha */}
            <div className='col-6'>
                <label className="control-label pt-2">Certificado toxicológico Fecha</label>
                <input
                    className="form-control myInput"
                    name='fecha_cert_toxicologico'
                    type='date'
                    onChange={setInfo}
                    placeholder='Ingrese Certificado toxicológico Fecha...'
                />
            </div>

            {/* Certificado médico */}
            <div className='col-6'>
                <label className="control-label pt-2">Certificado médico</label>
                <input
                    className="form-control myInput"
                    name='cert_medico'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Certificado médico...'
                />
            </div>

            {/* Certificado médico Fecha */}
            <div className='col-6'>
                <label className="control-label pt-2">Certificado médico Fecha</label>
                <input
                    className="form-control myInput"
                    name='fecha_cert_medico'
                    type='date'
                    onChange={setInfo}
                    placeholder='Ingrese Certificado médico Fecha...'
                />
            </div>

            {/* ¿Padece alguna enfermedad? */}
            <div className='col-6'>
                <label className="control-label pt-2">¿Padece alguna enfermedad?</label>
                <input
                    className="form-control myInput"
                    name='padece_enfermedad'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese ¿Padece alguna enfermedad...'
                />
            </div>

            {/* ¿Requiere medicamentos de manera permanente? */}
            <div className='col-6'>
                <label className="control-label pt-2">¿Requiere medicamentos de manera permanente?</label>
                <input
                    className="form-control myInput"
                    name='requiere_medicamentos_perm'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese ¿Requiere medicamentos de manera permanente...'
                />
            </div>

            {/* Autoevaluación de salud (formato A) */}
            <div className='col-12'>
                <label className="control-label pt-2">Autoevaluación de salud (formato A)</label>
                <input
                    className="form-control myInput"
                    name='autoevaluacion_salud'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Autoevaluación de salud (formato A...'
                />
            </div>

            {/* SCI/SMI 100 */}
            <div className='col-12'>
                <label className="control-label pt-2">SCI/SMI 100</label>
                <input
                    className="form-control myInput"
                    name='sci-smi_100'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese SCI/SMI 100...'
                />
            </div>

            {/* SCI/SMI 200 */}
            <div className='col-12'>
                <label className="control-label pt-2">SCI/SMI 200</label>
                <input
                    className="form-control myInput"
                    name='sci-smi_200'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese SCI/SMI 200...'
                />
            </div>

            {/* S-190 */}
            <div className='col-12'>
                <label className="control-label pt-2">S-190</label>
                <input
                    className="form-control myInput"
                    name='s-190'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese S-190...'
                />
            </div>

            {/* S-130 */}
            <div className='col-12'>
                <label className="control-label pt-2">S-130</label>
                <input
                    className="form-control myInput"
                    name='s-130'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese S-130...'
                />
            </div>

            {/* CPCIF */}
            <div className='col-12'>
                <label className="control-label pt-2">CPCIF</label>
                <input
                    className="form-control myInput"
                    name='cpcif'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese CPCIF...'
                />
            </div>

            {/* S-290 */}
            <div className='col-12'>
                <label className="control-label pt-2">S-290</label>
                <input
                    className="form-control myInput"
                    name='s-290'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese S-290...'
                />
            </div>

            {/* L-280 */}
            <div className='col-12'>
                <label className="control-label pt-2">L-280</label>
                <input
                    className="form-control myInput"
                    name='l-280'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese L-280...'
                />
            </div>

            {/* Certificación internacional de incendios forestales */}
            <div className='col-12'>
                <label className="control-label pt-2">Certificación internacional de incendios forestales</label>
                <input
                    className="form-control myInput"
                    name='cert_intern_incendios'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Certificación internacional de incendios forestales...'
                />
            </div>

            {/* Certificación internacional en atención de emergencias medicas */}
            <div className='col-12'>
                <label className="control-label pt-2">Certificación internacional en atención de emergencias medicas</label>
                <input
                    className="form-control myInput"
                    name='cert_intern_ate_emerg_med'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Certificación internacional en atención de emergencias medicas...'
                />
            </div>

            {/* Opera de manera autónoma GPS */}
            <div className='col-md-4'>
                <label className="control-label pt-2">Opera de manera autónoma GPS</label>
                <SelectSiNo
                    name='opera__gps'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Opera de manera autónoma GPS...'
                />
            </div>

            {/* Opera de manera autónoma Bomba Mark 3 */}
            <div className='col-md-4'>
                <label className="control-label pt-2">Opera de manera autónoma Bomba Mark 3</label>
                <SelectSiNo
                    name='opera__bomba_mark_3'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Opera de manera autónoma Bomba Mark 3...'
                />
            </div>

            {/* Opera de manera autónoma Motosierra */}
            <div className='col-md-4'>
                <label className="control-label pt-2">Opera de manera autónoma Motosierra</label>
                <SelectSiNo
                    name='opera__motosierra'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Opera de manera autónoma Motosierra...'
                />
            </div>

            {/* Cuenta con EPP completo */}
            <div className='col-md-4'>
                <label className="control-label pt-2">Cuenta con EPP completo</label>
                <SelectSiNo
                    name='tiene_epp_completo'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Cuenta con EPP completo...'
                />
            </div>

            {/* Cuenta con Mochila de línea */}
            <div className='col-md-4'>
                <label className="control-label pt-2">Cuenta con Mochila de línea</label>
                <SelectSiNo
                    name='tiene_mochila_linea'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Cuenta con Mochila de línea...'
                />
            </div>

            {/* Cuenta con Mochila de viaje Duffel Bag */}
            <div className='col-md-4'>
                <label className="control-label pt-2">Cuenta con Mochila de viaje Duffel Bag</label>
                <SelectSiNo
                    name='tiene_duffel_bag'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Cuenta con Mochila de viaje Duffel Bag...'
                />
            </div>

            {/* Cuenta con casa de campaña */}
            <div className='col-md-4'>
                <label className="control-label pt-2">Cuenta con casa de campaña</label>
                <SelectSiNo
                    name='tiene_casa_campania'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Cuenta con casa de campaña...'
                />
            </div>

            {/* Cuenta con sleeping bag */}
            <div className='col-md-4'>
                <label className="control-label pt-2">Cuenta con sleeping bag</label>
                <SelectSiNo
                    name='tiene_sleeping_bag'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Cuenta con sleeping bag...'
                />
            </div>

            {/* Cuenta con sleeping pad */}
            <div className='col-md-4'>
                <label className="control-label pt-2">Cuenta con sleeping pad</label>
                <SelectSiNo
                    name='tiene_sleeping_pad'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Cuenta con sleeping pad...'
                />
            </div>

            {/* Nivel de inglés */}
            <div className='col-6'>
                <label className="control-label pt-2">Nivel de inglés</label>
                <input
                    className="form-control myInput"
                    name='nivel_ingles'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Nivel de inglés...'
                />
            </div>

            {/* Examen TOEIC/TOEFL */}
            <div className='col-6'>
                <label className="control-label pt-2">Examen TOEIC/TOEFL</label>
                <input
                    className="form-control myInput"
                    name='examen_toeic-toefl'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Examen TOEIC/TOEFL...'
                />
            </div>

            {/* Examen TOEIC/TOEFL puntuación */}
            <div className='col-6'>
                <label className="control-label pt-2">Examen TOEIC/TOEFL puntuación</label>
                <input
                    className="form-control myInput"
                    name='examen_toeic-toefl_punt'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Examen TOEIC/TOEFL puntuación...'
                />
            </div>
            <div className='col-12 pt-5'>
                <button className='btn btn-primary'>Enviar</button>
            </div>
        </div>
    );
}
export default FrmDatos;