import React from 'react'
import SelectSiNo from '../singles/SelectSiNo'

const S4 = (props) => {
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
            {/* SCI/SMI 100 */}
            <div className='col-6'>
                <label className="control-label pt-2">SCI/SMI 100</label>
                <input
                    className="form-control myInput"
                    name='sci-smi_100'
                    type='file'
                    onChange={setInfo}
                    placeholder='Ingrese SCI/SMI 100...'
                />
            </div>

            {/* SCI/SMI 200 */}
            <div className='col-6'>
                <label className="control-label pt-2">SCI/SMI 200</label>
                <input
                    className="form-control myInput"
                    name='sci-smi_200'
                    type='file'
                    onChange={setInfo}
                    placeholder='Ingrese SCI/SMI 200...'
                />
            </div>
            {/* EJEMPLO */}
            <div className='col-12'>
                <label className="control-label danger pt-2">Is Jorge a Slut?</label>
                <SelectSiNo
                    className="form-control myInput"
                    name='ejemplo'
                    onChange={setInfo}
                />
            </div>
        </div>
    );
}

export default S4;