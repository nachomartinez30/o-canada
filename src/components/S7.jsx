import React from 'react'
import SelectSiNo from '../singles/SelectSiNo'
import AlertaSiguiente from '../singles/AlertaSiguiente'
import diferenciaFechasDias from '../helpers/diferenciaFechaDias'

const S7 = (props) => {
    const { state, setState, checkData, setStateFiles, files } = props

    const setInfo = (input) => {
        if (
            input.target.name === 'carta_antecedentes'
        ) {
            setStateFiles({
                ...files,
                [input.target.name + '_fl']: input.target.files
            })
        } else {
            setState({
                ...state,
                [input.target.name]: input.target.value
            })
        }
    }



    const revisarValidaciones = () => {
        const { tiene_epp_completo, tiene_mochila_linea,
            tiene_duffel_bag, tiene_casa_campania,
            tiene_sleeping_bag, tiene_sleeping_pad, antecedentes_fecha } = state

        const dif_antecedentes = diferenciaFechasDias(antecedentes_fecha)

        if (dif_antecedentes > 31*2) {
            setState({
                ...state,
                rechazo: true,
                motivo_rechazo: 'carta de antecedentes mayor a 2 meses'
            })
        } else {
            if (tiene_epp_completo === '0' ||
                tiene_mochila_linea === '0' ||
                tiene_duffel_bag === '0' ||
                tiene_casa_campania === '0' ||
                tiene_sleeping_bag === '0' ||
                tiene_sleeping_pad === '0') {
                setState({
                    ...state,
                    rechazo: true,
                    motivo_rechazo: 'no cuenta con equipo completo'
                })
            } else {
                setState({
                    ...state,
                    rechazo: false,
                    motivo_rechazo: null
                })
            }
        }
    }
    return (
        <div className='row body_wrap'>
            {/* Carta de no antecedentes penales */}
            <div className='col-12 col-md-6'>
                <label className="control-label pt-2">Carta de no antecedentes penales</label>
                <input
                    className="form-control myInput"
                    name='carta_antecedentes'
                    // value={state.carta_antecedentes}
                    type='file'
                    accept="application/pdf"
                    onChange={setInfo}
                    onBlur={revisarValidaciones}
                    placeholder='Carta de no antecedentes penales'
                />
            </div>

            {/* Fecha de expedición de la carta de antecedentes no penales */}
            <div className='col-12 col-md-6'>
                <label className="control-label pt-2">Fecha de expedición de la carta de antecedentes no penales</label>
                <input
                    className="form-control myInput"
                    name='antecedentes_fecha'
                    value={state.antecedentes_fecha}
                    type='date'
                    onChange={setInfo}
                    onBlur={revisarValidaciones}
                    placeholder='Fecha de expedición de la carta de antecedentes no penales'
                />
            </div>


            {/* Cuenta con EPP completo */}
            <div className='col-12 col-md-12'>
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
                    onBlur={revisarValidaciones}
                    defaultValue={state.tiene_epp_completo}
                    onChange={setInfo}
                />
            </div>

            {/* Cuenta con Mochila de línea */}
            <div className='col-12 col-md-12'>
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
                    onBlur={revisarValidaciones}
                    defaultValue={state.tiene_mochila_linea}
                    onChange={setInfo}
                />
            </div>

            {/* Cuenta con Mochila de viaje Duffel Bag */}
            <div className='col-12 col-md-6'>
                <label className='control-label pt-2'>Cuenta con Mochila de viaje Duffel Bag</label>
                <SelectSiNo
                    className='form-control myInput'
                    name='tiene_duffel_bag'
                    onBlur={revisarValidaciones}
                    defaultValue={state.tiene_duffel_bag}
                    onChange={setInfo}
                />
            </div>

            {/* Cuenta con casa de campaña */}
            <div className='col-12 col-md-6'>
                <label className='control-label pt-2'>Cuenta con casa de campaña</label>
                <SelectSiNo
                    className='form-control myInput'
                    name='tiene_casa_campania'
                    onBlur={revisarValidaciones}
                    defaultValue={state.tiene_casa_campania}
                    onChange={setInfo}
                />
            </div>

            {/* Cuenta con sleeping bag */}
            <div className='col-12 col-md-6'>
                <label className='control-label pt-2'>Cuenta con sleeping bag</label>
                <SelectSiNo
                    className='form-control myInput'
                    name='tiene_sleeping_bag'
                    onBlur={revisarValidaciones}
                    defaultValue={state.tiene_sleeping_bag}
                    onChange={setInfo}
                />
            </div>

            {/* Cuenta con sleeping pad */}
            <div className='col-12 col-md-6'>
                <label className='control-label pt-2'>Cuenta con sleeping pad</label>
                <SelectSiNo
                    className='form-control myInput'
                    name='tiene_sleeping_pad'
                    onBlur={revisarValidaciones}
                    defaultValue={state.tiene_sleeping_pad}
                    onChange={setInfo}
                />
            </div>

            {/* BTN Continuar */}
            <div className='col-12 pt-5 btn-margin'>
                <button
                    className='btn btn-primary'
                     onClick={() =>AlertaSiguiente("Si continúa, no será posible volver a esta seccion",checkData)}
                >Continuar</button>
            </div>
        </div>
    );
}

export default S7;