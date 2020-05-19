import React, { useState, useEffect } from 'react'
import FrmFiles from '../components/FrmFiles';
import FrmDatos from '../components/FrmDatos';



const FormDatosGenerales = () => {

    const [infoBrigadista, setInfoBrigadista] = useState({})
    const [archivos, setArchivos] = useState([])

    return (
        <div className='container'>
            <h1 >Formulario captura</h1>
            <FrmDatos
                state={infoBrigadista}
                setState={setInfoBrigadista}
            />
            {/*             
            <FrmFiles
                state={archivos}
                setState={setArchivos}
            /> */}
        </div>
    );
}

export default FormDatosGenerales;