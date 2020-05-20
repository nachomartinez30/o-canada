import React from 'react'
import SelectSiNo from '../singles/SelectSiNo'

const S7 = (props) => {
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

            {/* Cuenta con EPP completo */}
            <div className='col-12'>
                <label className='control-label pt-2'>Cuenta con EPP completo
                    <ul>
                        <li>Casco con barbiquejo</li>
                        <li>Protector de nuca</li>
                        <li>Googles</li>
                        <li>Protector de oídos</li>
                        <li>Camisola mínimo de algodón</li>
                        <li>Pantalón mínimo de algodón</li>
                        <li>Guantes</li>
                        <li>Botas</li>
                        <li>Cinturón negro</li>
                        <li>Chamarra</li>
                        <li>Impermeable</li>
                    </ul>
                </label>
                <SelectSiNo
                    className='form-control myInput'
                    name='tiene_epp_completo'
                    onChange={setInfo}
                />
            </div>

            {/* Cuenta con Mochila de línea */}
            <div className='col-12'>
                <label className='control-label pt-2'>Cuenta con Mochila de línea con los siguientes artículos:
                    <ul>
                        <li>Botiquín individual</li>
                        <li>Recipientes para agua</li>
                        <li>Linterna</li>
                        <li>Brújula</li>
                        <li>Encendedor</li>
                        <li>Alimento</li>
                        <li>Silbato</li>
                        <li>Libreta de campo</li>
                        <li>Navaja</li>
                    </ul>
                </label>
                <SelectSiNo
                    className='form-control myInput'
                    name='tiene_mochila_linea'
                    onChange={setInfo}
                />
            </div>

            {/* Cuenta con Mochila de viaje Duffel Bag */}
            <div className='col-6'>
                <label className='control-label pt-2'>Cuenta con Mochila de viaje Duffel Bag</label>
                <SelectSiNo
                    className='form-control myInput'
                    name='tiene_duffel_bag'
                    onChange={setInfo}
                />
            </div>

            {/* Cuenta con casa de campaña */}
            <div className='col-6'>
                <label className='control-label pt-2'>Cuenta con casa de campaña</label>
                <SelectSiNo
                    className='form-control myInput'
                    name='tiene_casa_campania'
                    onChange={setInfo}
                />
            </div>

            {/* Cuenta con sleeping bag */}
            <div className='col-6'>
                <label className='control-label pt-2'>Cuenta con sleeping bag</label>
                <SelectSiNo
                    className='form-control myInput'
                    name='tiene_sleeping_bag'
                    onChange={setInfo}
                />
            </div>

            {/* Cuenta con sleeping pad */}
            <div className='col-6'>
                <label className='control-label pt-2'>Cuenta con sleeping pad</label>
                <SelectSiNo
                    className='form-control myInput'
                    name='tiene_sleeping_pad'
                    onChange={setInfo}
                />
            </div>

        </div>
    );
}

export default S7;