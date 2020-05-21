import React from 'react'
import SelectSiNo from '../singles/SelectSiNo'
import SCI100 from '../components/ExSCI100';

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

            {/* ¿El evaluado ha participado en eventos planeados o no...? */}
            <div className='col-12'>
                <label className="control-label danger pt-2">¿El evaluado ha participado en eventos planeados o no planeados atendidos bajo el SCI?</label>
                <SelectSiNo
                    className="form-control myInput"
                    name='eventos_plnaeados_sci'
                    onChange={setInfo}
                />
            </div>

            {/* ¿El evaluado ha participado en eventos planeados o no planeados...? */}
            <div className='col-12'>
                <label className="control-label danger pt-2">¿El evaluado ha participado en eventos planeados o no planeados atendidos bajo el SCI fuera de su país?</label>
                <SelectSiNo
                    className="form-control myInput"
                    name='eventos_plnaeados_sci_fuera'
                    onChange={setInfo}
                />
            </div>

            {/* ¿El evaluado ha ocupado en eventos planeados o no estructura...? */}
            <div className='col-12'>
                <label className="control-label danger pt-2">¿El evaluado ha ocupado en eventos planeados o no planeados alguna posición dentro de la estructura del SCI?</label>
                <SelectSiNo
                    className="form-control myInput"
                    name='eventos_plnaeados_dentro_estructura'
                    onChange={setInfo}
                />
            </div>

            {/* SCI/SMI 200 */}
            <div className='col-5'>
                <label className="control-label pt-2">Si la respuesta fue “SI” indique cual</label>
                <input
                    className="form-control myInput"
                    name='sci_cual'
                    type=''
                    onChange={setInfo}
                    placeholder='Indique cual...'
                />
            </div>

            {/* ¿El evaluado pertenece a algún Equipo de Manejo de Incidentes? */}
            <div className='col-7'>
                <label className="control-label danger pt-2">¿El evaluado pertenece a algún Equipo de Manejo de Incidentes?</label>
                <SelectSiNo
                    className="form-control myInput"
                    name='evaluado_menejo_incidentes'
                    onChange={setInfo}
                />
            </div>

            <h4><br/>Examen SCI-100 / SCI-200</h4>
            
            <SCI100></SCI100>

        </div>
    );
}

export default S4;