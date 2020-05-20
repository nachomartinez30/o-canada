import React, { memo } from 'react'

const Default = () => {
    return (
        <div>

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

        </div>
    );
}

export default Default;