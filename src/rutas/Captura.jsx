import React, { useState, useEffect } from 'react'
import S1 from '../components/S1';



const Captura = () => {

    const [infoBrigadista, setInfoBrigadista] = useState({
        imc: 0
    })

    return (
        <div className='container'>
            <h1 >Formulario captura</h1>

            <S1
                state={infoBrigadista}
                setState={setInfoBrigadista}
            />
        </div>
    );
}

export default Captura;