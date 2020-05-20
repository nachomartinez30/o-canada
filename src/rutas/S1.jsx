import React, { useState, useEffect } from 'react'

import DatosPersonales from '../components/DatosPersonales';



const S1 = () => {

    const [infoBrigadista, setInfoBrigadista] = useState({})
    const [archivos, setArchivos] = useState([])

    return (
        <div className='container'>
            <h1 >Formulario captura</h1>
            <DatosPersonales
                state={infoBrigadista}
                setState={setInfoBrigadista}
            />
        </div>
    );
}

export default S1;