import React, { memo } from 'react'

const Default = () => {
    return (
        <div>
            {/* Pasaporte No. */}
            <div className='col-12'>
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
            <div className='col-12'>
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
            <div className='col-12'>
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
            <div className='col-12'>
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
            <div className='col-12'>
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
            <div className='col-12'>
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
            <div className='col-12'>
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
            <div className='col-12'>
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
            <div className='col-12'>
                <label className="control-label pt-2">Licencia Tipo F. caducidad</label>
                <input
                    className="form-control myInput"
                    name='licencia__fecha_cad'
                    type='date'
                    onChange={setInfo}
                    placeholder='Ingrese Licencia Tipo F. caducidad...'
                />
            </div>

            {/* Puesto en su dependencia */}
            <div className='col-12'>
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
            <div className='col-12-4'>
                <label className="control-label pt-2">Opera de manera autónoma GPS</label>
                <SelectSiNo
                    name='opera__gps'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Opera de manera autónoma GPS...'
                />
            </div>

            {/* Opera de manera autónoma Bomba Mark 3 */}
            <div className='col-12-4'>
                <label className="control-label pt-2">Opera de manera autónoma Bomba Mark 3</label>
                <SelectSiNo
                    name='opera__bomba_mark_3'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Opera de manera autónoma Bomba Mark 3...'
                />
            </div>

            {/* Opera de manera autónoma Motosierra */}
            <div className='col-12-4'>
                <label className="control-label pt-2">Opera de manera autónoma Motosierra</label>
                <SelectSiNo
                    name='opera__motosierra'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Opera de manera autónoma Motosierra...'
                />
            </div>

            {/* Cuenta con EPP completo */}
            <div className='col-12-4'>
                <label className="control-label pt-2">Cuenta con EPP completo</label>
                <SelectSiNo
                    name='tiene_epp_completo'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Cuenta con EPP completo...'
                />
            </div>

            {/* Cuenta con Mochila de línea */}
            <div className='col-12-4'>
                <label className="control-label pt-2">Cuenta con Mochila de línea</label>
                <SelectSiNo
                    name='tiene_mochila_linea'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Cuenta con Mochila de línea...'
                />
            </div>

            {/* Cuenta con Mochila de viaje Duffel Bag */}
            <div className='col-12-4'>
                <label className="control-label pt-2">Cuenta con Mochila de viaje Duffel Bag</label>
                <SelectSiNo
                    name='tiene_duffel_bag'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Cuenta con Mochila de viaje Duffel Bag...'
                />
            </div>

            {/* Cuenta con casa de campaña */}
            <div className='col-12-4'>
                <label className="control-label pt-2">Cuenta con casa de campaña</label>
                <SelectSiNo
                    name='tiene_casa_campania'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Cuenta con casa de campaña...'
                />
            </div>

            {/* Cuenta con sleeping bag */}
            <div className='col-12-4'>
                <label className="control-label pt-2">Cuenta con sleeping bag</label>
                <SelectSiNo
                    name='tiene_sleeping_bag'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Cuenta con sleeping bag...'
                />
            </div>

            {/* Cuenta con sleeping pad */}
            <div className='col-12-4'>
                <label className="control-label pt-2">Cuenta con sleeping pad</label>
                <SelectSiNo
                    name='tiene_sleeping_pad'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Cuenta con sleeping pad...'
                />
            </div>

            {/* Nivel de inglés */}
            <div className='col-12'>
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
            <div className='col-12'>
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
            <div className='col-12'>
                <label className="control-label pt-2">Examen TOEIC/TOEFL puntuación</label>
                <input
                    className="form-control myInput"
                    name='examen_toeic-toefl_punt'
                    type=''
                    onChange={setInfo}
                    placeholder='Ingrese Examen TOEIC/TOEFL puntuación...'
                />
            </div>

        </div>
    );
}

export default Default;