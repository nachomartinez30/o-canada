import React from 'react'

const S3 = (props) => {
    
    const { state, setState, checkData } = props

    const setInfo = (input) => {
        /* setea al state las variables */
        setState({
            ...state,
            [input.target.name]: input.target.value
        })
    }
    return (
        <div className='row'>
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
        </div>
    );
}

export default S3;