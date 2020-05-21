import React from 'react'

const S5 = (props) => {
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
            <h1>EXAMENES</h1>
            {/* S-190 */}
            <div className='col-6'>
                <label className="control-label pt-2">S-190 o CPCIF</label>
                <input
                    className="form-control myInput"
                    name='s-190'
                    type='file'
                    onChange={setInfo}
                    placeholder='Ingrese S-190 o CPCIF...'
                />
            </div>

            {/* S-130 */}
            <div className='col-6'>
                <label className="control-label pt-2">S-130 o CPCIF</label>
                <input
                    className="form-control myInput"
                    name='s-130'
                    type='file'
                    onChange={setInfo}
                    placeholder='Ingrese S-130 o CPCIF...'
                />
            </div>

            {/* S-130 */}
            <div className='col-12'>
                <label className="control-label pt-2">¿Cuántas veces ha sido asignado como recurso nacional en incendios forestales en una entidad federativa distinta a su base?</label>
                <input
                    className="form-control myInput"
                    name='asignado_recurso_nacional'
                    type=''
                    onChange={setInfo}
                    placeholder='¿Cuántas veces ha sido asignado como recurso nacional en incendios forestales...'
                />
            </div>

            {/* S-130 */}
            <div className='col-12'>
                <label className="control-label pt-2">¿Cuántas veces ha sido asignado como recurso en incendios forestales en otro país?</label>
                <input
                    className="form-control myInput"
                    name='asignado_recurso_otro_pais'
                    type=''
                    onChange={setInfo}
                    placeholder='¿Cuántas veces ha sido asignado como recurso en incendios forestales en otro país?'
                />
            </div>

            <h4><br />Liga a examen</h4>

            {/* BTN Continuar */}
            <div className='col-12 pt-5 btn-margin'>
                <button
                    className='btn btn-primary'
                    onClick={checkData}
                >Continuar</button>
            </div>
        </div>
    );
}

export default S5;