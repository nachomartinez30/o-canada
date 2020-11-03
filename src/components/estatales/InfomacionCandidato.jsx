import React from 'react'

const InfomacionCandidato = (props) => {
    const { state, setVolver } = props

    return (
        <div className='row body_wrap pb-4'>
            <div className='col-12 col-md-12 center-text'>
                <h2>Datos del candidato seleccionado</h2>
            </div>

            {/* fotografia DEL CANDIDATO */}
            <div className='col-12 col-md-12' style={{textAlign:'center'}}>
                <img src={`http://187.218.230.38/o_canada/archivos/${state.curp}/fotografia.jpg`} alt="Fotografía" width={200} height={200} />
            </div>
            {/* NOMBRE DEL CANDIDATO */}
            <div className='col-12 col-md-12'>
                <label className="control-label pt-2">Nombre del candidato</label>
                <input
                    disabled
                    className={`form-control `}
                    name='nombre_candidato'
                    value={state.nombres}
                    type='text'
                    placeholder='Ingrese Nombre completo...'
                />
            </div>
            {/* CURP DEL CANDIDATO */}
            <div className='col-12 col-md-4'>
                <label className="control-label pt-2">CURP</label>
                <input
                    disabled
                    className={`form-control `}
                    name='curp'
                    value={state.curp}
                    type='text'
                    placeholder='Ingrese Nombre completo...'
                />
            </div>
            {/* estado DEL CANDIDATO */}
            <div className='col-12 col-md-4'>
                <label className="control-label pt-2">Estado</label>
                <input
                    disabled
                    className={`form-control `}
                    name='estado'
                    value={state.nom_ent}
                    type='text'
                    placeholder='Ingrese Nombre completo...'
                />
            </div>
            {/* POSICION DEL CANDIDATO */}
            <div className='col-12 col-md-4'>
                <label className="control-label pt-2">Posición</label>
                <input
                    disabled
                    className={`form-control `}
                    name='estado'
                    value={state.posicion_candidato}
                    type='text'
                    placeholder='Ingrese Nombre completo...'
                />
            </div>
        </div>
    );
}

export default InfomacionCandidato;